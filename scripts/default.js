let x = null;

if (x) {
  console.log("There");
} else {
  console.log("not there");
}

// ----------------------

function calculateInterest(principal, rate, years) {
  rate = rate || 3.5;
  years = years || 5;
  return ((principal * rate) / 100) * years;
}

console.log(calculateInterest(10000, 3.5, 5));
console.log(calculateInterest(20000, null, 5));
console.log("----------------------------------");
function calculateInterestNew(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(calculateInterestNew(10000, 3.5, 5));
console.log(calculateInterestNew(20000, undefined, 7));
console.log(calculateInterestNew(20000));
