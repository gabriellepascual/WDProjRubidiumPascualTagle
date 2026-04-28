document.getElementById("username").value = localStorage.getItem("username") || "";
document.getElementById("bias").value = localStorage.getItem("bias") || "";
document.getElementById("track").value = localStorage.getItem("favTrack") || "";
document.getElementById("album").value = localStorage.getItem("favAlbum") || "";

function saveChanges() {
    localStorage.setItem("username", document.getElementById("username").value);
    localStorage.setItem("bias", document.getElementById("bias").value);
    localStorage.setItem("favTrack", document.getElementById("track").value);
    localStorage.setItem("favAlbum", document.getElementById("album").value);

    alert("Changes saved!");
    window.location.href = "profile.html";
}

function deleteField(field) {
    localStorage.removeItem(field);

    if (field === "bias") document.getElementById("bias").value = "";
    if (field === "favTrack") document.getElementById("track").value = "";
    if (field === "favAlbum") document.getElementById("album").value = "";
}

function goBack() {
    window.location.href = "profile.html";
}