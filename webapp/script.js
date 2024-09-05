let record = document.getElementById('record');
let audio = new Audio();

function play() {
    if (audio.src) {
        audio.play();
        record.classList.add('playing');
    }
}

function pause() {
    audio.pause();
    record.classList.remove('playing');
}

function loadFile(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
        audio.src = e.target.result;
    };
    reader.readAsDataURL(file);
}
