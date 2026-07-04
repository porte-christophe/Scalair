# 05 - Architecture CSS

Tout le style vit dans un seul fichier, `css/scalair.css`, organisé de haut en bas dans le même ordre que les blocs HTML qu'il stylise, suivi des animations, puis des media queries responsive en fin de fichier.

## Mise en page générale

- `header`, `section#hud`, `section#jeu`, `footer` utilisent `display: flex; justify-content: center;` pour centrer leur contenu horizontalement.
- `header` a un fond blanc translucide (`rgba(255, 255, 255, 0.8)`) qui s'étend sur toute la largeur, pour que le titre reste lisible quel que soit l'endroit de l'image de fond derrière lui.

## Le HUD des PV

`#hud-pv` est en `display: flex; justify-content: space-between; width: 80%;` : les deux blocs `#pv-poisson1` et `#pv-poisson2` sont ainsi poussés chacun vers un bord opposé (poisson 1 à gauche, poisson 2 à droite), sur la même largeur que l'aquarium en dessous. Chaque bloc est stylé individuellement en pilule blanche translucide (`border-radius: 999px`).

## Les poissons

`#poisson1` et `#poisson2` sont en `position: relative` avec une image de fond (`background-image`) représentant le sprite du poisson, et une taille fixe (`width`/`height`) réduite progressivement par les media queries sur petit écran.

Deux éléments enfants se superposent au poisson grâce à `position: absolute` (le parent étant `position: relative`, l'enfant se positionne par rapport à lui) :

- `.bulle-dialogue` : positionnée juste au-dessus (`bottom: 100%`), centrée horizontalement (`left: 50%; transform: translateX(-50%)`), avec une petite pointe triangulaire créée via `::after` et des bordures.
- `.icone-mort` : centrée sur le poisson (`top: 50%; left: 50%; transform: translate(-50%, -50%)`), cachée par défaut (`display: none`), affichée uniquement quand le poisson porte la classe `.mort` (règle `.mort .icone-mort { display: block; }`).

## Les animations

Deux animations déclenchées par JavaScript via l'ajout/retrait de classes :

- `.secousse` : applique l'animation `@keyframes secousse`, qui fait osciller le poisson horizontalement (`translateX`) pendant 1.5s, pour simuler un choc lors d'une collision.
- `.mort` : applique `transform: rotate(180deg)` pour retourner le poisson (effet "ventre en l'air").

Ces deux classes coexistent sans conflit : un poisson mort ne peut plus entrer en collision (voir [08 - JavaScript : état mort par poisson](08-javascript-etat-mort.md)), donc `.secousse` et `.mort` ne sont jamais actives en même temps sur le même poisson.

## Les boutons

`section#actions button` définit une taille de police et un padding généreux, un `border-radius` léger, un `cursor: pointer`, et une transition douce. `:hover` change légèrement la couleur de fond et soulève le bouton (`translateY(-2px)`). `.icone-bouton` cadre la taille des icônes SVG à 20×20px avec un peu de marge.

## Responsive

Voir [10 - Responsive mobile/tablette](10-responsive-mobile.md) pour le détail des deux media queries en fin de fichier.

<div align="center">

[![Précédent](https://img.shields.io/badge/Précédent-374151?style=for-the-badge&logo=bookstack&logoColor=white)](04-html-structure.md)
[![Suivant](https://img.shields.io/badge/Suivant-2563EB?style=for-the-badge&logo=bookstack&logoColor=white)](06-javascript-vue-ensemble.md)

</div>
