
var day = prompt("Introduce un dia");
var mes = prompt("Introduce un mes");
var year = prompt("Introduce un año");

var Fechas = new Date(year, mes, day);
var Actual = Fechas.getUTCDay();

var Seven = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

document.write(Seven[Actual]);
