var count = 0;

var Nombres = [];
do {
  var Nombre;

  Nombre = prompt("Ingrese un nombre");

  Nombres[count] = Nombre;
  count++;
  Nombre.toUpperCase
  document.write("/"+Nombre+"/")
  if (Nombre=='marcas') {
      
      document.write('aaaaaaaaaaaaaaaaaaaaaaaaa')
  }
} while (Nombre !="marcas");

document.write("<br>");

document.write("<br>");
for (let i = 0; i < Nombres.length; i++) {
  document.write(Nombres[i] + " ");
}