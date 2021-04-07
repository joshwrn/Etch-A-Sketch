function create(userInput = 16) {
  if (userInput >= 1 && userInput <= 100) {
    let gridSize = userInput * userInput;
    let box = document.getElementById("container");
    box.style.gridTemplateColumns = "repeat(" + userInput + ", 1fr)";
    box.style.gridTemplateRows = "repeat(" + userInput + ", 1fr)";
    for (let j = 0; j < gridSize; j++) {
      let div = document.createElement("div");
      div.className = "grid";
      box.appendChild(div);
      div.onmouseover = function () {
        div.style.background = "rgba(255, 255, 255, 1)";
      };
    }
  } else {
    alert("invalid");
  }
}

function removeElementsByClass(className) {
  var elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

let reset = document.getElementById("reset");
reset.onclick = function () {
  let a = removeElementsByClass("grid");
  let newInput = document.getElementById("search");
  let b = create(newInput.value);
};

create();
