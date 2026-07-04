# 10 - Responsive mobile/tablette

## Deux paliers (breakpoints)

`css/scalair.css` définit deux media queries à la fin du fichier, toutes deux en `max-width` (donc elles s'appliquent "en dessous de" la largeur indiquée) :

```css
@media (max-width: 900px) { /* tablette */ }
@media (max-width: 600px) { /* mobile */ }
```

Comme le CSS est lu dans l'ordre, la media query 600px vient **après** celle à 900px : sur un écran de moins de 600px de large, les deux s'appliquent, mais les règles de la seconde (plus spécifique) écrasent celles de la première pour les mêmes propriétés.

## Ce qui change à chaque palier

| Élément | Desktop (par défaut) | Tablette ≤900px | Mobile ≤600px |
|---|---|---|---|
| Taille des poissons | 120×120px | 90×90px | 65×65px |
| Hauteur de l'aquarium (`section#jeu`) | 400px | 350px | 300px |
| Padding des pilules PV | 10px 16px | 10px 18px | 8px 14px |
| Taille de police des boutons | 18px | 16px | 14px |
| Padding des boutons | 12px 24px | 10px 20px | 8px 16px |

## Pourquoi réduire la taille des poissons ?

Les poissons sont positionnés en JavaScript avec `left` exprimé en **pourcentage** de la largeur de l'aquarium (voir [07 - Mouvement et collisions](07-javascript-mouvement-collisions.md)), mais leur `width`/`height` en CSS sont en **pixels fixes**. Sur un écran étroit, un poisson positionné à `left: 90%` avec une largeur fixe de 120px peut déborder hors du cadre de l'aquarium, puisque 90% + 120px dépasse la largeur réelle du conteneur si celui-ci est petit. Réduire la taille du poisson à chaque palier limite ce débordement.

`div#aquarium { overflow: hidden; }` complète cette protection : même si un poisson venait à dépasser légèrement, il serait visuellement coupé au bord de l'aquarium plutôt que de "flotter" par-dessus l'image de fond en dehors du cadre.

## Ce qui ne change pas

- Le nombre de breakpoints (2, pas plus) — suffisant pour ce projet.
- L'agencement général (HUD sur une ligne, poisson1 à gauche / poisson2 à droite) reste identique à toutes les tailles, seules les dimensions sont ajustées.
- `script.js` n'est jamais concerné par le responsive : c'est purement une question de CSS.

<div align="center">

[![Précédent](https://img.shields.io/badge/Précédent-374151?style=for-the-badge&logo=bookstack&logoColor=white)](09-javascript-boutons.md)
[![Suivant](https://img.shields.io/badge/Suivant-2563EB?style=for-the-badge&logo=bookstack&logoColor=white)](11-deploiement.md)

</div>
