const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = "n!";

client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log("Watashi wa junbi ga dekite iru !")
    client.user.setGame("Regarder des animes n!")
});

client.on('message', message =>{

    if(message.content === "Salut Nocky"){
        message.reply("Non ! c'est Ohayõ !")
        console.log('Le bot à pas du tout dit bonjour');
    }

    if(message.content === prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#CC0066")
        .setTitle("Tien t'as besoin d'aide ? Voilà vous êtes servis !")
        .setDescription("Je suis un bot inspiré d'anime ! Tadahhh mes commandes ^^")
        .addField("n!aide", "Affiche les commandes du bot")
        .addField("Salut Nocky !", "Le bot te répondra !")
        .setFooter("Menu d'aide - Tuto")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a fait la commande d'aide")
    }
});
