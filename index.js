const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('6039853162:AAGevjnTF-7Y_i7UlT1Ve0wltVrk-2cdocI', {
  polling: true,
})

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hey boy');
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'I dont think so');
});
