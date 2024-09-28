const Discord = require('discord.js');
const ayarlar = require('./ayarlar');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag} hgmm1234x tarafından aktif edilmiştir`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('Aleyküm selam dostum nasılsın umarım iyisindir :wink:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Sa') {
    msg.reply('Aleyküm selam dostum nasılsın umarım iyisindir :wink:');
  }
});

client.on('message', msg => {
  if (msg.content === 'eyw') {
    msg.reply('Eyvallahınla yaşa aslan parçası');
  }
});

client.on('message', msg => {
  if (msg.content === 'günaydın') {
    msg.reply('sanada günaydın prenses umarım uykunu iyi almışşındır :wink:');
  }
});

client.on('message', msg => {
  if (msg.content === 'iyi geceler') {
    msg.reply('sanada iyi geceler tatlı rüyalar rüyanda güzel şeyler görme dileğiyle:)');
  }
});

client.on('message', msg => {
  if (msg.content === 'İyi geceler') {
    msg.reply('sanada iyi geceler tatlı rüyalar rüyanda güzel şeyler görme dileğiyle:)');
  }
});

client.on('message', msg => {
  if (msg.content === 'Günaydın') {
    msg.reply('sanada günaydın prenses umarım uykunu iyi almışşındır :wink:');
  }
});


client.on('message', msg => {
  if (msg.content === 'nasılsınız') {
    msg.reply('şahsen ben iyiyim dostum sende iyi ol :wink:');
  }
});


client.on('message', msg => {
  if (msg.content === 'Nasılsınız') {
    msg.reply('şahsen ben iyiyim dostum sende iyi ol :wink:');
  }
});

client.on('message', msg => {
  if (msg.content === 'naber') {
    msg.reply('iyi knk sender naber');
  }
});

client.on('message', msg => {
  if (msg.content === 'Naber') {
    msg.reply('iyi knk sender naber');
  }
});

client.on('message', msg => {
  if (msg.content === 'Selam') {
    msg.reply('Selam dostum hoş geldin');
  }
});
client.on('message', msg => {
  if (msg.content === 'selam') {
    msg.reply('Selam dostum hoş geldin');
  }
});

client.on('message', msg => {
  if (msg.content === 'Beşiktaşlı var mı') {
    msg.reply('Ben takım tutmam dostum ama kalbim beşiktaştan yana');
  }
});

client.on('message', msg => {
  if (msg.content === 'beşiktaşlı var mı') {
    msg.reply('Ben takım tutmam dostum ama kalbim beşiktaştan yana');
  }
});

client.on('message', msg => {
  if (msg.content === 'fenerli var mı') {
    msg.reply('Ben takım tutmam dostum ama kalbim fenerbahçeden yana');
  }
});
client.on('message', msg => {
  if (msg.content === 'Fenerli var mı') {
    msg.reply('Ben takım tutmam dostum ama kalbim fenerbahçeden yana');
  }
});

client.on('message', msg => {
  if (msg.content === 'gsli var mı') {
    msg.reply('Ben takım tutmam dostum ama kalbim galatasaraydan yana');
  }
});
client.on('message', msg => {
  if (msg.content === 'Gsli var mı') {
    msg.reply('Ben takım tutmam dostum ama kalbim galatasaraydan yana');
  }
});
client.on('message', msg => {
  if (msg.content === 'ben yatıom') {
    msg.reply('iyi geceler knk ');
  }
});


client.login(ayarlar.token);