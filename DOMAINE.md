# Brancher un nom de domaine sur le site Media Vision

Le site est publié automatiquement sur **GitHub Pages** à chaque push sur `main`
(workflow `.github/workflows/pages.yml`).

Adresse actuelle : https://davekbg08-cloud.github.io/media-vision-site/

Tout est prêt côté code : il ne reste qu'à acheter le domaine puis suivre les
4 étapes ci-dessous. Dans les exemples, remplace `mondomaine.cd` par ton vrai domaine.

## 1. Configurer le DNS chez le registraire (là où tu as acheté le domaine)

Ajoute ces enregistrements :

| Type  | Nom / Hôte | Valeur                      |
|-------|------------|-----------------------------|
| A     | `@`        | `185.199.108.153`           |
| A     | `@`        | `185.199.109.153`           |
| A     | `@`        | `185.199.110.153`           |
| A     | `@`        | `185.199.111.153`           |
| AAAA  | `@`        | `2606:50c0:8000::153`       |
| AAAA  | `@`        | `2606:50c0:8001::153`       |
| AAAA  | `@`        | `2606:50c0:8002::153`       |
| AAAA  | `@`        | `2606:50c0:8003::153`       |
| CNAME | `www`      | `davekbg08-cloud.github.io` |

Supprime les anciens enregistrements A / CNAME qui pointent ailleurs (par exemple
une page de parking du registraire). La propagation prend de quelques minutes à 24 h.

## 2. Indiquer le domaine à GitHub

Dépôt `media-vision-site` → **Settings → Pages** :

- *Build and deployment* → Source : **GitHub Actions** (déjà le cas).
- *Custom domain* : saisir `www.mondomaine.cd` puis **Save**.
- Quand la vérification DNS est verte, cocher **Enforce HTTPS**.

## 3. Renseigner les variables du dépôt

**Settings → Secrets and variables → Actions → onglet Variables → New repository variable** :

| Nom             | Valeur                      |
|-----------------|-----------------------------|
| `CUSTOM_DOMAIN` | `www.mondomaine.cd`         |
| `SITE_URL`      | `https://www.mondomaine.cd` |

Elles servent au build : le fichier `CNAME`, les balises de partage (`og:url`),
`sitemap.xml` et `robots.txt` utilisent alors ton domaine.

Puis **Actions → Deploy Media Vision to GitHub Pages → Run workflow** pour republier.

## 4. (Recommandé) Vérifier le domaine sur ton compte GitHub

Paramètres du profil GitHub → **Pages → Add a domain** : GitHub donne un
enregistrement `TXT` à ajouter au DNS. Cela empêche quelqu'un d'autre d'utiliser
ton domaine sur GitHub Pages.

## Formulaires (contact et candidature)

GitHub Pages n'a pas de serveur : les formulaires passent par
[FormSubmit](https://formsubmit.co) et arrivent sur `hello.mediavision.tech@gmail.com`.
**Au tout premier envoi**, FormSubmit envoie un e-mail d'activation à cette
adresse : il faut cliquer sur le lien, sinon aucun message n'est transmis.

## Adresses e-mail sur le domaine (facultatif)

Pour avoir `contact@mondomaine.cd`, ajoute les enregistrements `MX` (et `TXT`
SPF) fournis par ton service e-mail (Zoho Mail, Google Workspace, ou la
redirection e-mail du registraire). Ils n'interfèrent pas avec ceux du site.
