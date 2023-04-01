function findMax() {
    const num1 = parseInt(document.getElementById("num1-input").value);
    const num2 = parseInt(document.getElementById("num2-input").value);
    const num3 = parseInt(document.getElementById("num3-input").value);
    const max = getMax(num1, num2, num3);
    document.getElementById("result1").innerHTML = `The maximum of ${num1}, ${num2}, and ${num3} is ${max}`;
  }

  function getMax(a, b, c) {
    let max = a;
    if (b > max) {
      max = b;
    }
    if (c > max) {
      max = c;
    }
    return max;
  }