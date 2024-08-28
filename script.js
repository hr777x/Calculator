let currentInput = "0";
let operator = null;
let previousInput = null;

const heading = document.createElement("h2");
heading.innerText = `My Calculator App`;
const text1 = document.createElement("p");
text1.innerText = `Home task for DOM practice using Javascript`;
document.body.append(text1);

function updateDisplay() {
  document.getElementById("display").textContent = currentInput;
}

function clearDisplay() {
  currentInput = "0";
  operator = null;
  previousInput = null;
  updateDisplay();
}

function appendNumber(number) {
  if (currentInput === "0" && number !== ".") {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function setOperator(op) {
  if (previousInput === null) {
    previousInput = currentInput;
  } else if (operator) {
    previousInput = operate(operator, previousInput, currentInput);
  }
  operator = op;
  currentInput = "0";
}

function calculateResult() {
  if (operator && previousInput !== null) {
    currentInput = operate(operator, previousInput, currentInput);
    operator = null;
    previousInput = null;
  }
  updateDisplay();
}

function toggleSign() {
  currentInput = (parseFloat(currentInput) * -1).toString();
  updateDisplay();
}

function calculatePercentage() {
  currentInput = (parseFloat(currentInput) / 100).toString();
  updateDisplay();
}

function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case "add":
      return (a + b).toString();
    case "subtract":
      return (a - b).toString();
    case "multiply":
      return (a * b).toString();
    case "divide":
      return (a / b).toString();
    default:
      return b;
  }
}
