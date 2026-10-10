// Copie le site dans dist/ pour GitHub Pages (ou Netlify).
//
// Variables d'environnement facultatives :
//   SITE_URL       URL publique du site, ex. https://www.mondomaine.cd
//                  (sert aux balises og:url, au sitemap et au robots.txt).
//   CUSTOM_DOMAIN  Domaine personnalisé, ex. www.mondomaine.cd
//                  (écrit dans dist/CNAME).
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';

const pages = [
  'index.html',
  'applications.html',
  'about.html',
  'privacy-policy.html',
  'terms.html',
  'realisations.html',
  'carrieres.html',
  'merci.html',
];
const folders = ['downloads', 'assets'];

const OLD_URL = 'https://media-vision.netlify.app';
const DEFAULT_URL = 'https://davekbg08-cloud.github.io/media-vision-site';
const customDomain = (process.env.CUSTOM_DOMAIN || '').trim();
const siteUrl = (
  process.env.SITE_URL ||
  (customDomain ? `https://${customDomain}` : DEFAULT_URL)
).trim().replace(/\/+$/, '');

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });

for (const folder of folders) {
  await cp(folder, `dist/${folder}`, { recursive: true });
}

for (const page of pages) {
  const html = await readFile(page, 'utf8');
  await writeFile(`dist/${page}`, html.replaceAll(OLD_URL, siteUrl));
}

// Le site n'utilise pas Jekyll : on publie les fichiers tels quels.
await writeFile('dist/.nojekyll', '');

if (customDomain) {
  await writeFile('dist/CNAME', `${customDomain}\n`);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .filter((p) => p !== 'merci.html')
  .map((p) => {
    const loc = p === 'index.html' ? `${siteUrl}/` : `${siteUrl}/${p}`;
    return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod></url>`;
  })
  .join('\n')}
</urlset>
`;
await writeFile('dist/sitemap.xml', sitemap);
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);

console.log(`Site copié dans dist/ (URL : ${siteUrl}${customDomain ? `, CNAME : ${customDomain}` : ''})`);
