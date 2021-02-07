var TelegramBot = require('node-telegram-bot-api');
var cheerio = require('cheerio');
var request = require('request');
var token = <insert bot token>;
var bot = new TelegramBot(token, {
  polling: true
});

var url = "http://www.hltv.org/matches/"
request(url, function(err, res, body){
  if(err){console.log(err);}
  else{
    $ = cheerio.load(body);
    var cards = [];
    $('.matchListBox').each(function(){
      cards.push({
          timeStatus:$('.matchTimeCell',this).text(),
          team1:$('.matchTeam1Cell',this).text().replace(/\n|\s/g, ""),
          team2:$('.matchTeam2Cell',this).text().replace(/\n|\s/g, ""),
          link:'hltv.org' + $('.matchActionCell a',this).attr('href')
          // url:$('a',this).attr('href')
      });
      console.log(cards)
    });
  }
});
