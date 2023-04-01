function calculateThisPrice() {
    let price = parseFloat(document.getElementById("priceInput2").value);
    let numItems = document.getElementById("numItemsInput2").value;
    let totalPrice = price * numItems;
    let discount = 0;

    if(numItems > 20 && totalPrice > 1000) {
        discount = 20;
    } else if (numItems > 20 || totalPrice > 1000) {
        discount = 10;
    } else {
        discount = 0;
    }
     
    let discountAmount = totalPrice * (discount / 100);
    let totalPriceWDiscount = totalPrice - discountAmount;
  let outputMessage = `Total price with ${discount}% discount: ${totalPriceWDiscount.toFixed(2)}`;
  document.getElementById("output8").innerHTML = outputMessage;
}