var count = 0;
while (count != 1) {
  var email = prompt("Ingrese un Email");
  if (
    email.match(
      "^[_a-z0-9-]+(.[_a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9]+)(.[a-z]{2,4})$"
    )
  ) {
    count++;
  } else {
    alert("Porfavor introduzca un email Valido");
  }
}
document.write("El email introducido es valido Gracias!!!");
