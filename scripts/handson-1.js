function acceptNumber() {
  const number = parseInt(prompt("Enter a Number:"));
  return number;
}

function checkEven(number) {
  return number % 2 == 0;
}

function printSquare(number) {
  const squaredNumber = number * number;
  console.log("Square of ", number, "is", squaredNumber);
}

function printCube(number) {
  const cubedNumber = number * number * number;
  console.log("Cube of ", number, "is", cubedNumber);
}

// ---------------------------------------------

const acceptedNumber = acceptNumber();
const isEven = checkEven(acceptedNumber);
isEven ? printSquare(acceptedNumber) : printCube(acceptedNumber);
