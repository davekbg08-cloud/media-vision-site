# Media Vision — site vitrine

Site statique de Media Vision : présentation, applications (MedConnect, Occasion, Ma Gestion…),
réalisations, carrières, pages légales.

- En ligne : https://davekbg08-cloud.github.io/media-vision-site/
- Nom de domaine personnalisé : voir **[DOMAINE.md](DOMAINE.md)**

## Fichiers principaux

- `index.html` : page complète du site, avec le HTML, le CSS et le JavaScript intégrés.
- `applications.html` : page catalogue des applications, avec les liens Play Store/APK.
- `downloads/` : dossier prévu pour les fichiers APK référencés par `applications.html`.
- `build-static.mjs` : copie le site dans `dist/` (+ `CNAME`, `sitemap.xml`, `robots.txt`).
- `.github/workflows/pages.yml` : publication automatique sur GitHub Pages à chaque push sur `main`.
- `netlify.toml` : configuration Netlify (ancien hébergement, toujours compatible).
- `package.json` : scripts `build` et `dev`.

## Modifier le site

La plupart des textes, produits, services, projets et coordonnées sont dans le bloc `DEFAULT_CONFIG` à la fin de `index.html`.

La liste des applications est dans le tableau `apps` à la fin de `applications.html`.

Les fichiers APK doivent être ajoutés dans `downloads/`. Dans `applications.html`, passe `apkAvailable` à `true` pour chaque application dont le fichier APK est présent.

Le site contient aussi un panneau d'administration côté navigateur. Ses changements sont enregistrés dans le `localStorage` du navigateur, pas dans GitHub. Pour rendre une modification permanente, il faut aussi l'écrire dans `index.html`.

## Lancer en local

```bash
npm run dev
```

Puis ouvrir `http://localhost:8080`.

## Publier

Pousser sur `main` suffit : GitHub Actions construit `dist/` et le publie sur GitHub Pages.

Les formulaires de contact et de candidature passent par FormSubmit (voir `DOMAINE.md`).
