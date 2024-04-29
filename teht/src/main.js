
function showDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString('fi');
  const time = now.toLocaleTimeString('fi');
  const dateTime = `Tänään on: ${date}. aika on: ${time}`;
  document.getElementById('date-time').textContent = dateTime;
}


function checkGuess() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const userGuess = parseInt(document.getElementById('guessInput').value);
  const resultDisplay = document.getElementById('guessResult');

  if (userGuess === randomNumber) {
    resultDisplay.textContent = "oho onnekas!";
  } else {
    resultDisplay.textContent = "väärä.";
  }
}

function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultDisplay = document.getElementById('calcResult');

  const multiply = num1 * num2;
  const divide = num1 / num2;

  resultDisplay.textContent = `Kertolasku: ${multiply}, Jakolasku: ${divide}`;
}


function convertTemperature() {
  const tempInput = parseFloat(document.getElementById('tempInput').value);
  const tempResult = document.getElementById('tempResult');

  const celsiusToFahrenheit = (tempInput * 9/5) + 32;
  const fahrenheitToCelsius = (tempInput - 32) * 5/9;

  tempResult.textContent = `${tempInput}°C on ${celsiusToFahrenheit}°F, ${tempInput}°F on ${fahrenheitToCelsius}°C`;
}


function checkSameDigits() {
  const number = document.getElementById('checkNumber').value;
  const resultDisplay = document.getElementById('sameDigitsResult');

  const digits = number.toString().split('');

  const firstDigit = digits[0];
  const allSame = digits.every(digit => digit === firstDigit);

  if (allSame) {
    resultDisplay.textContent = "numerot ovat samoja.";
  } else {
    resultDisplay.textContent = "Numerot ei oo samoi.";
  }
}


window.onload = function() {
  showDateTime();


  document.getElementById('guessButton').addEventListener('click', checkGuess);
  document.getElementById('calcButton').addEventListener('click', calculate);
  document.getElementById('tempButton').addEventListener('click', convertTemperature);
  document.getElementById('sameDigitsButton').addEventListener('click', checkSameDigits);
}
