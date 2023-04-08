const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('YOUR_BOT_TOKEN', {polling: true});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hey boy');
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'I dont think so');
});