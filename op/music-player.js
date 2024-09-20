// music-player.js
const playMusic = (musicUrl) => {
    const audio = document.getElementById('audio');
    audio.src = musicUrl;
    audio.play();
  };
  
  // Handle requests from the Telegram bot
  fetch('/play-music').then((response) => {
    const musicUrl = response.url.split('?musicUrl=')[1];
    playMusic(musicUrl);
  });