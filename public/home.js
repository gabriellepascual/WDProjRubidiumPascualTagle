const audio = document.getElementById("bg");
let Play = false;

if (audio) {
    audio.volume = 1;
}

document.addEventListener("mousedown", function (e) {
    if (e.button === 0 && audio) {
        if (Play) {
            audio.pause();
        } else {
            audio.play().catch(err => {
                console.error("Autoplay prevented:", err);
            });
        }
        Play = !Play;
    }
});

