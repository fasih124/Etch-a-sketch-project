let size = 16;
let color = "#000000";
// dome variables
const container = document.querySelector(".container");
// buttons
const sizeBtn = document.querySelector("#size");
const reset = document.querySelector("#Reset");
const resetColor = document.querySelector("#resetColor");
const randomColor = document.querySelector("#ranColor");

// start functions

function removeRows() {
  const removedivs = document.querySelectorAll(".row");
  removedivs.forEach((div) => {
    container.removeChild(div);
  });
}

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < num; j++) {
      const divs = document.createElement("div");
      divs.classList.add("box");
      row.appendChild(divs);
      divs.addEventListener("mouseover", () => {
        divs.style.backgroundColor = color;
      });
    }
    container.appendChild(row);
  }
}

// end functions

createGrid(size);

sizeBtn.addEventListener("click", () => {
  let userSize = prompt("Enter the Size of Grid(1-100): ");
  if (userSize <= 0 || userSize > 100 || userSize == String) {
    alert("invalid Size :(set Size 16)");
    userSize = 16;
  }
  size = Number(userSize);
  removeRows();
  createGrid(size);
});

//btn functions

reset.addEventListener("click", () => {
  removeRows();
  createGrid(size);
});

randomColor.addEventListener("click", () => {
  const rowdivs = document.querySelectorAll(".box");
  rowdivs.forEach((div) => {
    let randomBgColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)}`;
    div.addEventListener("mouseover", (e) => {
      div.style.backgroundColor = randomBgColor;
    });
  });
});

resetColor.addEventListener("click", () => {
  const rowdivs = document.querySelectorAll(".box");
  rowdivs.forEach((div) => {
    color = "#000000";
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = color;
      div.style.opacity = `1`;
    });
  });
});
