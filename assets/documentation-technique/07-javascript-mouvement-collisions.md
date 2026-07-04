# 07 - JavaScript : mouvement et collisions

## Le mouvement des poissons

Chaque poisson a une position exprimée en **pourcentage** de la largeur de l'aquarium, stockée dans une variable dédiée :

```js
let initPosScalair1 = 0;   // poisson1 part du bord gauche (0%)
let initPosScalair2 = 90;  // poisson2 part du bord droit (90%)
```

`moveDroite()` fait avancer poisson1 vers la droite, 1% à la fois, jusqu'à 90%, puis le replace instantanément à 0% (effet de boucle) :

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

`moveGauche()` fait la même chose en sens inverse pour poisson2 (de 90% vers 0%, puis retour à 90%).

Le `if (poisson1Mort) return;` (respectivement `poisson2Mort`) en tout début de fonction est ce qui **arrête un poisson mort** : tant que ce booléen est vrai, la fonction ne fait plus rien, le poisson reste figé à sa position actuelle. Voir [08 - JavaScript : état mort par poisson](08-javascript-etat-mort.md).

## La détection de collision entre les deux poissons

```js
function collisionPoissons() {
    const p1 = poisson1.getBoundingClientRect();
    const p2 = poisson2.getBoundingClientRect();

    return (
        p1.left < p2.right &&
        p1.right > p2.left &&
        p1.top < p2.bottom &&
        p1.bottom > p2.top
    );
}
```

C'est une détection de collision **par rectangles englobants** (AABB - Axis-Aligned Bounding Box), une technique standard : deux rectangles se chevauchent si et seulement si chacun commence avant que l'autre ne se termine, sur les deux axes (horizontal et vertical). `getBoundingClientRect()` donne la position réelle à l'écran de chaque poisson (en pixels), peu importe comment ils ont été positionnés en CSS (`%`, `transform`, etc.).

C'est la **seule** source de dégâts du jeu : toucher un bord de l'aquarium n'inflige plus de dégâts (voir la note ci-dessous).

## Éviter de répéter les dégâts en boucle : le pattern "front montant"

Un poisson qui reste collé à l'autre pendant plusieurs cycles de `verifierCollisions` (qui tourne toutes les 100ms) ne doit pas perdre des PV à *chaque* cycle, seulement au moment où la collision **commence**. C'est pour ça qu'une variable mémorise l'état de la collision précédente :

```js
let collisionEnCours = false;
```

Et que `verifierCollisions()` compare l'état actuel au précédent avant d'agir :

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

La condition `collisionActuelle && !collisionEnCours` ne devient vraie qu'au moment précis où la collision passe de "absente" à "présente" (un "front montant"). Une fois les dégâts appliqués, `collisionEnCours` est mis à jour à `true`, donc le prochain cycle ne redéclenchera rien tant que les poissons resteront en contact — il faut qu'ils se séparent puis se retouchent pour qu'un nouveau dégât soit infligé.

`!poisson1Mort && !poisson2Mort` empêche qu'un poisson déjà mort continue d'infliger ou de subir des dégâts — voir [08 - JavaScript : état mort par poisson](08-javascript-etat-mort.md).

## Les effets visuels de la collision poisson-poisson

En plus de la perte de PV, une collision entre les deux poissons déclenche deux effets visuels indépendants :

- `afficherBulles()` : affiche une bulle de dialogue au-dessus de chaque poisson pendant 1.5s (classe `.visible` ajoutée puis retirée via `setTimeout`).
- `declencherSecousse(poisson)` : ajoute la classe `.secousse` (qui déclenche l'animation CSS de tremblement), et la retire automatiquement dès que l'animation se termine, via l'événement `animationend` :

```js
function declencherSecousse(poisson) {
    poisson.classList.remove("secousse");
    void poisson.offsetWidth; // force un reflow pour permettre de rejouer l'animation
    poisson.classList.add("secousse");
    poisson.addEventListener("animationend", () => {
        poisson.classList.remove("secousse");
    }, { once: true });
}
```

Le `void poisson.offsetWidth;` force le navigateur à recalculer immédiatement le style de l'élément avant de rajouter la classe. Sans cette ligne, si une nouvelle collision survient pendant qu'une secousse précédente est déjà en cours, le navigateur ignorerait le second `classList.add("secousse")` (la classe étant déjà présente) et l'animation ne rejouerait pas.

## Les collisions avec les bords de l'aquarium ont été retirées

Une première version du jeu infligeait aussi des dégâts (5 PV) quand un poisson touchait un bord de l'aquarium, via une fonction `collisionAquarium(poisson)` et une fonction `retirerPointsDeVieUnique(numeroPoisson, montant)`. Ce comportement a été jugé pas nécessaire et retiré : les deux fonctions, ainsi que les variables `collisionMur1EnCours`/`collisionMur2EnCours`, ont été supprimées. Seule la collision poisson-poisson inflige désormais des dégâts.

<div align="center">

[![Précédent](https://img.shields.io/badge/Précédent-374151?style=for-the-badge&logo=bookstack&logoColor=white)](06-javascript-vue-ensemble.md)
[![Suivant](https://img.shields.io/badge/Suivant-2563EB?style=for-the-badge&logo=bookstack&logoColor=white)](08-javascript-etat-mort.md)

</div>
