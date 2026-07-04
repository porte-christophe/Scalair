# Scalaire

## Table des matières

- [Documentation du projet](#documentation-du-projet)
- [Documentation technique](#documentation-technique)
- [Structure du projet](#structure-du-projet)

## Documentation du projet

L’ensemble du brief est découpé en fichiers Markdown dédiés dans `assets/doc-jeu-aquarium/`.

- [Documentation du dossier](assets/doc-jeu-aquarium/documentation.md)
- [Contexte du projet](assets/doc-jeu-aquarium/contexte-du-projet.md)
- [Modalités pédagogiques](assets/doc-jeu-aquarium/modalites-pedagogiques.md)
- [Déroulé du projet](assets/doc-jeu-aquarium/deroule-du-projet.md)
- [Modalités d'évaluation](assets/doc-jeu-aquarium/modalites-devaluation.md)
- [Livrables](assets/doc-jeu-aquarium/livrables.md)
- [Critères de performance](assets/doc-jeu-aquarium/criteres-de-performance.md)
- [Wiki](assets/doc-jeu-aquarium/wiki.md)
- [Fonctionnalités attendues](assets/doc-jeu-aquarium/fonctionnalites-attendues.md)

## Documentation technique

Comment le code fonctionne (HTML, CSS, JavaScript), détaillé dans `assets/documentation-technique/`.

- [Documentation du dossier](assets/documentation-technique/documentation.md)
- [Présentation](assets/documentation-technique/01-presentation.md)
- [Technologies](assets/documentation-technique/02-technologies.md)
- [Structure des fichiers](assets/documentation-technique/03-structure-fichiers.md)
- [Structure HTML](assets/documentation-technique/04-html-structure.md)
- [Architecture CSS](assets/documentation-technique/05-css-architecture.md)
- [JavaScript : vue d'ensemble](assets/documentation-technique/06-javascript-vue-ensemble.md)
- [JavaScript : mouvement et collisions](assets/documentation-technique/07-javascript-mouvement-collisions.md)
- [JavaScript : état mort par poisson](assets/documentation-technique/08-javascript-etat-mort.md)
- [JavaScript : logique des boutons](assets/documentation-technique/09-javascript-boutons.md)
- [Responsive mobile/tablette](assets/documentation-technique/10-responsive-mobile.md)
- [Déploiement](assets/documentation-technique/11-deploiement.md)
- [script.js expliqué ligne par ligne](assets/documentation-technique/12-script-explications-techniques.md)

## Structure du projet

```text
Scalair/
├── index.html
├── script.js
├── README.md
├── .gitignore
├── css/
│   └── scalair.css
└── assets/
	├── doc-jeu-aquarium/
	│   ├── documentation.md
	│   ├── contexte-du-projet.md
	│   ├── modalites-pedagogiques.md
	│   ├── deroule-du-projet.md
	│   ├── modalites-devaluation.md
	│   ├── livrables.md
	│   ├── criteres-de-performance.md
	│   ├── wiki.md
	│   ├── fonctionnalites-attendues.md
	│   └── structure-du-projet.md
	├── documentation-technique/
	│   ├── documentation.md
	│   ├── 01-presentation.md
	│   ├── 02-technologies.md
	│   ├── 03-structure-fichiers.md
	│   ├── 04-html-structure.md
	│   ├── 05-css-architecture.md
	│   ├── 06-javascript-vue-ensemble.md
	│   ├── 07-javascript-mouvement-collisions.md
	│   ├── 08-javascript-etat-mort.md
	│   ├── 09-javascript-boutons.md
	│   ├── 10-responsive-mobile.md
	│   ├── 11-deploiement.md
	│   └── 12-script-explications-techniques.md
	├── maquette/
	└── img/
		├── aquarium.jpg
		├── scalairDroit.png
		├── scalairGauche.png
		└── icons/
			├── soigner.svg
			├── nourrir.svg
			├── nettoyer.svg
			└── crane-mort.svg
```

- `index.html` : page principale du mini-jeu
- `script.js` : logique du jeu (mouvement, collisions, PV, état mort, boutons)
- `css/scalair.css` : mise en page, animations et responsive
- `assets/doc-jeu-aquarium/` : documentation du brief pédagogique
- `assets/documentation-technique/` : documentation technique du code (voir ci-dessus)
- `assets/maquette/` : éléments de maquette du projet
- `assets/img/` : images et icônes utilisées par le projet

<div align="center">

[![Commencer](https://img.shields.io/badge/Commencer-0F766E?style=for-the-badge&logo=readthedocs&logoColor=white)](assets/doc-jeu-aquarium/documentation.md)

</div>

