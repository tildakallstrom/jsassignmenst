function calculatePrice() {
    let kilos = document.getElementById("input").value;
    let price = kilos * 2;
    document.getElementById("output").innerHTML = "The price for " + kilos + "kg is " + price + "kr";
}