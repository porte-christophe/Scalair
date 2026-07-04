# 01 - Présentation

## Qu'est-ce que ce projet ?

Jeu d'aquarium Scalair est une mini-application web réalisée dans le cadre d'un brief de formation CDA (Concepteur Développeur d'Applications). Deux poissons Scalaire nagent automatiquement dans un aquarium, se blessent en se percutant ou en touchant les bords, et le joueur peut intervenir via trois boutons d'action (Soigner, Nourrir, Nettoyer).

## Objectif du jeu

- Chaque poisson a des points de vie (PV), affichés dans le HUD en haut de la page.
- Les poissons se déplacent seuls, sans contrôle direct du joueur.
- Une collision (poisson contre poisson, ou poisson contre bord de l'aquarium) fait perdre des PV.
- Si les PV d'un poisson tombent à 0, il "meurt" : il s'arrête de nager et devient visuellement figé.
- Le joueur peut soigner, nourrir ou nettoyer l'aquarium pour maintenir ses poissons en vie.

## Pourquoi cette documentation technique ?

Ce dossier explique **comment le code fonctionne**, en particulier la logique de `script.js` qui gère le mouvement, les collisions et l'état de santé des poissons. Il complète le brief pédagogique disponible dans [assets/doc-jeu-aquarium/](../doc-jeu-aquarium/documentation.md), qui décrit le contexte et les attentes du projet plutôt que l'implémentation.

<div align="center">

[![Précédent](https://img.shields.io/badge/Précédent-374151?style=for-the-badge&logo=bookstack&logoColor=white)](documentation.md)
[![Suivant](https://img.shields.io/badge/Suivant-2563EB?style=for-the-badge&logo=bookstack&logoColor=white)](02-technologies.md)

</div>
