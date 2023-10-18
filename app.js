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

/*const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');

form.addEventListener('submit',(event)=>{
    if(!validategettingInuput()){
        event.preventDefault();
    }
})

function validategettingInuput(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    let success=true;

    if(usernameVal===''){
        success=false;
        settingError(username,'Username is not filled its required')
    }
    else{
        settingSuccess(username);
    }

    if(emailVal===''){
        success=false;
        settingError(email,'Email is not filled its required');
    }
    else if(!validateEmail(emailVal))
    {
        success=false;
        settingError(email,'Email is invalid');
    }
    else {
        settingSuccess(email);
    }

    if(passwordVal===''){
        success=false;
        settingError(password,'Password is required');
    }
    else if(passwordVal.length<8){
        success=false;
        settingError(password,'Password must be atleast 8 charaters');
    }
    else{
        settingSuccess(password);
    }
}

function settingError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');

    errorElement.innerText=message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function settingSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');

    errorElement.innerText= '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');

    
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  */