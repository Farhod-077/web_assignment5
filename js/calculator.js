// Task 7
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const calcResult = document.getElementById("calcResult");
const buttons = document.querySelectorAll("button[data-op]");

function calculate(op) {
  if (num1.value === "" || num2.value === "") {
    calcResult.textContent = "Result: enter both numbers";
    return;
  }

  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  let result;

  if (op === "+") {
    result = a + b;
  } else if (op === "-") {
    result = a - b;
  } else if (op === "*") {
    result = a * b;
  } else if (op === "/") {
    if (b === 0) {
      calcResult.textContent = "Result: cannot divide by zero";
      return;
    }
    result = a / b;
  }

  calcResult.textContent = "Result: " + result;
}

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    calculate(btn.dataset.op);
  });
});