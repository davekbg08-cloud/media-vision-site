# Media Vision

Projet statique récupéré depuis le deploy Netlify `media-vision`.

## Fichiers principaux

- `index.html` : page complète du site, avec le HTML, le CSS et le JavaScript intégrés.
- `applications.html` : page catalogue des applications, avec les liens Play Store/APK.
- `downloads/` : dossier prévu pour les fichiers APK référencés par `applications.html`.
- `netlify.toml` : configuration Netlify pour publier la racine du dépôt.
- `package.json` : scripts simples pour lancer le site localement.

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

## Deployer sur Netlify

Netlify peut publier ce dépôt directement. La configuration actuelle publie la racine du projet, sans commande de build.
