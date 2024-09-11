let audio = new Audio();
let isPlaying = false;
let record = document.getElementById('record');

function play() {
    if (audio.src) {
        audio.play();
        isPlaying = true;
        record.classList.add('playing');
    } else {
        alert("Please upload an audio file first.");
    }
}

function pause() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        record.classList.remove('playing');
    }
}

function stop() {
    if (isPlaying) {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
        record.classList.remove('playing');
    }
}

function loadFile(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            audio.src = e.target.result;
            play();
        };
        reader.readAsDataURL(file);
    }
}

function changeSpeed(speed) {
    audio.playbackRate = speed;
}

