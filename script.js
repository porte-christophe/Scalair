// ===============================
// Récupération des éléments HTML
// ===============================
const aquarium = document.getElementById("aquarium");
const poisson1 = document.getElementById("poisson1");
const poisson2 = document.getElementById("poisson2");
const hudPV = document.getElementById("hud-pv");

// On garde les poissons uniquement comme éléments visuels.
poisson1.textContent = "";
poisson2.textContent = "";

// ===============================
// Gestion des Points de Vie (PV)
// ===============================
let pvPoisson1 = 100;
let pvPoisson2 = 100;

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

function retirerPointsDeVie(montant) {
    pvPoisson1 = Math.max(0, pvPoisson1 - montant);
    pvPoisson2 = Math.max(0, pvPoisson2 - montant);
    afficherPointsDeVie();
}

// ===============================
// Collision entre les deux poissons
// ===============================
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

let collisionEnCours = false;

function verifierCollisions() {
    const collisionActuelle = collisionPoissons();

    if (collisionActuelle && !collisionEnCours) {
        console.log("Collision entre les poissons");
        retirerPointsDeVie(10);
    }

    collisionEnCours = collisionActuelle;
}

afficherPointsDeVie();
verifierCollisions();
setInterval(verifierCollisions, 100);