

function Jugar() {
    
}
var piedraIA,papelIA,tijeraIA;
var IA = Math.round(Math.random()*(3-1));
if (IA ===0) {
    document.write('IA Saca Piedra')
    piedraIA =0;
}else if (IA ===1) {
    document.write('IA Saca Papel')
    papelIA =1;
}else{
    document.write('IA Saca Tijeras')
    tijeraIA =2;
}
