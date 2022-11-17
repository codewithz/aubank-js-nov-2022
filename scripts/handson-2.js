const names = ["au", "sMalL", "fInancE", "BanK"];

const upperCasedNames = names.map((name) => name.toUpperCase());

console.log(names);
console.log(upperCasedNames);

let combined = upperCasedNames.toString();
// console.log(combined);
combined = combined.replaceAll(",", " ");
console.log(combined);
