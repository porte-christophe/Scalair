// ===============================
// Récupération des éléments HTML
// ===============================
const aquarium = document.getElementById("aquarium"); // conteneur de l'aquarium
const poisson1 = document.getElementById("poisson1"); // premier poisson
const poisson2 = document.getElementById("poisson2"); // deuxième poisson

// ===============================
// Collision entre les deux poissons
// ===============================
function collisionPoissons() {
    const p1 = poisson1.getBoundingClientRect(); // boîte englobante du poisson1
    const p2 = poisson2.getBoundingClientRect(); // boîte englobante du poisson2

    // vrai si les projections horizontales se chevauchent (collision)
    return (
        p1.left < p2.right && // gauche de p1 avant la droite de p2
        p1.right > p2.left   // droite de p1 après la gauche de p2
    );
}

// ===============================
// Collision avec les bords de l'aquarium
// ===============================
function collisionAquarium(poisson) {
    const p = poisson.getBoundingClientRect(); // boîte du poisson
    const a = aquarium.getBoundingClientRect(); // boîte de l'aquarium

    // vrai si le poisson touche ou dépasse les bords gauche ou droite
    return (
        p.left <= a.left || // touche le bord gauche
        p.right >= a.right  // touche le bord droit
    );
}

// ===============================
// Vérification des collisions
// ===============================
if (collisionPoissons()) {
    console.log("Collision entre les poissons"); // log si collision entre poissons
}

if (collisionAquarium(poisson1)) {
    console.log("Le poisson 1 touche le bord de l'aquarium"); // log si p1 touche le bord
}

if (collisionAquarium(poisson2)) {
    console.log("Le poisson 2 touche le bord de l'aquarium"); // log si p2 touche le bord
}