import HLTV from 'hltv'

var TelegramBot = require('node-telegram-bot-api');
var token = '255880512:AAHo9Na2lm5FEdRdn18ULhi5C_YViriUlmM';

var bot = new TelegramBot(token, {
  polling: true
});
