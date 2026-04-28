const username = localStorage.getItem("username");
const bias = localStorage.getItem("bias");
const track = localStorage.getItem("favTrack");
const album = localStorage.getItem("favAlbum");

const loggedIn = localStorage.getItem("loggedIn");

if (!username || username.trim() === "" || loggedIn !== "true") {
    document.getElementById("noAccountMsg").style.display = "block";
    document.getElementById("profileContent").style.display = "none";
    document.getElementById("scoreBox").style.display = "none";
    document.getElementById("welcomeText").style.display = "none";
} else {
    document.getElementById("displayUsername").textContent = username;

    document.getElementById("bias").textContent = bias || "N/A";
    document.getElementById("track").textContent = track || "N/A";
    document.getElementById("album").textContent = album || "N/A";
}