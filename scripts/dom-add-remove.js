function addNode() {
  let paragraphElement = document.querySelector("p");

  let childParagraph = document.createElement("p");

  childParagraph.textContent = "This is my added paragraph";
  childParagraph.style.backgroundColor = "gold";
  childParagraph.style.color = "white";

  paragraphElement.appendChild(childParagraph);
}

function removeNode() {
  let paragraphElement = document.querySelector("p");

  let descendantParagraphElement = document.querySelector("p p");

  paragraphElement.removeChild(descendantParagraphElement);
}
