// Array for storing words for single-digit numbers
const singleDigits = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen"
  ];

  // Array for storing words for tens
  const tens = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
  ];

  // Function to convert a number to words
  function convertNumberToWords(number) {
    if (number <= 0 || number >= 100000000000) {
      return "Number out of range";
    } else {
      return convertNumber(number);
    }
  }
  // Recursive function to convert a number to words
  function convertNumber(number) {
    if (number < 20) {
      return singleDigits[number]; // Lookup word directly for numbers less than 20
    } else if (number < 100) {
      return tens[Math.floor(number / 10)] + " " + convertNumber(number % 10);
    } else if (number < 1000) {
      return (
        singleDigits[Math.floor(number / 100)] +
        " hundred " +
        convertNumber(number % 100) // Combine words for hundreds and the remaining number
      );
    } else if (number < 1000000) {
      return (
        convertNumber(Math.floor(number / 1000)) +
        " thousand " +
        convertNumber(number % 1000) // Combine words for thousands and the remaining number
      );
    } else if (number < 1000000000) {
      return (
        convertNumber(Math.floor(number / 1000000)) +
        " million " +
        convertNumber(number % 1000000) // Combine words for millions and the remaining number
      );
    } else {
      return (
        convertNumber(Math.floor(number / 1000000000)) +
        " billion " +
        convertNumber(number % 1000000000) // Combine words for billions and the remaining number
      );
    }
  }

  // Get form and table body elements from the DOM
  const form = document.getElementById('myForm');
const tableBody = document.querySelector('#myTable tbody');

let position = 1;
// Event listener for form submission
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

 // Set the text content of cells
  positionCell.textContent = position;
  numberCell.textContent = formattedNumber;
  wordsCell.textContent = words;

   // Append cells to the row
  row.appendChild(positionCell);
  row.appendChild(numberCell);
  row.appendChild(wordsCell);

  // Append the row to the table body
  tableBody.appendChild(row);

  numberInput.value = ''; // Clear the input field
  position++; // Increment the position counter
});

  
  