function calculateSum() {
  var firstNumber = parseFloat(document.getElementById("firstnumber").value);
  var secondNumber = parseFloat(document.getElementById("secondnumber").value);

  var sum = firstNumber + secondNumber;
  document.getElementById("result").innerHTML = "The sum is: " + sum;
}
