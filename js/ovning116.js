function calculatePriceWithPay() {
    let kilos = document.getElementById("inputWeight2").value;
    let pricePerKg = document.getElementById("inputPrice2").value;
    let totalPrice = kilos * pricePerKg;
    let paid = document.getElementById("inputPaid").value;
    let change = paid - totalPrice;

    document.getElementById("output3").innerHTML = "The price for " + kilos + "kg is " + totalPrice + "kr.";
    document.getElementById("changeOutput").innerHTML = "The customer paid " + paid + "kr and will receive " + change + "kr in change.";
}