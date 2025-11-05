const changeColorBtn = document.querySelector(".change-color");
const body = document.body;
const colorSpan = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtn.addEventListener("click", () => {
  const CurrentColor = getRandomHexColor();

  body.style.backgroundColor = CurrentColor;
  colorSpan.textContent = CurrentColor;
});
