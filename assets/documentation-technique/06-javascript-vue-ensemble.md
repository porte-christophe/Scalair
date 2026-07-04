# 06 - JavaScript : vue d'ensemble

`script.js` est un seul fichier, sans module ni classe, organisé en sections commentées. Voici la carte générale avant de rentrer dans le détail de chaque partie (fichiers [07](07-javascript-mouvement-collisions.md), [08](08-javascript-etat-mort.md), [09](09-javascript-boutons.md)).

## Les grandes sections du fichier

1. **Récupération des éléments HTML** — toutes les références DOM utilisées ailleurs dans le fichier (`aquarium`, `poisson1`, `poisson2`, `bulle1`, `bulle2`...).
2. **Initialisation** — la fonction `initialisation()` qui démarre toutes les boucles du jeu (`setInterval`) et attache les clics des boutons.
3. **Mouvement des poissons** — `deplacerPoissons()`, `moveDroite()`, `moveGauche()`.
4. **Gestion des boutons** — `listenClick()`.
5. **Gestion des points de vie (PV)** — variables d'état, affichage, fonctions de perte de PV, état mort, résurrection.
6. **Collisions** — détection (`collisionPoissons`, `collisionAquarium`) et réaction (`verifierCollisions`).

## Le point d'entrée : `initialisation()`

```js
function initialisation(){
	setInterval(deplacerPoissons, 100);
	listenClick();
	setInterval(verifierCollisions, 100);
	setInterval(afficherPointsDeVie,50);
};
```

Cette fonction est appelée une seule fois, au chargement du script (ligne `initialisation();` en haut du fichier). Elle démarre **trois boucles indépendantes** basées sur `setInterval` :

| Boucle | Fréquence | Rôle |
|---|---|---|
| `deplacerPoissons` | toutes les 100ms | fait avancer les deux poissons |
| `verifierCollisions` | toutes les 100ms | détecte les collisions et applique leurs effets |
| `afficherPointsDeVie` | toutes les 50ms | rafraîchit le texte des PV affiché dans le HUD |

**Pourquoi un seul `setInterval` pour les deux poissons ?** À l'origine, `moveDroite` et `moveGauche` avaient chacun leur propre `setInterval`. Deux timers séparés peuvent dériver l'un par rapport à l'autre avec le temps (le navigateur ne garantit pas qu'ils restent parfaitement synchronisés). `deplacerPoissons()` regroupe les deux appels dans un seul timer, ce qui élimine ce risque de décalage :

```js
function deplacerPoissons() {
	moveDroite();
	moveGauche();
};
```

## Modèle mental à retenir

Le jeu ne repose sur **aucune boucle de rendu unique** (pas de `requestAnimationFrame`) : ce sont trois `setInterval` indépendants qui tournent en parallèle, chacun avec sa propre responsabilité. C'est un choix simple, adapté à un projet de cette taille, mais qui explique pourquoi les fréquences (50ms, 100ms) sont choisies "à la main" plutôt que calculées.

<div align="center">

[![Précédent](https://img.shields.io/badge/Précédent-374151?style=for-the-badge&logo=bookstack&logoColor=white)](05-css-architecture.md)
[![Suivant](https://img.shields.io/badge/Suivant-2563EB?style=for-the-badge&logo=bookstack&logoColor=white)](07-javascript-mouvement-collisions.md)

</div>
