/* function showDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString('fi');
  const time = now.toLocaleTimeString('fi');
  const dateTime = `Tänään on: ${date}. aika on: ${time}`;
  document.getElementById('date-time').textContent = dateTime;
}

function checkGuess() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber)
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

function splitURL(url) {
  return url.split(/[:/]+/);
}

function swapAdjacentNumbers(num) {
  const numArray = String(num).split('');
  for (let i = 0; i < numArray.length - 1; i += 2) {
    const temp = numArray[i];
    numArray[i] = numArray[i + 1];
    numArray[i + 1] = temp;
  }
  return parseInt(numArray.join(''));
}

function findRoundedNumberIndex(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (Number.isInteger(arr[i]) && arr[i] % 10 === 0) {
      return i;
    }
  }
  return 0;
}

window.onload = function() {
  // Tämä käynnistää näyttää päivämäärä ja aika
  showDateTime();

  document.getElementById('guessButton').addEventListener('click', checkGuess);
  document.getElementById('calcButton').addEventListener('click', calculate);
  document.getElementById('tempButton').addEventListener('click', convertTemperature);
  document.getElementById('sameDigitsButton').addEventListener('click', checkSameDigits);

  document.getElementById('splitURLButton').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;
    const resultDisplay = document.getElementById('splitURLResult');
    const urlParts = splitURL(url);
    resultDisplay.textContent = `URL-osat: ${urlParts.join(', ')}`;
  });

  document.getElementById('swapNumbersButton').addEventListener('click', function() {
    const num = parseInt(document.getElementById('numberInput').value);
    const resultDisplay = document.getElementById('swapNumbersResult');
    const swappedNumber = swapAdjacentNumbers(num);
    resultDisplay.textContent = `Vaihdettu numero: ${swappedNumber}`;
  });

  document.getElementById('findRoundedNumberIndexButton').addEventListener('click', function() {
    const numbers = document.getElementById('numberArrayInput').value.split(',').map(Number);
    const resultDisplay = document.getElementById('findRoundedNumberIndexResult');
    const index = findRoundedNumberIndex(numbers);
    resultDisplay.textContent = `Oikeanpuolimmaisen pyöristetyn luvun indeksi: ${index}`;
  });
}
 */