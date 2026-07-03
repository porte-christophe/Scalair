// Gestion des collisions entre les poissons//

// Récupérer les éléments poisson du DOM
const poisson1 = document.getElementById("poisson1");
const poisson2 = document.getElementById("poisson2");

// Fonction pour détecter une collision entre deux éléments
function collision(poisson1, poisson2) {

    // Obtenir les dimensions et positions des deux poissons
    const rect1 = poisson1.getBoundingClientRect();
    const rect2 = poisson2.getBoundingClientRect();

    // Retourner true si les poissons se touchent, false sinon
    return !(
        rect1.right < rect2.left ||      // Poisson1 complètement à gauche
        rect1.left > rect2.right ||      // Poisson1 complètement à droite
    );

}