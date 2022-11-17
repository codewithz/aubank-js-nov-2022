console.log("Start");

setTimeout(function cbFunction() {
  console.log("Callback Function invoked");
}, 5000);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

console.log("End");
