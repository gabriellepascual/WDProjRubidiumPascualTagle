const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const user = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
            status: document.querySelector('input[name="status"]:checked')?.value || "",
            bias: document.getElementById("bias").value,
            favTrack: document.getElementById("favTrack").value,
            favAlbum: document.getElementById("favAlbum").value,
            score: 0
        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("Account created successfully!");

        window.location.href = "profile.html";
    });
}

const storedUser = JSON.parse(localStorage.getItem("user"));

if (storedUser) {

    const usernameEl = document.getElementById("displayUsername");
    const biasEl = document.getElementById("bias");
    const trackEl = document.getElementById("track");
    const albumEl = document.getElementById("album");

    if (usernameEl) usernameEl.textContent = storedUser.username;
    if (biasEl) biasEl.textContent = storedUser.bias || "N/A";
    if (trackEl) trackEl.textContent = storedUser.favTrack || "N/A";
    if (albumEl) albumEl.textContent = storedUser.favAlbum || "N/A";
}

const scoresDisplay = document.getElementById("scoresDisplay");

if (scoresDisplay && storedUser) {
    scoresDisplay.textContent = `Username: ${storedUser.username} | Score: ${storedUser.score}`;
}