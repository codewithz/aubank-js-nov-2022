const person = {
  firstName: "Zartab",
  lastName: "Nakhwa",
  //   fullName: function () {},
  get fullName() {
    console.log("I am in Getter");
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") {
      throw new Error("Entered Name  is not a String");
    } else {
      let parts = value.split(" ");
      if (parts.length !== 2) {
        throw new Error("First Name and Last Name both required");
      } else {
        this.firstName = parts[0];
        this.lastName = parts[1];
      }
    }
  },
};
// console.log(person.fullName());
// getter =>access property
console.log(person);
console.log(person.fullName);

// setter =? change (mutate) property
// person.fullName = "John Doe";

try {
  person.fullName = "Zartab";
} catch (error) {
  console.log(error);
}
console.log(person);
