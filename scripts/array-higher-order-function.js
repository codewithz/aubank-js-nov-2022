let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original:", numbers);

let evenNumbers = [];

for (let number of numbers) {
  if (number % 2 == 0) {
    evenNumbers.push(number);
  }
}

console.log("Even Number [M]:", evenNumbers);

// ---------------------------------------------------
console.log("-------- Higher Order Function-------------");

let evenNumbersH = numbers.filter(function (item, index) {
  // console.log("Filtering element", item, "at index[", index, "]");
  return item % 2 == 0;
});

console.log("Using HOF:", evenNumbersH);
// ----------------------------------------------------
function filterOdd(number) {
  return number % 2 == 1;
}

let oddNumbersH = numbers.filter(filterOdd);
console.log(oddNumbersH);

// ---------------
console.log("---------- Square Logic -------");
let squaredArray = [];

for (let number of numbers) {
  const sqaureValue = number * number;
  squaredArray.push(sqaureValue);
}

console.log("Original:", numbers);
console.log("Squared:", squaredArray);

let sqauredArrayH = numbers.map(function (item, index) {
  const squaredValue = item * item;
  return squaredValue;
});

console.log("Using HOF:", sqauredArrayH);

// ----------------------------
let index = 0;
for (let number of numbers) {
  console.log("numbers[", index, "]=", number);
  index++;
}

// numbers[0]=1
// numbers[1]=2
// numbers[2]=3

console.log("--------Using HOF--------");

numbers.forEach(function (item, index) {
  console.log("numbers[", index, "]=", item);
});
