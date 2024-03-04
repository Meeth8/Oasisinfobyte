document.addEventListener("DOMContentLoaded", function () {
  // Get the elements
  const expressionElement = document.querySelector(".expression");
  const resultElement = document.querySelector(".result");
  const numberButtons = document.querySelectorAll(".number");
  const operatorButtons = document.querySelectorAll(".operator");
  const clearButton = document.querySelector(".clear");
  const equalButton = document.querySelector(".equal");

  let expression = "";
  let result = "";

  // Add click event listeners to number buttons
  numberButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const value = button.getAttribute("value");
      expression += value;
      expressionElement.textContent = expression;
    });
  });

  // Add click event listeners to operator buttons
  operatorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const value = button.getAttribute("value");
      expression += value;
      expressionElement.textContent = expression;
    });
  });

  // Add click event listener to clear button
  clearButton.addEventListener("click", function () {
    expression = "";
    result = "";
    expressionElement.textContent = "";
    resultElement.textContent = "";
  });

  // Add click event listener to equal button
  equalButton.addEventListener("click", function () {
    try {
      result = eval(expression);
      resultElement.textContent = result;
    } catch (error) {
      resultElement.textContent = "Error";
    }
  });
});
