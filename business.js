document.addEventListener("DOMContentLoaded", function () {
  let heading = document.querySelector("h1");
  let plusButtonPressed = false;
  let subtractButtonPressed = false;
  let storedNumber = parseInt(heading.textContent);
  let pressedOperator = false;
  let multiplyButtonPressed = false;

  document.querySelectorAll("button").forEach(function (button) {
    button.onclick = function () {
      // if the button is a number
      if (button.hasAttribute("data-attribute")) {
        if (plusButtonPressed == true && pressedOperator == true) {
          heading.textContent = button.textContent;
          pressedOperator = false;
        } else if (subtractButtonPressed == true && pressedOperator == true) {
          storedNumber = heading.textContent;
          heading.textContent = button.textContent;
          pressedOperator = false;
        } else if(multiplyButtonPressed == true && pressedOperator == true) { 
          storedNumber = heading.textContent;
          heading.textContent = button.textContent;
          pressedOperator = false;
        }
          else if (heading.textContent == "0") {
          // determine if number is 0 or not
          heading.textContent = button.textContent;
        } else {
          heading.textContent = heading.textContent + button.textContent;
        }
      console.log(storedNumber + ' ' + heading.textContent);
      }
    };
  });
  document.getElementById("plus").onclick = function () {
    plusButtonPressed = true;
    pressedOperator = true;
    storedNumber += parseInt(heading.textContent);
    console.log(storedNumber + ' ' + heading.textContent);
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
    location.reload()
  };
  document.getElementById("equals").onclick = function () {
    if (plusButtonPressed) {
      heading.textContent =
        parseInt(storedNumber) + parseInt(heading.textContent);
    } else if (subtractButtonPressed) {
      heading.textContent =
        parseInt(storedNumber) - parseInt(heading.textContent);
    } else if (multiplyButtonPressed){
      heading.textContent = 
        parseInt(storedNumber) * parseInt(heading.textContent)
    }
    console.log(storedNumber + ' ' + heading.textContent);
  };
});

// different calculator
// reminders list, task list