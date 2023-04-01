const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function() {
  const num1 = parseFloat(document.getElementById("num11").value);
  const num2 = parseFloat(document.getElementById("num22").value);
  const sum = num1 + num2;
  document.getElementById("sum11").textContent = "The sum is " + sum;
});