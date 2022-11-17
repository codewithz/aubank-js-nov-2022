function sum(name, ...arguments) {
  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  console.log("Hey", name);
  console.log("Sum of ", arguments, "is", total);
}

sum("Tom", 1, 2, 3);
sum("Alex", 1, 2, 3, 4);
sum("John", 1, 2, 3, 4, 5);
