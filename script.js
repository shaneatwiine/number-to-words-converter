// Array for storing words for single-digit numbers
const uniqueNumbers = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen"
  ];

  // Array for storing words for tenMultiples
  const tenMultiples = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
  ];

  // Function to convert a number to words
  function numberValidator(number) {
    if (number <= 0 || number >= 100000000000) {
      return "Number out of range";
    } else {
      return numberConverter(number);
    }
  }
  // Recursive function to convert a number to words
  function numberConverter(number) {
    if (number < 20) {
      return uniqueNumbers[number]; // Lookup word directly for numbers less than 20
    } else if (number < 100) {
      return tenMultiples[Math.floor(number / 10)] + " " + numberConverter(number % 10);
    } else if (number < 1000) {
      return (
        uniqueNumbers[Math.floor(number / 100)] +
        //  uniqueNumbers[8] 
        " hundred " +
        numberConverter(number % 100) // Combine words for hundreds and the remaining number
      );
    } else if (number < 1000000) {
      return (
        numberConverter(Math.floor(number / 1000)) +
        " thousand " +
        numberConverter(number % 1000) // Combine words for thousands and the remaining number
      );
    } else if (number < 1000000000) {
      return (
        numberConverter(Math.floor(number / 1000000)) +
        " million " +
        numberConverter(number % 1000000) // Combine words for millions and the remaining number
      );
    } else {
      return (
        numberConverter(Math.floor(number / 1000000000)) +
        " billion " +
        numberConverter(number % 1000000000) // Combine words for billions and the remaining number
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
  const words = numberValidator(number);
  const row = document.createElement('tr');
  const positionData = document.createElement('td');
  const numberData = document.createElement('td');
  const wordsData = document.createElement('td');
  
  const formattedNumber = number.toLocaleString(); // Format the number with commas

 // Set the text content of cells
  positionData.textContent = position;
  numberData.textContent = formattedNumber;
  wordsData.textContent = words;

   // Append cells to the row
  row.appendChild(positionData);
  row.appendChild(numberData);
  row.appendChild(wordsData);

  // Append the row to the table body
  tableBody.appendChild(row);

  numberInput.value = ''; // Clear the input field
  position++; // Increment the position counter
});

  
  