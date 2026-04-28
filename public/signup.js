const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const status = document.querySelector('input[name="status"]:checked');
        const bias = document.getElementById("bias").value;
        const favTrack = document.getElementById("favTrack").value;
        const favAlbum = document.getElementById("favAlbum").value;

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("status", status ? status.value : "");
        localStorage.setItem("bias", bias);
        localStorage.setItem("favTrack", favTrack);
        localStorage.setItem("favAlbum", favAlbum);

        localStorage.setItem("loggedIn", "true");

        alert("Account successfully created!");

        window.location.href = "profile.html";
    });
}