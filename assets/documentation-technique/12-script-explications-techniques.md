# 12 - script.js expliqué ligne par ligne

Ce fichier reprend `script.js` **dans son ordre réel**, section par section, avec une explication à côté de chaque bloc. Pour une vue plus thématique, voir plutôt [06](06-javascript-vue-ensemble.md), [07](07-javascript-mouvement-collisions.md), [08](08-javascript-etat-mort.md) et [09](09-javascript-boutons.md).

## 1. Récupération des éléments HTML (lignes 1-9)

```js
const aquarium = document.getElementById("aquarium");
const poisson1 = document.getElementById("poisson1");
const poisson2 = document.getElementById("poisson2");
const hudPV = document.getElementById("hud-pv");
const bulle1 = document.getElementById("bulle1");
const bulle2 = document.getElementById("bulle2");
```

Toutes les références DOM dont le fichier a besoin sont récupérées **une seule fois**, tout en haut, et stockées dans des `const`. Comme `script.js` est chargé en fin de `<body>` (juste avant `</html>`), le HTML est déjà entièrement présent dans le DOM au moment où ce code s'exécute — pas besoin d'attendre un événement `DOMContentLoaded`.

## 2. Variables de position et démarrage (lignes 15-18)

```js
let initPosScalair1 = 0;
let initPosScalair2 = 90;

initialisation();
```

`initPosScalair1`/`initPosScalair2` stockent la position actuelle de chaque poisson, en pourcentage de la largeur de l'aquarium. `initialisation()` est appelée immédiatement : c'est le point de départ de tout le jeu.

## 3. `initialisation()` et `deplacerPoissons()` (lignes 21-30)

```js
function initialisation(){
	setInterval(deplacerPoissons, 100);
	listenClick();
	setInterval(verifierCollisions, 100);
	setInterval(afficherPointsDeVie,50);
};
function deplacerPoissons() {
	moveDroite();
	moveGauche();
};
```

