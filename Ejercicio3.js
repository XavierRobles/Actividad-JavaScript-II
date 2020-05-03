var Palabras = [];
var palabra = prompt("Introduza una palabra");
var count = 0;

for (let i = 0; i < palabra.length; i++) {
  Palabras[i] = palabra.charAt(i);
}

for (let i = 0; i < Palabras.length / 2; i++) {
  if (
    palabra.charAt(i).toLowerCase == palabra.charAt(palabra.length - 1 - i).toLowerCase
  ) {
    count++;
  }
}

if (count == (palabra.length / 2).toPrecision(1)) {
  document.write("La palabra es palíndroma ");
} else document.write("La palabra no es palíndroma");
