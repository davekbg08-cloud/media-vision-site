import { cp, mkdir, rm } from 'node:fs/promises';

const files = [
  'index.html',
  'applications.html',
  'about.html',
  'privacy-policy.html',
  'terms.html',
  'realisations.html',
  'carrieres.html',
  'merci.html',
  'downloads',
  'assets',
  'README.md',
  'netlify.toml',
];

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });

for (const file of files) {
  await cp(file, `dist/${file}`, { recursive: true });
}

console.log('Static site copied to dist');
