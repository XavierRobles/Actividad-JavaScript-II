var num;
var piedraIA, papelIA, tijeraIA;

function jugar() {
    num = prompt("¿Que eliges? para Piedra pulsa 0, Para Papel pulsa 1 o Para Tijera pulsa 2");
    var IA = Math.round(Math.random() * (3 - 1));
    if (IA === 0) {
        document.getElementById("game2").innerHTML =
            'IA Saca Piedra';
        piedraIA = 0;

    } else if (IA === 1) {
        document.getElementById("game2").innerHTML =
            'IA Saca Papel';

        papelIA = 1;
    } else {
        document.getElementById("game2").innerHTML =
            'IA Saca Tijeras';
        tijeraIA = 2;
    }


    if (num === IA) {
        document.getElementById("game").innerHTML =
            "Empate!!! " + "<br>";
    } else if (num == 0 && IA == 1) {
        document.getElementById("game").innerHTML =
            "Lo sentimos mucho pero Papel gana a Piedra " + "<br>";
    } else if (num == 0 && IA == 2) {
        document.getElementById("game").innerHTML =
            "Enhorabuena!!!!" + "<br>" + "HAS GANADO!!!!!" + '<br>' + 'La Piedra Machaca a las tijeras';
    } else if (num == 1 && IA == 0) {
        document.getElementById("game").innerHTML =
            "Enhorabuena!!!!" + "<br>" + "HAS GANADO!!!!!" + '<br>' + 'Papel Envuelve a Piedra';

    } else if (num == 1 && IA == 2) {
        document.getElementById("game").innerHTML =
            "Lo sentimos mucho pero Papel pierde contra Tijeras " + "<br>";
    } else if (num == 2 && IA == 0) {
        document.getElementById("game").innerHTML =
            "Lo sentimos mucho pero Tijera pierde contra Piedra " + "<br>";
    } else if (num == 2 && IA == 1) {
        document.getElementById("game").innerHTML =
            "Enhorabuena!!!!" + "<br>" + "HAS GANADO!!!!!" + '<br>' + 'Tijera Destroza a Papel';
    }
}