import assert from 'node:assert/strict';
import http from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
const base = process.env.SITE_URL || 'http://127.0.0.1:3074';
const baseline = process.env.BASELINE_FILE || new URL('./site-baseline.json', import.meta.url);
const capture = process.env.CAPTURE_BASELINE === '1';
const security = process.env.CHECK_SECURITY !== '0';
const paths = ['/', '/learnings', '/liner-notez/privacy', '/liner-notez/support', ...['drvr8', 'slowmovingbird'].flatMap(b => ['', '/shows', '/videos', '/photos', '/songs', '/contact'].map(p => `/${b}${p}`))];
const snapshots = {};
const assets = new Set();
const links = new Set();
let pages = 0, assetChecks = 0;
const decode = s => s.replaceAll('&amp;', '&').replaceAll('&#x27;', "'").replaceAll('&quot;', '"').replaceAll('&#39;', "'").replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&nbsp;', ' ');
function snapshot(html) {
  const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] || html;
  const plain = body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ');
  const attrs = (tag, attr) => [...body.matchAll(new RegExp(`<${tag}\\b[^>]*?\\b${attr}="([^"]*)"`, 'gi'))].map(m => decode(m[1]));
  return {
    title: decode(html.match(/<title>(.*?)<\/title>/)?.[1] || ''),
    text: decode(plain).replace(/\s+/g, ' ').trim(),
    links: attrs('a', 'href'),
    images: [...body.matchAll(/<img\b[^>]*>/gi)].map(([tag]) => ({
      src: decode(tag.match(/\bsrc="([^"]*)"/)?.[1] || ''),
      alt: decode(tag.match(/\balt="([^"]*)"/)?.[1] || ''),
    })),
    embeds: attrs('iframe', 'src'),
    media: [...attrs('audio', 'src'), ...attrs('video', 'src'), ...attrs('source', 'src')],
  };
}
async function get(path, options = {}) {
  return new Promise((resolve, reject) => {
    const req = http.get(`${base}${path}`, { headers: options.headers }, res => {
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(new Response(Buffer.concat(chunks), { status: res.statusCode, headers: res.headers })));
      res.on('error', reject);
    });
    req.setTimeout(20000, () => req.destroy(new Error(`Timed out: ${path}`)));
    req.on('error', reject);
  });
}

for (const path of paths) {
  const r = await get(path);
  assert.equal(r.status, 200, `${path}: HTTP ${r.status}`);
  const html = await r.text();
  const s = snapshot(html);
  assert.ok(s.title && s.text, `${path}: missing content`);
  assert.ok(!html.includes('Internal Server Error'), `${path}: server error`);
  if (security) {
    assert.equal(r.headers.get('x-content-type-options'), 'nosniff', path);
    assert.equal(r.headers.get('x-frame-options'), 'DENY', path);
    assert.equal(r.headers.get('referrer-policy'), 'strict-origin-when-cross-origin', path);
    assert.ok(r.headers.get('content-security-policy')?.includes("frame-ancestors 'none'"), path);
    assert.ok(r.headers.get('content-security-policy-report-only')?.includes('https://www.youtube.com'), path);
    assert.equal(r.headers.get('x-powered-by'), null, path);
  }
  snapshots[path] = s;
  for (const a of [...s.images.map(x => x.src), ...s.media]) if (a.startsWith('/')) assets.add(a);
  for (const m of html.matchAll(/<(?:script|link)\b[^>]*?\b(?:src|href)="([^\"]+)"/gi)) {
    const a = decode(m[1]); if (a.startsWith('/_next/static/')) assets.add(a);
  }
  for (const a of s.links) if (a.startsWith('/') && !a.startsWith('//')) links.add(a.split('#')[0]);
  for (const a of s.embeds) assert.equal(new URL(a).hostname, 'www.youtube.com', `${path}: unexpected embed host`);
  pages++;
}
for (const a of assets) {
  const r = await get(a);
  assert.equal(r.status, 200, `Asset ${a}: HTTP ${r.status}`);
  assert.ok((await r.arrayBuffer()).byteLength > 0, `Empty asset ${a}`);
  assetChecks++;
}
for (const a of links) {
  if (assets.has(a) || paths.includes(a)) continue;
  const r = await get(a);
  assert.ok(r.status >= 200 && r.status < 400, `Internal link ${a}: ${r.status}`);
  await r.arrayBuffer();
}
for (const host of ['drvr8.band', 'vibeycraft.com', 'www.vibeycraft.com']) {
  const r = await get('/', { headers: { Host: host } });
  assert.equal(r.status, 200, `Host ${host}`);
  const actual = snapshot(await r.text());
  assert.deepEqual(actual, snapshots[host === 'drvr8.band' ? '/drvr8' : '/'], `Host routing ${host}`);
}
// Exercise a small cold derivative and reject unsupported image inputs.
for (const [path, status] of [
  ['/_next/image?url=%2Fdrvr8%2Fcentral-saloon-band-original.jpg&w=96&q=90', 200],
  ['/_next/image?url=%2Fdrvr8%2Fcentral-saloon-band-original.jpg&w=96&q=89', 400],
  ['/_next/image?url=%2Fslowmovingbird%2Fslow-moving-bird-slims-october-28-2026.png%3Fv%3D3&w=96&q=75', 400],
  ['/_next/image?url=https%3A%2F%2Fexample.invalid%2Fimage.png&w=96&q=75', 400],
]) {
  const r = await get(path);
  assert.equal(r.status, status, `Image policy: ${path}`);
  await r.arrayBuffer();
}
assert.equal((await get('/security-regression-missing-page')).status, 404);
if (baseline) {
  if (capture) await writeFile(baseline, JSON.stringify(snapshots, null, 2));
  else assert.deepEqual(snapshots, JSON.parse(await readFile(baseline, 'utf8')), 'Page content/links/images/embeds changed from baseline');
}
console.log(JSON.stringify({ passed: true, pages, assetChecks, internalLinks: links.size, hostnameChecks: 3, imagePolicyChecks: 4, securityHeaders: security, baseline: baseline ? (capture ? 'captured' : 'identical') : 'not supplied' }, null, 2));
