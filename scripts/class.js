let car1 = {
  name: "Honda City",
  color: "Black",
  price: 1000000,
};

let car2 = {
  name: "Hyundai i20",
  color: "White",
  price: 1200000,
};

let car3 = {
  name: "Tata Nexon",
  color: "Grey",
  price: 1500000,
};

// -----------------------------------------------------------

class Car {
  constructor(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
  }
  display() {
    console.log(`Car name is ${this.name}`);
    console.log(`Car color is ${this.color}`);
    console.log(`Car price is ${this.price}`);
  }
  setColor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
}

let c1 = new Car("Honda City", "Black", "1000000");
c1.display();
c1.setColor("White");
c1.display();
