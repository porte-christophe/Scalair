const poisson1 = document.getElementById("poisson1");
const poisson2 = document.getElementById("poisson2");
let valCadreDroite = 0;
let valCadreGauche = 90;
poisson1.style.left = "0%";

initialisation();


function initialisation(){
	setInterval(moveDroite, 200);
	setInterval(moveGauche, 100);
	
};
function moveDroite() {
	if (valCadreDroite<90) {
		valCadreDroite += 1;
		let newLeft = valCadreDroite +"%";
		poisson1.style.left = newLeft;
	}else if (valCadreDroite == 90) {
		poisson1.style.left = 0+"%";
		valCadreDroite = 0;
	}
};
function moveGauche() {
	if (valCadreGauche>0) {
		valCadreGauche -= 1;
		let newLeft = valCadreGauche +"%";
		poisson2.style.left = newLeft;
	}else if (valCadreGauche == 0) {
		poisson2.style.left = 90+"%";
		valCadreGauche = 90;
	}
};