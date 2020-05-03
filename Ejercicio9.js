
count = 1;
function adelante() {
    count++;
    if (count > 5) {
        count = 1;
    }
    var next = document.getElementById("Final");
    next.src = "img/FF" + cont + ".jpg"

}
function Atras() {
    count--;
    if (count < 1) {
        count = 5;
    }
    var next = document.getElementById("Final");
    next.src = "img/FF" + count + ".jpg"


}