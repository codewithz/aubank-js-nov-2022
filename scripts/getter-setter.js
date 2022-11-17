const person = {
  firstName: "Zartab",
  lastName: "Nakhwa",
  //   fullName: function () {},
  get fullName() {
    console.log("I am in Getter");
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    let parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
// console.log(person.fullName());
// getter =>access property
console.log(person);
console.log(person.fullName);

// setter =? change (mutate) property
person.fullName = "John Doe";
console.log(person);
