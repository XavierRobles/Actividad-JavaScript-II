window.onload = function ()

{
    var Foto = document.getElementById("Imagen");

    Foto.onmouseover = function (e) {
        Foto.src = "img/vii.jpg";
    };
    Foto.onmouseout = function (e) {
        Foto.src = "img/final.jpg";

    };

}