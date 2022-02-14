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
