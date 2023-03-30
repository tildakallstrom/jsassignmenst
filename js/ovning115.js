function calculatePriceWithKilos() {
    let kilos = document.getElementById("inputWeight").value;
    let pricePerKg = document.getElementById("inputPrice").value;
    let totalPrice = kilos * pricePerKg;

    document.getElementById("output2").innerHTML = "The price for " + kilos + "kg is " + totalPrice + "kr";
}