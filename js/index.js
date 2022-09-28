let size = 16;
let color = "black";
const container = document.querySelector(".container");

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < num; j++) {
      const divs = document.createElement("div");
      row.appendChild(divs);
      divs.addEventListener("mouseover", () => {
        divs.style.backgroundColor = color;
      });
    }
    container.appendChild(row);
  }
}

createGrid(size);

const sizeBtn = document.querySelector("#size");
sizeBtn.addEventListener("click", () => {
  let userSize = prompt("Enter the Size of Grid(1-100): ");
  if (userSize <= 0 || userSize > 100) {
    alert("invalid Size(setting Size 16)");
    userSize = 16;
  }
  size = Number(userSize);
  const removedivs = document.querySelectorAll(".row");
  removedivs.forEach((div) => {
    container.removeChild(div);
  });
  createGrid(size);
});

// buttons
