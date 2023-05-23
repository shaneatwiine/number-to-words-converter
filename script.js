const singleDigits = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen"
  ];
  
  const tens = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
  ];
  
  function convertNumberToWords(number) {
    if (number === 0) {
      return "zero";
    } else if (number < 0 || number > 100000000000) {
      return "Number out of range";
    } else {
      return convertNumber(number);
    }
  }
  
  function convertNumber(number) {
    if (number < 20) {
      return singleDigits[number];
    } else if (number < 100) {
      return tens[Math.floor(number / 10)] + " " + convertNumber(number % 10);
    } else if (number < 1000) {
      return (
        singleDigits[Math.floor(number / 100)] +
        " hundred " +
        convertNumber(number % 100)
      );
    } else if (number < 1000000) {
      return (
        convertNumber(Math.floor(number / 1000)) +
        " thousand " +
        convertNumber(number % 1000)
      );
    } else if (number < 1000000000) {
      return (
        convertNumber(Math.floor(number / 1000000)) +
        " million " +
        convertNumber(number % 1000000)
      );
    } else {
      return (
        convertNumber(Math.floor(number / 1000000000)) +
        " billion " +
        convertNumber(number % 1000000000)
      );
    }
  }
  const form = document.getElementById('myForm');
const tableBody = document.querySelector('#myTable tbody');

let position = 1;
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const numberInput = document.getElementById('number');
  const number = parseInt(numberInput.value);
  const formattedNumber = number.toLocaleString(); // Format the number with commas
  const words = convertNumberToWords(number);
  const row = document.createElement('tr');
  const positionCell = document.createElement('td');
  const numberCell = document.createElement('td');
  const wordsCell = document.createElement('td');

  positionCell.textContent = position;
  numberCell.textContent = formattedNumber;
  wordsCell.textContent = words;

  row.appendChild(positionCell);
  row.appendChild(numberCell);
  row.appendChild(wordsCell);
  tableBody.appendChild(row);

  numberInput.value = '';
  position++; // Increment the position counter
});

  
  // Example usage:
  // console.log(convertNumberToWords(4459520)); 
  