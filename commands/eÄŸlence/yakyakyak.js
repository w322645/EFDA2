const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {
    return message.channel.send("**Yak Yak Yak**").then(async msg => {
                        setTimeout(() => {
                            msg.edit('π¬');
                        }, 500);
                        setTimeout(() => {
                            msg.edit('π¬ β ');
                        }, 700);
                        setTimeout(() => {
                            msg.edit('π¬ ββ ');
                        }, 900);
                        setTimeout(() => {
                            msg.edit('π¬ βββ ');
                        }, 1000);
                        setTimeout(() => {
                            msg.edit('π¬ βββ');
                        }, 1100);
                        setTimeout(() => {
                            msg.edit('π¬ ββ');
                        }, 1200);
                        setTimeout(() => {
                            msg.edit('π¬ β');
                        }, 1300); 
                       setTimeout(() => {
                            msg.edit('π¬ ');
                        }, 1400);
      setTimeout(() => {
                            msg.edit('**Hayallerimiz Gibi Sigarada Bitti **');
                        }, 1800);
                        setTimeout(() => {
                            msg.delete(`**Hayallerimiz Gibi Sigarada Bitti **`);
                        }, 6000);
                    });
                };

                exports.conf = {
                  enabled: true,
                  guildOnly: false,
                  aliases: ['YEDEK KOMUT1', 'YEDEK KOMUT2'],
                  permLevel: "0"
                };

                exports.help = {
                  name: "yak",
                  description: "sigara iΓ§ersiniz",
                  usage: "sigara"
                };