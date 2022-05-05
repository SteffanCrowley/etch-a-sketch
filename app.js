const container = document.querySelector("#container");

const square = [];
let rows = 16;

createGrid(rows);

//this function creates the grid
function createGrid(rows) {
  for (let x = 0; x < rows; x++) {
    for (let i = 0; i < rows; i++) {
      square[0] = document.createElement("div");

      square[0].classList.add("square");

      container.append(square[0]);
    }
  }
}

// square.addEventListener("click", () => {
//   alert("Hello World");
// });

function logText(e) {
  console.log(this.classList);
  this.setAttribute("style", "background: blue;");

  e.stopPropagation();
}

const divs = document.querySelectorAll("div");
divs.forEach((div) => div.addEventListener("mouseover", logText));
