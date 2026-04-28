function login() {
    const user = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPass").value.trim();

    const savedUser = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");

    const msg = document.getElementById("loginMsg");

    if (user === savedUser && pass === savedPass) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "profile.html";
    } else {
        msg.textContent = "Incorrect username or password.";
        msg.style.fontSize = "12px"; 
        msg.style.color = "red";
        msg.style.marginTop = "10px";
    }
}