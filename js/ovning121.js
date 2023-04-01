function celsius() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = 1.8 * celsius + 32;

    document.getElementById("output7").innerHTML = celsius + "c is " + fahrenheit + "F";
}