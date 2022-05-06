const container = document.querySelector("#container");

let rows = 25;

createGrid(rows);

//this function creates the grid
function createGrid(rows) {
  for (let x = 0; x < rows; x++) {
    for (let i = 0; i < rows; i++) {
      const square = document.createElement("div");

      square.classList.add("square");
      square.style.width = `${(500 - rows * 2) / rows}px`;
      square.style.height = `${(500 - rows * 2) / rows}px`;
      container.append(square);
    }
  }
}

// square.addEventListener("click", () => {
//   alert("Hello World");
// });

function logText(e) {
  //   console.log(this.classList);
  this.setAttribute("style", "background: red;");
  this.style.width = `${(500 - rows * 2) / rows}px`;
  this.style.height = `${(500 - rows * 2) / rows}px`;

  e.stopPropagation();
}

const divs = document.querySelectorAll("div");
divs.forEach((div) => div.addEventListener("mouseover", logText));
