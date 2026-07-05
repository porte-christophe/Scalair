// ===============================
// Récupération des éléments HTML
// ===============================
const aquarium = document.getElementById("aquarium");
const poisson1 = document.getElementById("poisson1");
const poisson2 = document.getElementById("poisson2");
const hudPV = document.getElementById("hud-pv");
const bulle1 = document.getElementById("bulle1");
const bulle2 = document.getElementById("bulle2");


// =============================================
// initialisation des mouvement et des boutons
// =============================================
let initPosScalair1 = 0;
let initPosScalair2 = 90;

initialisation();


function initialisation(){
	setInterval(deplacerPoissons, 100);
	listenClick();
	setInterval(verifierCollisions, 100);
	setInterval(afficherPointsDeVie,50);
};
function deplacerPoissons() {
	moveDroite();
	moveGauche();
};
function moveDroite() {
	if (poisson1Mort) return;
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
	if (poisson2Mort) return;
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
        	if (!poisson1Mort) pvPoisson1 = 100;
			if (!poisson2Mort) pvPoisson2 = 100;
            
            let p = document.querySelector('p');
            p.classList.remove("hidden");
            p.textContent = "Vous soignez tout l'aquarium!"
        });
    }

    if (buttons[1]) {
        buttons[1].addEventListener('click', function () {
        	if (!poisson1Mort) pvPoisson1 = 100;
			if (!poisson2Mort) pvPoisson2 = 100;
            alert("Vous avez nourrit tous les poissons");
            let p = document.querySelector('p');
            p.classList.remove("hidden");
            p.textContent = "J'ai appuyé sur entrée!"
        });

    }
	if (buttons[2]) {
        buttons[2].addEventListener('click', function () {
            if (poisson1Mort) ressusciter(1);
            if (poisson2Mort) ressusciter(2);
            alert("Vous avez nettoyé l'aquarium");
            let p = document.querySelector('p');
            p.classList.remove("hidden");
            p.textContent = "J'ai appuyé sur entrée!"
        });
    }
}
// ===============================
// Gestion des Points de Vie (PV)
// ===============================
let pvPoisson1 = 100;
let pvPoisson2 = 100;
let poisson1Mort = false;
let poisson2Mort = false;

hudPV.innerHTML = `
  <p id="pv-poisson1">Poisson 1 : ${pvPoisson1} PV</p>
  <p class="hidden">
  </p>
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
    verifierMort(1);
    setTimeout(() => verifierMort(2), 1000);
}

function verifierMort(numeroPoisson) {
    if (numeroPoisson === 1 && pvPoisson1 <= 0 && !poisson1Mort) {
        poisson1Mort = true;
        poisson1.classList.add("mort");
    } else if (numeroPoisson === 2 && pvPoisson2 <= 0 && !poisson2Mort) {
        poisson2Mort = true;
        poisson2.classList.add("mort");
    }
}

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

let collisionEnCours = false;
let bulleTimeoutId = null;

function afficherBulles() {
    bulle1.classList.add("visible");
    bulle2.classList.add("visible");
    if (bulleTimeoutId) {
        clearTimeout(bulleTimeoutId);
    }
    bulleTimeoutId = setTimeout(() => {
        bulle1.classList.remove("visible");
        bulle2.classList.remove("visible");
    }, 1500);
}

function declencherSecousse(poisson) {
    poisson.classList.remove("secousse");
    void poisson.offsetWidth;
    poisson.classList.add("secousse");
    poisson.addEventListener("animationend", () => {
        poisson.classList.remove("secousse");
    }, { once: true });
}

function verifierCollisions() {
    const collisionActuelle = collisionPoissons();
    if (collisionActuelle && !collisionEnCours && !poisson1Mort && !poisson2Mort) {
        retirerPointsDeVie(10);
        afficherBulles();
        declencherSecousse(poisson1);
        declencherSecousse(poisson2);
    }
    collisionEnCours = collisionActuelle;
}

