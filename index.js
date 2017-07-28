    var TelegramBot = require('node-telegram-bot-api');
	var token = '372781050:AAE4SWncReJrOpHV2hYlFcbTZGuFvdA2EDU';
    
    var bot = new TelegramBot(token, {polling: true});
	

	bot.onText(/\/start/, function (msg, match) {
      	const fromId = msg.from.id;
	const name = msg.from.first_name;
	const messageStart = "Привет, " + name + "! Я -- простой бот, который поможет вам отправить данные по вашему рейсу электричек. Выберите число:";
     var messageSent =  bot.sendMessage(fromId, messageStart, {
		"reply_markup": {
			"keyboard": [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]],
			"one_time_keyboard": true
		}
	});

	
	
	bot.onText(/\d+/, function(msg, match) {
		bot.sendMessage(msg.from.id, "You replied: " + match[0] + " on " + new Date(msg.date));
	})
    });  

	bot.onText(/\/hi/, function (msg, match) {
		const fromId = msg.from.id;
		bot.sendMessage(fromId, "Привет!");
	})


