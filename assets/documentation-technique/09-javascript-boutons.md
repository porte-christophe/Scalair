# 09 - JavaScript : logique des boutons

## Récupération des boutons

```js
function listenClick() {
    const buttons = document.querySelectorAll('button');
    if (buttons[0]) { /* Soigner */ }
    if (buttons[1]) { /* Nourrir */ }
    if (buttons[2]) { /* Nettoyer */ }
}
```

Les boutons ne sont pas récupérés par `id` mais par **position** dans le DOM (`buttons[0]`, `buttons[1]`, `buttons[2]`), dans l'ordre où ils apparaissent dans `index.html` : Soigner, Nourrir, Nettoyer. Le `if (buttons[N])` protège contre une éventuelle absence du bouton (le code ne plante pas si le HTML venait à changer).

## Soigner et Nourrir : même comportement

```js
buttons[0].addEventListener('click', function () {
    if (!poisson1Mort) pvPoisson1 = 100;
    if (!poisson2Mort) pvPoisson2 = 100;
    alert("Vous avez soigner tout l'aquarium");
});
```

Le bouton Nourrir (`buttons[1]`) fait exactement la même chose, avec un message d'alerte différent. Ce choix (garder un comportement identique plutôt que de les différencier) a été fait volontairement pour rester simple.

**Point important** : `if (!poisson1Mort) pvPoisson1 = 100;` ne remet les PV à 100 **que si le poisson est vivant**. Un poisson mort n'est pas affecté par Soigner ou Nourrir — sa mort ne peut être annulée que par Nettoyer. Sans cette garde, cliquer sur Soigner sur un poisson mort lui redonnerait des PV sans retirer son état "mort" (`poisson1Mort` resterait `true`, la classe `.mort` resterait appliquée), ce qui créerait un état incohérent : 100 PV affichés mais poisson toujours figé et retourné.

## Nettoyer : ressuscite les poissons morts

```js
buttons[2].addEventListener('click', function () {
    if (poisson1Mort) ressusciter(1);
    if (poisson2Mort) ressusciter(2);
    alert("Vous avez nettoyé l'aquarium");
});
```

Contrairement à Soigner/Nourrir, Nettoyer **ne touche pas** un poisson vivant (`if (poisson1Mort)` — la condition est inversée). Il appelle `ressusciter(numeroPoisson)` uniquement pour chaque poisson effectivement mort. Voir [08 - JavaScript : état mort par poisson](08-javascript-etat-mort.md) pour le détail de `ressusciter`.

L'alerte de confirmation s'affiche dans tous les cas, même si aucun poisson n'était mort — ce comportement n'a pas été jugé nécessaire de le rendre conditionnel.

## Résumé du rôle de chaque bouton

| Bouton | Effet sur un poisson vivant | Effet sur un poisson mort |
|---|---|---|
| Soigner | PV remis à 100 | Aucun effet |
| Nourrir | PV remis à 100 | Aucun effet |
| Nettoyer | Aucun effet | Ressuscité (100 PV, état mort retiré) |

<div align="center">

[![Précédent](https://img.shields.io/badge/Précédent-374151?style=for-the-badge&logo=bookstack&logoColor=white)](08-javascript-etat-mort.md)
[![Suivant](https://img.shields.io/badge/Suivant-2563EB?style=for-the-badge&logo=bookstack&logoColor=white)](10-responsive-mobile.md)

</div>
