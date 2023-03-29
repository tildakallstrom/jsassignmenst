const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const sum = num1 + num2;
  document.getElementById("sum").textContent = "The sum is " + sum;
});