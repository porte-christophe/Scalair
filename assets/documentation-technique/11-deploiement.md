# 11 - Déploiement

## Hébergement : GitHub Pages

Le site est publié via **GitHub Pages**, à l'adresse `https://fannysaez.github.io/jeu-aquarium-scalair/`.

Le projet n'a pas de build : pas de framework, pas de bundler, donc pas d'étape de compilation nécessaire avant publication. GitHub Pages sert directement les fichiers du dépôt tels quels.

## Configuration de la source

Dans les paramètres du dépôt (**Settings > Pages**), la source de publication (**Build and deployment > Source**) est réglée sur **"Deploy from a branch"**, avec la branche `main` et le dossier racine (`/`). C'est ce mode qui convient ici, puisqu'il n'y a aucun fichier `.github/workflows/*.yml` dans le dépôt — pas de build personnalisé à exécuter.

À chaque `git push` sur `main`, GitHub reconstruit et republie automatiquement le site (déploiement visible dans l'onglet **Actions** du dépôt, sous le nom "pages build and deployment").

## Dépôt privé, site public

Le dépôt GitHub est **privé**, mais le site publié via Pages est, lui, **public** — n'importe qui avec le lien peut consulter la page en ligne, même sans accès au code source. C'est un avertissement affiché directement dans les paramètres Pages de GitHub.

## Si un déploiement échoue

En cas de croix rouge sur un commit ou un déploiement :

1. Vérifier l'onglet **Actions** du dépôt pour voir le message d'erreur du build.
2. Vérifier que la source Pages est toujours réglée sur "Deploy from a branch" / `main` / `/ (root)` (elle peut parfois être modifiée par erreur).
3. S'assurer que tous les changements ont bien été commités **et poussés** (`git push origin main`) — un changement resté seulement en local ne sera jamais déployé.

<div align="center">

[![Précédent](https://img.shields.io/badge/Précédent-374151?style=for-the-badge&logo=bookstack&logoColor=white)](10-responsive-mobile.md)
[![Suivant](https://img.shields.io/badge/Suivant-2563EB?style=for-the-badge&logo=bookstack&logoColor=white)](12-script-explications-techniques.md)

</div>
