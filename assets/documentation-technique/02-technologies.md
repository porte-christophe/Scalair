# 02 - Technologies

## Stack technique

Le projet est volontairement **100% vanilla** : aucune dépendance, aucun bundler, aucun framework.

| Technologie | Usage |
|---|---|
| HTML5 | Structure de la page (`index.html`) |
| CSS3 | Mise en page, animations, responsive (`css/scalair.css`) |
| JavaScript (ES6+) | Logique de jeu (`script.js`) |

## Pourquoi pas de framework ?

Le projet est une page unique avec peu d'état partagé et pas de routing : un framework (React, Vue...) ou un bundler (Vite, Webpack...) ajouterait de la complexité sans bénéfice réel ici. Le fichier `script.js` manipule directement le DOM via les API natives du navigateur (`document.getElementById`, `classList`, `setInterval`, `getBoundingClientRect`...).

## Fonctionnalités CSS notables utilisées

- **Flexbox** pour la mise en page générale (header, HUD, aquarium, footer).
- **Media queries** (`@media (max-width: ...)`) pour l'adaptation mobile/tablette — voir [10 - Responsive mobile/tablette](10-responsive-mobile.md).
- **`@keyframes`** pour l'animation de secousse lors d'une collision.
- **`transform`** (rotation, translation) pour l'état "poisson mort" et les bulles de dialogue.
- **`position: relative` / `position: absolute`** pour superposer les bulles de dialogue et l'icône crâne sur les poissons.

## Outils utilisés pendant le développement

- **Live Server** (ou équivalent) pour servir la page en local avec rechargement automatique.
- **Playwright** (hors dépôt, utilisé ponctuellement pour vérifier le rendu à différentes tailles d'écran pendant le développement) — ce n'est pas une dépendance du projet, juste un outil de vérification manuelle.
- **GitHub Pages** pour l'hébergement du site en production — voir [11 - Déploiement](11-deploiement.md).

<div align="center">

[![Précédent](https://img.shields.io/badge/Précédent-374151?style=for-the-badge&logo=bookstack&logoColor=white)](01-presentation.md)
[![Suivant](https://img.shields.io/badge/Suivant-2563EB?style=for-the-badge&logo=bookstack&logoColor=white)](03-structure-fichiers.md)

</div>
