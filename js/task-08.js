const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", function getCredentials(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email;
  const password = form.elements.password;
  if (email.value === "" || password.value === "") {
    alert("Uzupełnij brakujące pola");
  } else {
    const credentials = {
      [email.name]: email.value,
      [password.name]: password.value,
    };
    console.log(credentials);
    form.reset();
  }
});
