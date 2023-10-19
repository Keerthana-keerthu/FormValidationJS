function validateForm(event) {
  event.preventDefault();
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const usernameError = document.getElementById("usernameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  usernameError.innerText = "";
  emailError.innerText = "";
  passwordError.innerText = "";

  if (!nameRegex.test(username.value)) {
      usernameError.innerText = "Username should only contain letters.";
      return;
  }
  if (!emailRegex.test(email.value)) {
      emailError.innerText = "Please enter a valid email address.";
      return;
  }
  const userData = {
      username: username.value,
      email: email.value,
      password: password.value,
  };
  localStorage.setItem("userData", JSON.stringify(userData));
  goToSignInPage();
}

function goToSignInPage() {
  window.location.href = "./signin.html";
}
