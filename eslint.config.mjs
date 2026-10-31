import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  {
    files: ['src/app/learnings/page.tsx', 'src/app/liner-notez/privacy/page.tsx', 'src/app/liner-notez/support/page.tsx'],
    // Preserve these existing full-document links during the security upgrade.
    rules: { '@next/next/no-html-link-for-pages': 'off' },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
