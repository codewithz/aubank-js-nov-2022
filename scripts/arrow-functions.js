function sayHello() {
  console.log("Hello World");
}

let v1 = () => {
  console.log("Hello World From Arrow Function");
};

sayHello();
v1();
// -------------------------------------------------------
function squareMe(number) {
  return number * number;
}

let square1 = (number) => {
  return number * number;
};

console.log(squareMe(3));
console.log(square1(4));

// Zero Parameter - () - compulsory
// One Parameter - () - optional [you can get rid of it]
// More than one Parameter - () - compulsory

let square2 = number => {
  return number * number;
};

console.log(square2(5));

//  Arrow Functions and Statements

//  Single Statment --> You can get rid of {} + return statement
// [You cannot skip one and use other]

// If a function have a single statement 

// console.log(something) Executable Statement 
//  -- it will be executed

// return number*number
// number*number

// number*number -- value -- in this case it will be returned

let sqaure3=number => number * number;
console.log(sqaure3(6));

// Task 

function add(a,b,c){
    return a+b+c;
}

let t1=(a,b,c)=> a+b+c;

function calculation(a,b,c){
    d=a+b+c;
    e=a-b-c;
    return d*e;
}

(a,b,c)=>{
    d=a+b+c;
    e=a-b-c;
    return d*e;
}

console.log("---------- Usage for Arrow Functions-------");

let numbers=[1,2,3,4,5,6,7,8,9,10]
console.log("Original:",numbers);
let evenNumbers=numbers.filter(function(item,index){
    return item%2==0
});
console.log("Filtered:",evenNumbers);

let oddNumbers=numbers.filter(number=>number%2==1)

const squaredNumbers=numbers.map(number=>number*number)
console.log("Squared Number:",squaredNumbers);





  