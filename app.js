const container = document.querySelector("#container");

const square = [];
let rows = 16;

createGrid(rows);

function createGrid(rows) {
  for (let x = 0; x < rows; x++) {
    for (let i = 0; i < rows; i++) {
      square[0] = document.createElement("div");

      square[0].classList.add("square");

      container.append(square[0]);
    }
  }
}
