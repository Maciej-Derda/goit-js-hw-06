const validationInput = document.getElementById("validation-input");
validationInput.addEventListener("blur", () => {
  if (
    validationInput.value.length == validationInput.getAttribute("data-length")
  ) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
