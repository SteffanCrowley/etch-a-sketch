const container = document.querySelector("#container");
let slider = document.getElementById("myRange");
let output = document.querySelector("#scroll-size");

let colorWell;
let defaultColor = "#0000ff";
colorWell = document.querySelector("#colorWell");
colorWell.value = defaultColor;

window.addEventListener("load", createGrid, false);

let rows = slider.value;
createGrid(rows);

//this function listens for slider movement,
//clears grid, then makes a new one with new slider input
slider.oninput = function () {
  deleteGrid();
  rows = slider.value;
  createGrid(rows);
  output.textContent = "Rows: " + rows;
};

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
  let x = this.style.opacity;
  let newOpacity = addAlpha(x);

  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();

  this.setAttribute(
    "style",
    `background: ${colorWell.value}; opacity:${newOpacity}`
  );
  this.style.width = `${(500 - rows * 2) / rows}px`;
  this.style.height = `${(500 - rows * 2) / rows}px`;

  e.stopPropagation();
}

//function to clear the grid
function deleteGrid() {
  document.getElementById("container").innerHTML = "";
}

function addAlpha(opacity) {
  if (opacity > 0) {
    opacity = parseFloat(opacity) + 0.2;
    return opacity;
  } else {
    return 0.2;
  }
}

function updateAll(event) {
  document.querySelectorAll("sq").forEach(function (p) {
    p.style.color = event.target.value;
  });
}
