function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  const pinOutput = document.getElementById("pin-output");
  displayStyle("pin-output");
  pinOutput.value = pin;
}

function displayStyle(displayName) {
  const display = document.getElementById(displayName);
  display.style.textAlign = "center";
  display.style.fontSize = "2rem";
}

function verifyPin() {
  const pin = document.getElementById("pin-output").value;
  const typedPin = document.getElementById("typed-number").value;
  console.log("pin: ", pin, "typed: ", typedPin);
  const match = document.getElementById("match");
  const notMatch = document.getElementById("notMatch");
  if (pin == typedPin) {
    match.style.display = "block";
    notMatch.style.display = "none";
  } else {
    notMatch.style.display = "block";
    match.style.display = "none";
  }
}

document.getElementById("key-pad").addEventListener("click", function (event) {
  displayStyle("typed-number");
  const number = event.target.innerText;
  const displayText = document.getElementById("typed-number");
  let previousNum = displayText.value;
  if (isNaN(number)) {
    if (number == "C") {
      displayText.value = "";
    }
    if (number == "<") {
      displayText.value = previousNum.substring(0, previousNum.length - 1);
    }
  } else {
    const newNum = previousNum + number;
    displayText.value = newNum;
  }
});
