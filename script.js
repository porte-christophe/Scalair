// ===============================
// Récupération des éléments HTML
// ===============================
const aquarium = document.getElementById("aquarium");
const poisson1 = document.getElementById("poisson1");
const poisson2 = document.getElementById("poisson2");
const hudPV = document.getElementById("hud-pv");
const actions = document.querySelectorAll('#actions')


// =============================================
// initialisation des mouvement et des boutons
// =============================================
let initPosScalair1 = 0;
let initPosScalair2 = 90;

initialisation();


function initialisation(){
	setInterval(moveDroite, 200);
	setInterval(moveGauche, 100);
	listenClick();
	setInterval(verifierCollisions, 100);
	setInterval(afficherPointsDeVie,50);
};
function moveDroite() {
	if (initPosScalair1<90) {
		initPosScalair1 += 1;
		let newLeft = initPosScalair1 +"%";
		poisson1.style.left = newLeft;
	}else if (initPosScalair1 == 90) {
		poisson1.style.left = 0+"%";
		initPosScalair1 = 0;
	}
};
function moveGauche() {
	if (initPosScalair2>0) {
		initPosScalair2 -= 1;
		let newLeft = initPosScalair2 +"%";
		poisson2.style.left = newLeft;
	}else if (initPosScalair2 == 0) {
		poisson2.style.left = 90+"%";
		initPosScalair2 = 90;
	}
};
function listenClick() {
    const buttons = document.querySelectorAll('button');
    if (buttons[0]) {
        buttons[0].addEventListener('click', function () {
        	pvPoisson1 = 100;
			pvPoisson2 = 100;
            alert("Vous avez soigner tout l'aquarium");
        });
    }

    if (buttons[1]) {
        buttons[1].addEventListener('click', function () {
        	pvPoisson1 = 100;
			pvPoisson2 = 100;
            alert("Vous avez nourrit tous les poissons");
        });

    }
	if (buttons[2]) {
        buttons[2].addEventListener('click', function () {
            alert("Vous avez nettoyé l'aquarium");
        });
    }
}
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
    verifierReinitialisation();
    //afficherPointsDeVie();
}

function retirerPointsDeVieUnique(numeroPoisson, montant) {
    if (numeroPoisson === 1) {
        pvPoisson1 = Math.max(0, pvPoisson1 - montant);
    } else {
        pvPoisson2 = Math.max(0, pvPoisson2 - montant);
    }
    verifierReinitialisation();
}

function verifierReinitialisation() {
    if (pvPoisson1 <= 0 || pvPoisson2 <= 0) {
        pvPoisson1 = 100;
        pvPoisson2 = 100;
    }
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
    // Marge nécessaire car la bordure de 10px de l'aquarium empêche
    // le poisson de toucher exactement a.left/a.right.
    const marge = 15;

    return (
        p.left <= a.left + marge ||
        p.right >= a.right - marge
    );
}

let collisionEnCours = false;
let collisionMur1EnCours = false;
let collisionMur2EnCours = false;

function verifierCollisions() {
    const collisionActuelle = collisionPoissons();
    if (collisionActuelle && !collisionEnCours) {
        //console.log("Collision entre les poissons");
        retirerPointsDeVie(10);
    }
    collisionEnCours = collisionActuelle;

    const mur1Actuelle = collisionAquarium(poisson1);
    if (mur1Actuelle && !collisionMur1EnCours) {
        retirerPointsDeVieUnique(1, 5);
    }
    collisionMur1EnCours = mur1Actuelle;

    const mur2Actuelle = collisionAquarium(poisson2);
    if (mur2Actuelle && !collisionMur2EnCours) {
        retirerPointsDeVieUnique(2, 5);
    }
    collisionMur2EnCours = mur2Actuelle;
}

