# 03 - Structure des fichiers

## Arborescence complète

```text
jeu-aquarium-scalair/
├── index.html
├── script.js
├── README.md
├── .gitignore
├── css/
│   └── scalair.css
└── assets/
    ├── img/
    │   ├── aquarium.jpg
    │   ├── scalairDroit.png
    │   ├── scalairGauche.png
    │   └── icons/
    │       ├── soigner.svg
    │       ├── nourrir.svg
    │       ├── nettoyer.svg
    │       └── crane-mort.svg
    ├── maquette/
    │   ├── Desktop - Jeu aquarium Scalair.png
    │   └── Mobile - Jeu aquarium Scalair.png
    ├── doc-jeu-aquarium/
    │   └── ... (brief pédagogique, voir README.md)
    └── documentation-technique/
        └── ... (ce dossier)
```

## Rôle de chaque fichier/dossier

| Chemin | Rôle |
|---|---|
| `index.html` | Page unique du jeu : structure du HUD, de l'aquarium, des poissons et des boutons |
| `script.js` | Toute la logique : mouvement, collisions, PV, état mort, boutons |
| `css/scalair.css` | Tous les styles : mise en page, animations, responsive |
| `assets/img/` | Images du jeu (fond d'aquarium, sprites des poissons) |
| `assets/img/icons/` | Icônes SVG créées pour les boutons d'action et l'overlay "poisson mort" |
| `assets/maquette/` | Captures de la maquette desktop/mobile ayant servi de base au design |
| `assets/doc-jeu-aquarium/` | Documentation du brief pédagogique (contexte, modalités, critères d'évaluation) |
| `assets/documentation-technique/` | Cette documentation technique du code |
| `.gitignore` | Exclut `docs/superpowers/` (specs et plans de développement) du suivi Git — gardés en local uniquement |

## Pas de dossier `docs/superpowers/` sur GitHub

Pendant le développement de certaines fonctionnalités, des fichiers de spécification et de plan d'implémentation sont générés dans `docs/superpowers/` en local. Ce dossier est volontairement exclu du dépôt (voir `.gitignore`) : il ne sert que de mémoire de travail pendant le développement, pas de documentation destinée à être publiée.

<div align="center">

[![Précédent](https://img.shields.io/badge/Précédent-374151?style=for-the-badge&logo=bookstack&logoColor=white)](02-technologies.md)
[![Suivant](https://img.shields.io/badge/Suivant-2563EB?style=for-the-badge&logo=bookstack&logoColor=white)](04-html-structure.md)

</div>
