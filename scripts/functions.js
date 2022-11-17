greetUser("Zartab");

function greetUser(name) {
  // alert("Hello" + name);
}

// Function Hoisting

// console.log(z);

let z = 10;

console.log("-------------------------------");

function square(number) {
  let square = number * number;
  return square;
}

const squaredNumber = square(5);

console.log("Square of 4 is", square(4));

let number = parseInt(prompt("Enter a number:"));
console.log(typeof number, "--", number);

console.log("----------- Function Expressions----------");

const cube = function (number) {
  return number * number * number;
};

const squareVariable = square;

console.log(cube(3));

function Circle() {
  console.log("Cirlce");
}

const c = new Circle();
console.log(c, typeof c);
