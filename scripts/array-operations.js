let numbers = [3, 4];
console.log("Original Array:", numbers);

// Adding elements to end of array

numbers.push(5);
console.log("Push:", numbers);

numbers.push(6, 7, 8);
console.log("Push:", numbers);

// Add the elements to beginning of array

numbers.unshift(1, 2);
console.log("Unshift [Adding to begining]", numbers);

// Add element to the middle of an array

numbers.splice(2, 0, "a", "b", "c");
console.log("After Splicing:", numbers);

// Removing elements from beginning

numbers.shift();
console.log("After Shifting", numbers);

// Remove the element from end

numbers.pop();
console.log("After Pop:", numbers);

// Removing element(s) from anywhere

numbers.splice(1, 3);
console.log("After Splicing:", numbers);

numbers.unshift(1);

console.log("-------- After Operations-------------");
console.log("Array:", numbers);

numbers.reverse();
console.log(numbers);

numbers.sort();
console.log(numbers);

// Convert Array to String

let str = numbers.toString();
console.log(str);

console.log("-----Iterate Through an Array---------");

let colors = ["Green", "Red", "Blue", "Yellow"];

const length = colors.length;

for (let index = 0; index < length; index++) {
  const color = colors[index];
  console.log(color);
}

console.log("-------- Iterate using for of-----");
// for(let elements of collection){

// }
for (let color of colors) {
  console.log(color);
}
