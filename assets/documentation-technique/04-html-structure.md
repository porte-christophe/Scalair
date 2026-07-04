# 04 - Structure HTML

## Vue d'ensemble de `index.html`

```html
<header>
  <h1>Jeu de l'aquarium Scalair</h1>
</header>

<section id="hud">
  <div id="hud-pv"></div>
</section>

<section id="jeu">
  <div id="aquarium">
    <div id="poisson1">
      <div class="bulle-dialogue" id="bulle1">Fais attention !!!</div>
      <img src="assets/img/icons/crane-mort.svg" alt="" class="icone-mort" id="crane1">
    </div>
    <div id="poisson2">
      <div class="bulle-dialogue" id="bulle2">Regarde où tu vas ?</div>
      <img src="assets/img/icons/crane-mort.svg" alt="" class="icone-mort" id="crane2">
    </div>
  </div>
</section>

<footer>
  <section id="actions">
    <button><img src="assets/img/icons/soigner.svg" alt="" class="icone-bouton"> Soigner</button>
    <button><img src="assets/img/icons/nourrir.svg" alt="" class="icone-bouton"> Nourrir</button>
    <button><img src="assets/img/icons/nettoyer.svg" alt="" class="icone-bouton"> Nettoyer</button>
  </section>
</footer>
```

## Détail des blocs

### `#hud-pv`

Vide dans le HTML de départ : `script.js` génère son contenu (`<p id="pv-poisson1">` et `<p id="pv-poisson2">`) via `innerHTML` au chargement de la page. Voir [06 - JavaScript : vue d'ensemble](06-javascript-vue-ensemble.md).

### `#aquarium`, `#poisson1`, `#poisson2`

- `#aquarium` est le conteneur qui délimite visuellement la zone de nage (bordures, fond bleu, `overflow: hidden` pour qu'aucun poisson ne déborde visuellement).
- `#poisson1` et `#poisson2` sont des `<div>` positionnés en `position: relative` (voir [05 - Architecture CSS](05-css-architecture.md)) et déplacés par JavaScript en modifiant leur propriété `style.left`.
- Chaque poisson contient deux éléments enfants superposés en `position: absolute` :
  - `.bulle-dialogue` : bulle de texte affichée lors d'une collision entre les deux poissons.
  - `.icone-mort` (`#crane1` / `#crane2`) : icône crâne affichée uniquement quand le poisson est mort.

### `#actions`

Les 3 boutons d'action. Chacun contient une icône SVG (`<img class="icone-bouton">`) suivie du texte du bouton. Les gestionnaires de clic sont attachés dynamiquement par `script.js` via `document.querySelectorAll('button')` — voir [09 - JavaScript : logique des boutons](09-javascript-boutons.md).

<div align="center">

[![Précédent](https://img.shields.io/badge/Précédent-374151?style=for-the-badge&logo=bookstack&logoColor=white)](03-structure-fichiers.md)
[![Suivant](https://img.shields.io/badge/Suivant-2563EB?style=for-the-badge&logo=bookstack&logoColor=white)](05-css-architecture.md)

</div>
