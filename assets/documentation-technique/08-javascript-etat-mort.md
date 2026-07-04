# 08 - JavaScript : état mort par poisson

## Les points de vie (PV)

Chaque poisson a ses propres PV, initialisés à 100 :

```js
let pvPoisson1 = 100;
let pvPoisson2 = 100;
let poisson1Mort = false;
let poisson2Mort = false;
```

Une seule fonction retire des PV, sur collision poisson-poisson (la seule source de dégâts du jeu — voir [07 - Mouvement et collisions](07-javascript-mouvement-collisions.md)) :

```js
function retirerPointsDeVie(montant) {
    // collision poisson-poisson : les DEUX poissons perdent des PV
    pvPoisson1 = Math.max(0, pvPoisson1 - montant);
    pvPoisson2 = Math.max(0, pvPoisson2 - montant);
    verifierMort(1);
    setTimeout(() => verifierMort(2), 1000);
}
```

`Math.max(0, ...)` empêche les PV de devenir négatifs : ils sont "plafonnés" à 0 en bas.

### Pourquoi un délai de 1000ms sur `verifierMort(2)` ?

Lors d'une collision poisson-poisson, les deux poissons perdent des PV **au même instant**. Si les deux atteignent 0 PV en même temps, les marquer morts tous les deux dans le même appel les ferait mourir visuellement au même instant, ce qui donnait une impression de mort "synchronisée" peu naturelle. Le `setTimeout(() => verifierMort(2), 1000)` décale volontairement la vérification de mort du poisson2 d'une seconde par rapport à celle du poisson1, pour qu'on voie clairement l'un mourir avant l'autre s'ils meurent tous les deux lors de la même collision.

## Marquer un poisson mort : `verifierMort`

```js
function verifierMort(numeroPoisson) {
    if (numeroPoisson === 1 && pvPoisson1 <= 0 && !poisson1Mort) {
        poisson1Mort = true;
        poisson1.classList.add("mort");
    } else if (numeroPoisson === 2 && pvPoisson2 <= 0 && !poisson2Mort) {
        poisson2Mort = true;
        poisson2.classList.add("mort");
    }
}
```

Cette fonction est appelée après **chaque** perte de PV, pour le poisson concerné. Elle ne fait rien si le poisson est déjà mort (`!poisson1Mort`) : sans cette garde, la classe CSS `.mort` pourrait être réappliquée inutilement à chaque nouvelle collision touchant un poisson déjà mort.

Marquer un poisson mort a trois conséquences, réparties dans plusieurs fonctions du fichier :

1. **Il ne bouge plus** : `moveDroite()`/`moveGauche()` s'arrêtent au tout début si `poisson1Mort`/`poisson2Mort` est vrai (voir [07 - Mouvement et collisions](07-javascript-mouvement-collisions.md)).
2. **Il devient visuellement figé** : la classe CSS `.mort` (ajoutée ici) le retourne à 180° et affiche l'icône crâne (`.icone-mort`) superposée — voir [05 - Architecture CSS](05-css-architecture.md).
3. **Il n'est plus impliqué dans les collisions** : `verifierCollisions()` ignore un poisson mort — voir [07 - Mouvement et collisions](07-javascript-mouvement-collisions.md).

Ces trois effets sont **indépendants l'un de l'autre** dans le code (chacun vérifie directement `poisson1Mort`/`poisson2Mort` à sa manière), mais tous découlent de ce seul booléen — c'est la source de vérité unique de l'état "vivant/mort" d'un poisson.

## Ressusciter un poisson : `ressusciter`

```js
function ressusciter(numeroPoisson) {
    if (numeroPoisson === 1) {
        pvPoisson1 = 100;
        poisson1Mort = false;
        poisson1.classList.remove("mort");
    } else {
        pvPoisson2 = 100;
        poisson2Mort = false;
        poisson2.classList.remove("mort");
    }
}
```

Remet les PV à 100, repasse le booléen à `false`, et retire la classe `.mort`. Le mouvement reprend **automatiquement** au prochain tick de `deplacerPoissons()` (aucun redémarrage de `setInterval` n'est nécessaire) : `moveDroite`/`moveGauche` ne font que vérifier le booléen à chaque appel, donc dès qu'il repasse à `false`, la fonction recommence à faire avancer le poisson normalement.

Cette fonction est appelée uniquement par le bouton "Nettoyer" — voir [09 - JavaScript : logique des boutons](09-javascript-boutons.md).

## Il n'y a plus de remise à zéro globale

Avant l'introduction de l'état mort par poisson, une fonction `verifierReinitialisation()` remettait **les deux poissons** à 100 PV dès que l'un d'eux atteignait 0, sans état "mort" visible. Cette fonction a été entièrement supprimée et remplacée par `verifierMort`/`ressusciter` : chaque poisson a maintenant son propre sort, indépendant de l'autre.

<div align="center">

[![Précédent](https://img.shields.io/badge/Précédent-374151?style=for-the-badge&logo=bookstack&logoColor=white)](07-javascript-mouvement-collisions.md)
[![Suivant](https://img.shields.io/badge/Suivant-2563EB?style=for-the-badge&logo=bookstack&logoColor=white)](09-javascript-boutons.md)

</div>
