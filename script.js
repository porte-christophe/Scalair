const actions = document.querySelectorAll('#actions');

init();


function init() {
    
        
    // setBackgroundColor();
    // listenKeydown();
    // removeEntry();
     listenClick();
}

function listenClick() {
    const buttons = document.querySelectorAll('button');
    console.log("aze", buttons);
    if (buttons[0]) {
        buttons[0].addEventListener('click', function () {
            alert("Vous avez soigner tout l'aquarium");
        });
    }

    if (buttons[1]) {
        buttons[1].addEventListener('click', function () {
            alert("Vous avez nourrit tous les poissons");
        });

    }
if (buttons[2]) {
        buttons[2].addEventListener('click', function () {
            alert("Vous avez nettoyé l'aquarium");
        });
    }
} 