Démarre les trois boucles du jeu et attache les clics des boutons. Voir [06 - Vue d'ensemble](06-javascript-vue-ensemble.md) pour le détail de pourquoi les deux poissons partagent un seul `setInterval` via `deplacerPoissons`.

## 4. `moveDroite()` et `moveGauche()` (lignes 31-52)

```js
function moveDroite() {
	if (poisson1Mort) return;
	if (initPosScalair1<90) {
		initPosScalair1 += 1;
		let newLeft = initPosScalair1 +"%";
		poisson1.style.left = newLeft;
	}else if (initPosScalair1 == 90) {
		poisson1.style.left = 0+"%";
		initPosScalair1 = 0;
	}
};
```

`return` anticipé si le poisson est mort (voir [08](08-javascript-etat-mort.md)). Sinon, avance de 1% ; arrivé à 90%, revient instantanément à 0% (boucle). `moveGauche()` fait le symétrique pour poisson2 (90% → 0%, puis retour à 90%).

## 5. `listenClick()` (lignes 53-78)

Attache un gestionnaire de clic à chacun des 3 boutons (récupérés par position : `buttons[0]` = Soigner, `buttons[1]` = Nourrir, `buttons[2]` = Nettoyer). Détail complet dans [09 - Logique des boutons](09-javascript-boutons.md).

## 6. Points de vie : déclaration et affichage (lignes 79-98)

```js
let pvPoisson1 = 100;
let pvPoisson2 = 100;
let poisson1Mort = false;
let poisson2Mort = false;

hudPV.innerHTML = `
  <p id="pv-poisson1">Poisson 1 : ${pvPoisson1} PV</p>
  <p id="pv-poisson2">Poisson 2 : ${pvPoisson2} PV</p>
`;

const pvPoisson1Element = document.getElementById("pv-poisson1");
const pvPoisson2Element = document.getElementById("pv-poisson2");

function afficherPointsDeVie() {
    pvPoisson1Element.textContent = `Poisson 1 : ${pvPoisson1} PV`;
    pvPoisson2Element.textContent = `Poisson 2 : ${pvPoisson2} PV`;
}
```

Le HUD est **généré dynamiquement** : `#hud-pv` est vide dans `index.html`, et son contenu (`<p id="pv-poisson1">` / `<p id="pv-poisson2">`) est injecté ici via `innerHTML`, une seule fois au chargement. Les références vers ces `<p>` sont récupérées juste après leur création. `afficherPointsDeVie()` est ensuite appelée toutes les 50ms (voir `initialisation()`) pour rafraîchir le texte affiché — c'est une actualisation **passive** : elle ne fait que refléter les variables `pvPoisson1`/`pvPoisson2`, elle ne les modifie jamais.

## 7. Perte de PV et état mort (lignes 100-127)

Détail complet dans [08 - JavaScript : état mort par poisson](08-javascript-etat-mort.md). En résumé :

- `retirerPointsDeVie(montant)` : dégâts d'une collision poisson-poisson, la seule source de dégâts du jeu (les deux perdent des PV, `verifierMort(2)` est décalée de 1000ms).
- `verifierMort(numeroPoisson)` : marque un poisson mort si ses PV sont à 0 et qu'il n'était pas déjà mort.
- `ressusciter(numeroPoisson)` : remet un poisson mort à 100 PV et vivant.

## 8. Détection de collision (lignes 130-143)

```js
function collisionPoissons() { /* ... */ }
```

Détail complet dans [07 - Mouvement et collisions](07-javascript-mouvement-collisions.md) : détection par rectangles englobants (`getBoundingClientRect`) entre les deux poissons. Une version antérieure détectait aussi la collision avec les bords de l'aquarium (`collisionAquarium`), retirée depuis — voir la note dans [07](07-javascript-mouvement-collisions.md#les-collisions-avec-les-bords-de-laquarium-ont-été-retirées).

## 9. Effets visuels : bulles et secousse (lignes 145-167)

```js
let collisionEnCours = false;
let bulleTimeoutId = null;

function afficherBulles() { /* ... */ }
function declencherSecousse(poisson) { /* ... */ }
```

`afficherBulles()` affiche les bulles de dialogue pendant 1.5s. `declencherSecousse(poisson)` déclenche l'animation de tremblement CSS et la retire dès qu'elle se termine (`animationend`). Détail dans [07 - Mouvement et collisions](07-javascript-mouvement-collisions.md).

## 10. `verifierCollisions()` — le chef d'orchestre (lignes 169-178)

```js
function verifierCollisions() {
    const collisionActuelle = collisionPoissons();
    if (collisionActuelle && !collisionEnCours && !poisson1Mort && !poisson2Mort) {
        retirerPointsDeVie(10);
        afficherBulles();
        declencherSecousse(poisson1);
        declencherSecousse(poisson2);
    }
    collisionEnCours = collisionActuelle;
}
```

Cette fonction, appelée toutes les 100ms, est le point central où tout se rejoint :

1. Elle détecte l'état actuel de la collision poisson-poisson.
2. Elle compare à l'état précédent pour ne réagir qu'au "front montant" (voir [07](07-javascript-mouvement-collisions.md)).
3. Elle vérifie qu'aucun des deux poissons n'est mort avant d'appliquer un effet.
4. Elle déclenche les dégâts et les effets visuels appropriés.
5. Elle met à jour la variable d'état pour le prochain cycle.

C'est la fonction centrale du fichier, mais chaque ligne s'explique par les sections précédentes : elle ne fait qu'orchestrer des fonctions déjà définies plus haut.

<div align="center">

[![Précédent](https://img.shields.io/badge/Précédent-374151?style=for-the-badge&logo=bookstack&logoColor=white)](11-deploiement.md)
[![Retour au sommaire](https://img.shields.io/badge/Retour%20au%20sommaire-2563EB?style=for-the-badge&logo=bookstack&logoColor=white)](documentation.md)

</div>
