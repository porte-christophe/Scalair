// ===============================
// Récupération des éléments HTML
// ===============================
const aquarium = document.getElementById("aquarium"); 
const poisson1 = document.getElementById("poisson1"); 
const poisson2 = document.getElementById("poisson2"); 

// ===============================
// Gestion des Points de Vie (PV)
// ===============================
let pvPoisson1 = 100;
let pvPoisson2 = 100;

// Fonction pour afficher les points de vie à l'écran
function afficherPointsDeVie() {
    poisson1.textContent = `Poisson 1 (${pvPoisson1} PV)`;
    poisson2.textContent = `Poisson 2 (${pvPoisson2} PV)`;
}

// On appelle la fonction immédiatement pour afficher les PV au chargement
afficherPointsDeVie();

// ===============================
// Collision entre les deux poissons
// ===============================
function collisionPoissons() {
    const p1 = poisson1.getBoundingClientRect(); 
    const p2 = poisson2.getBoundingClientRect(); 

    return (
        p1.left < p2.right && 
        p1.right > p2.left   
    );
}

// ===============================
// Collision avec les bords de l'aquarium
// ===============================
function collisionAquarium(poisson) {
    const p = poisson.getBoundingClientRect(); 
    const a = aquarium.getBoundingClientRect(); 

    return (
        p.left <= a.left || 
        p.right >= a.right  
    );
}

// ===============================
// Exemple d'application des dégâts lors d'une vérification
// ===============================
if (collisionPoissons()) {
    console.log("Collision entre les poissons");
    // Exemple : perdre 10 PV en cas de collision
    pvPoisson1 -= 10;
    pvPoisson2 -= 10;
    
    // On met à jour l'affichage après le changement de PV
    afficherPointsDeVie();
}