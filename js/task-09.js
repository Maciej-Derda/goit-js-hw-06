function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const span = document.querySelector("span.color");
const button = document.querySelector("button.change-color");
button.addEventListener("click", () => {
  let generatedColor = getRandomHexColor();
  body.style.backgroundColor = generatedColor;
  span.textContent = generatedColor;
});
