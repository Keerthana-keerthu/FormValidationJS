function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    
    emailError.textContent = "";
    passwordError.textContent = "";

    if (email.trim() === "") {
        emailError.textContent = "Email is required";
        return;
    }

    if (password.trim() === "") {
        passwordError.textContent = "Password is required";
        return;
    }

    
    window.location.href = "./todo.html";
}