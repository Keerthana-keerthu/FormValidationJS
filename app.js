function validateForm(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    if (username.trim() === "") {
        usernameError.textContent = "Username is required";
        return;
    }

    if (email.trim() === "") {
        emailError.textContent = "Email is required";
        return;
    }

    if (password.trim() === "") {
        passwordError.textContent = "Password is required";
        return;
    }

    
    window.location.href = "./signin.html";
}

