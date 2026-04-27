const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();

        if (!username) {
            alert("Please enter a username");
            return;
        }

        localStorage.setItem("username", username);

        console.log("Saved username:", username);

        window.location.href = "profile.html";
    });
}