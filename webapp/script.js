let audio = new Audio();
let isPlaying = false;
let playbackRate = 1;

function playAudio() {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
        document.getElementById('record').style.transform = 'rotate(360deg)';
    }
}

function pauseAudio() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        document.getElementById('record').style.transform = 'none';
    }
}

function stopAudio() {
    if (isPlaying) {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
        document.getElementById('record').style.transform = 'none';
    }
}

function changeSpeed(speed) {
    playbackRate = speed;
    audio.playbackRate = playbackRate;
}

function loadAudioFile(event) {
    const file = event.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        audio.src = fileURL;
    }
}
