const name = "Ajay";
const company = "AU Small Finance Bank";
const employeeCode = "AU12345";

const statement =
  name + " works for " + company + " ,their employee id is " + employeeCode;

console.log(statement);
console.log("-------- String Interpolation -------------------");
const line = `${name} works for ${company} ,their employee code is ${employeeCode}`;
console.log(line);

console.log("--------- Cases ------------");

let s1 = "au";
let s2 = "small finance";
let s3 = "BANK";

console.log(s1, s2, s3);

s1 = s1.toUpperCase();
s2 = s2.toUpperCase();
s3 = s3.toLowerCase();

console.log(s1, s2, s3);

console.log("------- TRIM--------------");

let s4 = "                   Hello World                      ";
console.log(s4, s4.length);
s4 = s4.trim();
console.log(s4, s4.length);

console.log("--------- Slice -----------");

let id = "AU976463";
let newId = id.slice(2);
console.log(id, newId);

let x = "education";
let x1 = x.slice(3, 6);
console.log(x, x1);
