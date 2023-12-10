const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");
inputName.addEventListener("input", (event) => {
  if (inputName.value === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = event.currentTarget.value;
  }
});
