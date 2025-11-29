// Basic Perant elements
let container = document.getElementById("loginForm");
let loginForm = document.getElementById("loginForm");
let signupForm = document.getElementById("signupForm");
// Login form elements
let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let loginBtn = document.getElementById("loginBtn");

// Signup form elements
let signupName = document.getElementById("signupName");
let signupEmail = document.getElementById("signupEmail");
let signupPassword = document.getElementById("signupPassword");
let signupBtn = document.getElementById("signupBtn");

function toggleForm() {
    if (loginForm.style.display === "block") {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    } else {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    }
}

// SIGNUP (same as tumhara)
signupBtn.addEventListener("click", function () {
    let sName = signupName.value.trim();
    let sEmail = signupEmail.value.trim().toLowerCase();
    let sPassword = signupPassword.value.trim();

    if (!sName || !sEmail || !sPassword) {
        alert("Please fill all fields");
        return;
    }

    let signUpItem = { name: sName, email: sEmail, password: sPassword };
    localStorage.setItem("signInData", JSON.stringify(signUpItem));
    toggleForm(); // show login form
});

// LOGIN (fixed)
loginBtn.addEventListener("click", function () {
    let eEmail = loginEmail.value.trim().toLowerCase();
    let ePassword = loginPassword.value.trim();

    // get saved signup data
    let signInsavedData = JSON.parse(localStorage.getItem("signInData"));

    if (!signInsavedData) {
        alert("No account found. Please sign up first.");
        return;
    }

    // use the same variable name here
    if (eEmail === signInsavedData.email && ePassword === signInsavedData.password) {
        window.location.href = "next.html"
    } else {
        alert("Invalid Email or Password");
        console.log("Login failed — check entered email/password or create account first.");
    }
});
