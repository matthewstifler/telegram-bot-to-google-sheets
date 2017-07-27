    var TelegramBot = require('node-telegram-bot-api');
	var token = '372781050:AAE4SWncReJrOpHV2hYlFcbTZGuFvdA2EDU';
    
    var bot = new TelegramBot(token, {polling: true});
	

	bot.onText(/\/start/, function (msg, match) {
      	const fromId = msg.from.id;
	const name = msg.from.first_name;
	const messageStart = "Привет, " + name + "! Я -- простой бот, который поможет вам отправить данные по вашему рейсу электричек";
      bot.sendMessage(fromId, messageStart);
    });

	bot.onText(/\/hi/, function (msg, match) {
		const fromId = msg.from.id;
		bot.sendMessage(fromId, "Привет!");
	})


