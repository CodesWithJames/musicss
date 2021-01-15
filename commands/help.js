const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { COLOR } = require("../config.json");
module.exports = {
  name: "help",
  description: "Get all of my commands names and descriptions",
  execute(client, message, args) {
    let embed = new MessageEmbed()
      .setAuthor("Help Menu", client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(COLOR)
      .setDescription(
        `These are the commands! ! WEBSITE COMING SOON !`
      );
    let command = readdirSync("./commands");

    let i;
    for (i = 0; i < command.length; i++) {
      console.log(command[i]);

      const cmd = client.commands.get(command[i].replace(".js", ""));
      embed.addField(`**${cmd.name}**`, cmd.description, false);
    }

    message.channel.send(embed);
  }
};
