const container = document.querySelector("#container");

const square = [];

createGrid();

function createGrid() {
  for (let i = 0; i < 16; i++) {
    square[0] = document.createElement("div");

    square[0].classList.add("square");

    container.append(square[0]);
  }
}
