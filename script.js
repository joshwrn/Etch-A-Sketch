function create() {
  let userInput = prompt("enter number 1-100");
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
    console.log(test);
  }
}

let start = create();

let reset = document.getElementById("reset");
reset.onclick = function () {
  window.location.reload(false);
};
