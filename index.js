    var TelegramBot = require('node-telegram-bot-api');
	var token = '372781050:AAE4SWncReJrOpHV2hYlFcbTZGuFvdA2EDU';
    
    var bot = new TelegramBot(token, {polling: true});
bot.onText(/\/echo (.+)/, function (msg, match) {
      const fromId = msg.from.id;
      const resp = match[1];
      bot.sendMessage(fromId, resp);
    });

	bot.on('message', function(msg) {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});
