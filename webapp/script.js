let audio = new Audio();
let playbackRate = 1.0; // Стандартная скорость

function play() {
    if (audio.src) {
        audio.play();
    }
}

function pause() {
    audio.pause();
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
}

function speedUp() {
    playbackRate += 0.1;
    audio.playbackRate = playbackRate;
}

function slowDown() {
    playbackRate = Math.max(0.1, playbackRate - 0.1);
    audio.playbackRate = playbackRate;
}

function loadFile(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            audio.src = e.target.result;
            audio.play();
        };
        reader.readAsDataURL(file);
    }
}
