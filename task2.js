function changeColor() {
  const colors = ['#4facfe', '#43e97b', '#f12711', '#ff6a00', '#c33764', '#00c6ff'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("colorBtn").style.backgroundColor = randomColor;
}

function showGreeting() {
  const hour = new Date().getHours();
  let greeting = "Hello!";

  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 17) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  alert(greeting);
}

function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultDisplay = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultDisplay.innerText = "Please enter valid numbers.";
    return;
  }

  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        resultDisplay.innerText = "Cannot divide by zero.";
        return;
      }
      result = num1 / num2;
      break;
    default:
      resultDisplay.innerText = "Invalid operation.";
      return;
  }

  resultDisplay.innerText = `Result: ${result}`;
}