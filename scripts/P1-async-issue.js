console.log("Before");

const user = getUser(1000);
console.log(user);

console.log("After");
// There are three ways to deal with asynchronous code

// 1. Callbacks
// 2. Promises
// 3. Async Await
function getUser(id) {
  setTimeout(() => {
    console.log("Reading user data from database....");
    return { id: 1000, github: "codewithz" };
  }, 3000);

  return "xyz";
}
