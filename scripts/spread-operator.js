const first = [1, 2, 3];
const second = [4, 5, 6];

//1,2,3,a,b,4,5,6

const combinedTr = first.concat("a", "b").concat(second);
console.log(combinedTr);

//1,2,3,a,4,5,6,b

const combinedTr1 = first.concat("a").concat(second).concat("b");
console.log(combinedTr1);

const combinedSO = [...first, "a", ...second, "b"];
console.log(combinedSO);

const cloneFirst = [...first];

// -------------------------------------------------
console.log("------------- Referencing -------------------");

const grades = ["C", "A", "B", "D"];
console.log("Before Sorting:", grades);
const sortedGrades = [...grades].sort();
console.log("After Sorting:", sortedGrades);
console.log("After Sorting:", grades);

// ----------------------------------------------------
const name = { name: "Zartab" };
const job = { profile: "Corporate Trainer" };

const combined = { ...name, ...job, location: "Mumbai" };
console.log(combined);
