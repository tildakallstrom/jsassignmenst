function calculatePriceTax() {
    let price = parseFloat(document.getElementById("priceInput").value);
    let numItems = document.getElementById("numItemsInput").value;
    let taxRate = document.getElementById("taxRateInput").value / 100;
    let tax = taxRate * price * numItems;
    let totalPRice = price * numItems + tax;

    document.getElementById("output6").innerHTML = "Price per item: " + price.toFixed(2) + "kr<br>" +
                                                    "Number of items: " + numItems + "<br>" +
                                                    "Tax rate: " + (taxRate * 100) + "%<br>" +
                                                    "Total price with tax: " + totalPRice.toFixed(2) + "kr";
}