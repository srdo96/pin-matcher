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
  pinOutput.style.textAlign = "center";
  pinOutput.style.fontSize = "2rem";
  pinOutput.value = pin;
}

document.getElementById("key-pad").addEventListener("click", function (event) {
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
