document.addEventListener("DOMContentLoaded", function () {
  let heading = document.querySelector("h1");
  let plusButtonPressed = false;
  let subtractButtonPressed = false;
  let storedNumber = parseInt(heading.textContent);
  let pressedOperator = false;
  let multiplyButtonPressed = false;

  document.querySelectorAll("button").forEach(function (button) {
    button.onclick = function () {
      if (button.hasAttribute("data-attribute")) {
        if (plusButtonPressed && pressedOperator) {
          heading.textContent = button.textContent;
          pressedOperator = false;
        } else if (subtractButtonPressed && pressedOperator) {
          storedNumber = heading.textContent;
          heading.textContent = button.textContent;
          pressedOperator = false;
        } else if (multiplyButtonPressed && pressedOperator) { 
          storedNumber = heading.textContent;
          heading.textContent = button.textContent;
          pressedOperator = false;
        } else if (heading.textContent === "0") {
          heading.textContent = button.textContent;
        } else {
          heading.textContent += button.textContent;
        }
      }
    };
  });

  document.getElementById("plus").onclick = function () {
    plusButtonPressed = true;
    pressedOperator = true;
    storedNumber += parseInt(heading.textContent);
  };

  document.getElementById("subtract").onclick = function () {
    subtractButtonPressed = true;
    pressedOperator = true;
  };

  document.getElementById("multiply").onclick = function () {
    multiplyButtonPressed = true;
    pressedOperator = true;
  };

  document.getElementById('clear').onclick = function () {
    heading.textContent = "0";
    storedNumber = 0;
    plusButtonPressed = false;
    subtractButtonPressed = false;
    multiplyButtonPressed = false;
    pressedOperator = false;
  };

  document.getElementById("equals").onclick = function () {
    if (plusButtonPressed) {
      heading.textContent = parseInt(storedNumber) + parseInt(heading.textContent);
    } else if (subtractButtonPressed) {
      heading.textContent = parseInt(storedNumber) - parseInt(heading.textContent);
    } else if (multiplyButtonPressed){
      heading.textContent = parseInt(storedNumber) * parseInt(heading.textContent);
    }
  };
});
