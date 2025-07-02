//js
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const passwordStrength = document.getElementById("passwordStrength");
const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
 
togglePassword.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text": "password";
    togglePassword.textContent = passwordInput.type === "password" ? "visibility" : "visibility_off"
});
 
toggleConfirmPassword.addEventListener("click", () => {
    confirmPasswordInput.type = confirmPasswordInput.type === "password" ? "text": "password";
    toggleConfirmPassword.textContent = confirmPasswordInput.type === "password" ? "visibility" : "visibility_off"
})
 
 
passwordInput.addEventListener("input", () => {
    const value = passwordInput.value;
    let strength = ""
    let className = ""
 
    if(value.length<6) {
        strength = "Weak";
        className = "weak"
    } else if (value.match(/[A-Za-z]/) && value.match(/[0-9]/) && value.length >=6 && value.length < 10) {
        strength = "Medium";
        className = "medium"
    } else if (value.match(/[A-Z]/) && value.match(/[a-z]/) && value.match(/[0-9]/) && value.match(/[\W_]/) && value.length >= 10) {
        strength = "Strong";
        className = "strong"
    }
 
    passwordStrength.textContent = strength
    passwordStrength.className = `strength ${className}`
});
 
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value.trim()
    const lastName = document.getElementById("lastName").value.trim()
    const email = document.getElementById("email").value.trim()
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value
 
    const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
 
    const firstNameError = document.getElementById("firstNameError")
    const lastNameError = document.getElementById("lastNameError")
    const emailError = document.getElementById("emailError")
    const passwordError = document.getElementById("passwordError")
    const confirmPasswordError = document.getElementById("confirmPasswordError")
 
    firstNameError.textContent = ""
    lastNameError.textContent = ""
    emailError.textContent = ""
    passwordError.textContent = ""
    confirmPasswordError.textContent = ""
 
    let isValid = true;
 
    if(firstName === "") {
        firstNameError.textContent = "First Name cannot be empty";
        isValid = false
    }
    if(lastName === "") {
        lastNameError.textContent = "Last Name cannot be empty";
        isValid = false
    }
    if(!email.match(emailPattern)) {
        emailError.textContent = "Email is not valid "
        isValid = false
    }
    if(password.length < 6) {
        passwordError.textContent = "Password must be atleast 6 character"
        isValid = false
    }
 
    if(password !== confirmPassword) {
        confirmPasswordError.textContent = "Entered Password does not match with Confirm Password"
        isValid = false
    }
 
    if(isValid) {
        alert("Registration successfull")
    }
})