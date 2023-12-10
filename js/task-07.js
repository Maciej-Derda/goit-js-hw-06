const fontSizeSlider = document.getElementById("font-size-control");
const textOutput = document.getElementById("text");
fontSizeSlider.addEventListener("input", () => {
  textOutput.style.fontSize = `${fontSizeSlider.value}px`;
});
