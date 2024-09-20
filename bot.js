const TelegramBot = require('node-telegram-bot-api');
const token = '7486422626:AAHEPueA_bmTzXYYrb_xdgaPIiYfk5KfGso';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === '/start') {
    // Open the web application in a mini window
    const url = 'https://mikail133.github.io/telegram-music-bot/music-player.html';
    bot.sendMessage(chatId, `Open music player: ${url}`);
  } else if (messageText.startsWith('/play')) {
    // Play music
    const musicUrl = messageText.replace('/play ', '');
    bot.sendMessage(chatId, `Playing music: ${musicUrl}`);
    // Send a request to the web application to play the music
    fetch(`https://mikail133.github.io/telegram-music-bot/play-music?musicUrl=${musicUrl}`);
  }
});