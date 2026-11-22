import assert from 'node:assert/strict';
import test from 'node:test';
import config from '../next.config.mjs';

test('protects every route without blocking existing scripts and media', async () => {
  const rules = await config.headers();
  assert.equal(rules.length, 1);
  assert.equal(rules[0].source, '/:path*');
  const headers = Object.fromEntries(rules[0].headers.map(h => [h.key.toLowerCase(), h.value]));
  assert.equal(headers['x-content-type-options'], 'nosniff');
  assert.equal(headers['x-frame-options'], 'DENY');
  assert.equal(headers['referrer-policy'], 'strict-origin-when-cross-origin');
  assert.ok(headers['content-security-policy'].includes("frame-ancestors 'none'"));
  assert.ok(!headers['content-security-policy'].includes('script-src'));
  assert.ok(!headers['content-security-policy'].includes('frame-src'));
  assert.ok(headers['content-security-policy-report-only'].includes('https://www.youtube.com'));
  assert.ok(headers['content-security-policy-report-only'].includes('https://va.vercel-scripts.com'));
  assert.ok(headers['content-security-policy-report-only'].includes("'unsafe-inline'"));
  assert.equal(config.poweredByHeader, false);
});

test('routes the band domains and exposes clean Slow Moving Bird URLs', async () => {
  const rules = await config.rewrites();
  assert.equal(rules.beforeFiles.length, 7);

  for (const [host, destination] of [
    ['drvr8.band', '/drvr8'],
    ['slowmovingbird.band', '/slowmovingbird'],
  ]) {
    const rule = rules.beforeFiles.find(candidate => candidate.destination === destination);
    assert.ok(rule, `Missing rewrite for ${host}`);
    assert.equal(rule.source, '/');
    assert.equal(rule.has[0].type, 'host');
    assert.ok(new RegExp(`^${rule.has[0].value}$`).test(host));
    assert.ok(!new RegExp(`^${rule.has[0].value}$`).test('www.vibeycraft.com'));
  }

  for (const path of ['shows', 'videos', 'photos', 'songs', 'contact']) {
    const rule = rules.beforeFiles.find(candidate => candidate.source === `/${path}`);
    assert.ok(rule, `Missing clean rewrite for /${path}`);
    assert.equal(rule.destination, `/slowmovingbird/${path}`);
    assert.ok(new RegExp(`^${rule.has[0].value}$`).test('slowmovingbird.band'));
  }

  const redirects = await config.redirects();
  assert.equal(redirects.length, 6);
  assert.deepEqual(
    redirects.map(rule => [rule.source, rule.destination]),
    [
      ['/slowmovingbird', '/'],
      ['/slowmovingbird/shows', '/shows'],
      ['/slowmovingbird/videos', '/videos'],
      ['/slowmovingbird/photos', '/photos'],
      ['/slowmovingbird/songs', '/songs'],
      ['/slowmovingbird/contact', '/contact'],
    ],
  );
  for (const rule of redirects) {
    assert.equal(rule.permanent, true);
    assert.ok(new RegExp(`^${rule.has[0].value}$`).test('slowmovingbird.band'));
  }
});

test('allows the existing versioned poster and keeps other image queries restricted', () => {
  assert.deepEqual(config.images.qualities, [75, 90]);
  assert.deepEqual(config.images.localPatterns, [
    { pathname: '/**', search: '' },
    { pathname: '/slowmovingbird/slow-moving-bird-slims-october-28-2026.png', search: '?v=2' },
  ]);
});
