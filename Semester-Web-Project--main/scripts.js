document.getElementById("loginbutton").addEventListener("clicked", checkLoginStatus())


function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login successful!");
        window.location.href = "profile.html";
    } else {
        alert("Invalid email or password.");
    }

    return false;
}

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
        window.location.href = "profile.html";
    }
}