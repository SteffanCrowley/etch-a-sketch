const container = document.querySelector("#container");
let slider = document.getElementById("myRange");
let output = document.querySelector("#scroll-size");

let rows = slider.value;

slider.oninput = function () {
  deleteGrid();
  rows = slider.value;
  createGrid(rows);
  output.textContent = "Rows: " + rows;
};

createGrid(rows);

//this function creates the grid
function createGrid(rows) {
  for (let x = 0; x < rows; x++) {
    for (let i = 0; i < rows; i++) {
      const square = document.createElement("sq");
      square.classList.add("square");
      square.style.width = `${(500 - rows * 2) / rows}px`;
      square.style.height = `${(500 - rows * 2) / rows}px`;
      container.append(square);
    }
  }
  const divs = document.querySelectorAll("sq");

  divs.forEach((sq) => sq.addEventListener("mouseover", logText));
}

function logText(e) {
  this.setAttribute("style", "background: red;");
  this.style.width = `${(500 - rows * 2) / rows}px`;
  this.style.height = `${(500 - rows * 2) / rows}px`;

  e.stopPropagation();
}

function deleteGrid() {
  document.getElementById("container").innerHTML = "";
}
