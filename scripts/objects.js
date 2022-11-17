let person = {
  name: "Zartab M Nakhwa",
  age: 32,
  gender: "Male",
  city: "Mumbai",
  vaccinated: true,
  maritalStatus: "Married",
  education: ["Bacelors in IT", "Masters in IT"],
  car: {
    name: "Toyota Corolla",
    color: "Golden",
  },
  blog: "www.codewithz.com",
  welcomeMessage: function () {
    console.log("Hey Coding Owls!!");
  },
};

console.log(person);

// ---Accessing the elements of object

// 1. DOT Operator
console.log("-------- DOT Operator -------------");
console.log(person.name);
console.log(person.car.name);
console.log(person.education[1]);

// ----- 2. Square Brackets------------

console.log("------- Square Bracket---------");

console.log(person["name"]);
console.log(person["age"]);
person["laptop"] = "HP ";
console.log(person.laptop);
person.vaccinated = false;
person.passport = 12345;

const colors = ["Green", "Red", "Blue"];
const names = ["c1", "C2", "C3"];

for (let index = 0; index < 3; index++) {
  name = names[index];
  value = colors[index];
  person[name] = value;
}

console.log(person);

// -------- Iterate Through an Object ------
console.log("-------- Iterating through an object using for..in");
for (let key in person) {
  console.log(key, ":", person[key]);
}
