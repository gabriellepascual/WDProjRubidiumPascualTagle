const username = localStorage.getItem("username");

console.log("Stored username:", username);

if (!username || username.trim() === "") {
    document.getElementById("noAccountMsg").style.display = "block";
    document.getElementById("profileContent").style.display = "none";
    document.getElementById("scoreBox").style.display = "none";
    document.getElementById("welcomeText").style.display = "none";
} else {
    document.getElementById("displayUsername").textContent = username;
}