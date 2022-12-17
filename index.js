var TelegramBot = require('node-telegram-bot-api');
var token = '5969452356:AAFrpSRa1toVAb9rMfC-Dkots1V0Vo-xQeo';

const bot = new TelegramBot(token, {polling:true});
bot.onText('message',function(msg) {

var text = msg.text;
var chatId = msg.chat.id;
var type = msg.chat.type;
var userid = msg.from.id;

if(text == "id"){
bot.sendMessage(chatId+"chtid");

}
});