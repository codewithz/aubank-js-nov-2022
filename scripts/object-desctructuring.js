const country = "India";

const address = {
  city: "Some City",
  street: "Some Street",
  pincode: 12345,
  country: "Some Country",
};

// Traditional Way
// const city = address.city;
// const pincode = address.pincode;
// const country = address.country;

// ES-6 Ways
const { city, pincode } = address;

console.log(city);
console.log(pincode);

const { country: addressCountry } = address;

console.log(country);
console.log(addressCountry);

console.log("----------------------------");

function someFunction(someObj) {
  console.log(someObj.value1);
  console.log(someObj.value2);
  console.log(someObj.value3);
}

function someFunctionObjectD({ value1, value2, value3 }) {
  console.log(value1);
  console.log(value2);
  console.log(value3);
}

let someOtherObject = {
  value1: "1",
  value2: "2",
  value3: "3",
  value4: "4",
  value5: "5",
};

someFunction(someOtherObject);
console.log("----------------------");
someFunctionObjectD(someOtherObject);
