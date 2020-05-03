var count = 0;

var Nombres = [];
do {
  var Nombre;

  Nombre = prompt("Ingrese un nombre");

  Nombres[count] = Nombre;
  count++;
} while (Nombre.toLowerCase() != "marcas");



document.write("<br>");
for (let i = 0; i < Nombres.length; i++) {
  document.write(Nombres[i] + " ");
}
