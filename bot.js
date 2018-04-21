const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('By : Pitar');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('⚙            All Commands Ready');
  console.log('⚙            Bot Ready');
client.user.setStatus("dnd");
});
                                                                                                                                                                                              var prefix = "!";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "Bb") {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);

    message.channel.sendMessage(total).catch(console.error);
  }
  

  });

// playing
client.on('ready', () => {
                                                                                                                                                                                                                                                                              client.user.setGame(`!help`,'https://www.twitch.tv/v5bz');
});


client.on("message", msg => {
  if(msg.content === '!' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField(":trident:|Username", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField(":id:|iD", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':name_badge:|Status', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField(':game_die:|Playing', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField(':medal:|Roles', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField(':name_badge:|Discriminator', `${msg.discriminator}`, true)
          .addField(':date:|Created At', `${msg.createdAt}`,true)
          .addField(':robot:|Bot', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});

   client.on('message', message => {
     if (message.content === "!help") {
message.author.send("اوامر البوت الاسطورية" + `  **

"اوامر عامة"

!ping         | يجيب لك سرعة اتصال البوت
!say          | يكرر كلامك
!embed        | يكرر كلامك بطريقة اخرى
!avatar       | يعرض لك صورتك
!id           | يعرض لك معلوماتك

"اوامر السيرفرات"

!server       | يعرض لك معلومات السيرفر
!clear        | لمسح الشات
!ban          | لتبنيد الشخص
!kick         | لطرد الشخص

"اوامر البوت"

!bot          | لعرض معلومات البوت
!invite       | لاضافة البوت الى سيرفرك


"مساعدة"

 Made By : [ＰＩＴＡＲ ＩＳ ＨＥＲＥ#5333]
سيرفر الدعم : [https://discord.gg/fhqfp7J]


**`);
    }
});



// -ping
   client.on('message', message => {
     if (message.content === "!ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
                 .setFooter(`© Made By :<@!222825921311277059> ™.`, 'https://cdn.discordapp.com/attachments/334701598196367370/335685097351151620/royalbot.png')

  message.channel.sendEmbed(embed);
    }
});

// -say
var prefix = "!";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0x00AE86)
    message.channel.sendEmbed(say);
    message.delete();
  }


});

 
var prefix = "!";
client.on('message', message => {
    if(message.content == prefix + 'server') {
        var servername = message.guild.name
        var اونر = message.guild.owner
        var اعضاء = message.guild.memberCount
        var ايدي = message.guild.id
        var بلدالسيرفر = message.guild.region
        var الرومات = message.guild.channels.size
        var الرتب = message.guild.roles
        var عمل = message.guild.createdAt
        var الروم = message.guild.defaultChannel
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField('اسم السيرفر', servername)
        .addField('اي دي السيرفر ' , [ايدي])
        .addField('أعضاء السيرفر', اعضاء)
        .addField('رومات السيرفر', الرومات)
        .addField('روم الشات الأساسي', الروم)
        .addField('صاحب السيرفر', اونر)
        .addField('بلد السيرفر', بلدالسيرفر)
        .addField('تاريخ افتتاح السيرفر', عمل)
        .setColor('RANDOM')

        message.channel.sendEmbed(server)
    }
});


   client.on('message', message => {
     if (message.content === "!help") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
               .setFooter(`© RoyalDev ™.`, 'https://cdn.discordapp.com/attachments/334701598196367370/335685097351151620/royalbot.png')
  .setColor("#9B59B6")
  .addField("Done | تــــم" , "✉ | تم ارسالك في الخاص")

     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if(message.content.startsWith(prefix + 'avatar')) {
        var mentionned = message.mentions.users.first();
          var getvalueof;
          var bot;
          if(mentionned) {
            getvalueof = mentionned;
          } else {
            getvalueof = message.author;
          }
          let avatar = new Discord.RichEmbed()
          .setTitle(`${getvalueof.username}\'s Avatar`)
          .setImage(`${getvalueof.avatarURL}`);
          message.channel.sendEmbed(avatar);
      }
});

  
client.on("message", message => {
    var prefix = "!";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "© RoyalDev ™."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});


client.on('message', message => {
     if (message.content === "!bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
  .addField("**المستخدمين:**", client.users.size)
  .addField("**قنوات:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});


client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``! لقد تلقيت رساله جديدة في الخاص !``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From ${message.author.tag} (${message.author.presence.status.toUpperCase()})`)
    client.channels.get("381895264195051539").send({embed:iiMo});
    }
});


client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  


  if (command == "!kick") {
  if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت لا تملك صلاحية للكيك**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**البوت لا يملك صلاحيات الكيك");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
if (message.mentions.users.size < 1) return message.reply("**منشن الشخص المراد طرده**");
if (!message.guild.member(user)
.kickable) return message.reply("**لايمكنني طرد هذا الشخص**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`تم طرد العضو`, user.displayAvatarURL)
  .setColor("#502faf")
  .setTimestamp()
  .addField("**المطرود:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**من قبل:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
    
  })
}
});

client.on('message', message => {
  if (message.author.boss) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  var prefix = "!"
  if (command == "ban") {
      if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك صلاحية الباند**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("البوت لايملك صلاحيات الباند");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
if (message.mentions.users.size < 1) return message.reply("**منشن الشخص اللي تريد تبنيده**");
  if (!message.guild.member(user)
.kickable) return message.reply("**لايمكنني تبنيد هذا الشخص**");

  message.guild.member(user).ban();

  const banembed = new Discord.RichEmbed()
  .setAuthor(`تم تبنيد العضو`, user.displayAvatarURL)
  .setColor("#502faf")
  .setTimestamp()
  .addField("**المبند:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**من قبل:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});


client.on('message', message => {
    if(message.content.includes('discord.gg')){
      if(!message.channel.guild) return message.reply('**:x: ما في منع النشر بالخاص**');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** غير مسموح بنشر انفايتات هنا :x: : ! **`)
    }
}
});


client.on('message' , message => {
  if (message.author.bot) return;
    if(message.content.startsWith (prefix  + 'invite')) {
const embed = new Discord.RichEmbed()
.setColor("BLUE")
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle(':arrow_right: اضغط هنا رابط البوت')
.setURL('https://discordapp.com/oauth2/authorize?client_id=436996406776037376&permissions=8&scope=bot')
message.channel.sendEmbed(embed);
}
});


client.on("roleCreate",  rc => {
const channel = rc.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` + Role Created`)
  .setDescription(`A role Has been created \n Name : ${rc.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("roleDelete",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` - Role Delete`)
  .setDescription(`A role has been deleted \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("guildUpdate",  rc => {
const channel = rc.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`+ guild updated`)
  .setDescription(`A guild has been updated \n Name : ${rc.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("memberKick",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` Member Kicked -`)
  .setDescription(`A member has been kicked by \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("memberPrune",  rc => {
const channel = rc.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Member Pruned`)
  .setDescription(`A member has been pruned \n Name : ${rc.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("memberUpdate",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` Member Updated`)
  .setDescription(`A member has been updated to \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("memberRoleUpdate",  rc => {
const channel = rc.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` Updated Roles`)
  .setDescription(`Updated Roles to \n Name : ${rc.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("roleUpdate",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Role Updated`)
  .setDescription(`A role has been updated to \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("inviteCreate",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Invite Link Created +`)
  .setDescription(`A Invite Link has been Created \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("inviteUpdate",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Role Updated`)
  .setDescription(`A role has been updated to \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("inviteDelete",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Invite Link Deleted -`)
  .setDescription(`A invite link deleted \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("emojiUpdate",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Emoji Updated`)
  .setDescription(`A emoji has been updated to \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("emojiDelete",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Emoji Deleted -`)
  .setDescription(`A emoji has been deleted \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("emojiCreate",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Emoji Created + `)
  .setDescription(`A emoji has been created \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("messageDelete",  rd => {
const channel = rd.guild.channels.find("name", "console")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(`Message Deleted -`)
  .setDescription(`A Message has been deleted \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});


client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'Member'));
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
