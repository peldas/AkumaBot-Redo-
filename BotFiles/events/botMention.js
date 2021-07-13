const Discord = require('discord.js');
const {botInfo} = require('../../botVariables');
const {mentionEmbed} = require('../../mentionEmbed');
const {enumjlptRoom, spacedjlptCommand} =
require('../Tests/jlptTestFolder/jlptVariables');
module.exports = {
  botMention: function(message) {
    convertModTag = `<@&${botInfo.modID}>`;
    const messageEmbed = new Discord.MessageEmbed();
    mentionEmbed.embedDescription = mentionEmbed.embedDescription
        .replace(`-moderatorID`, convertModTag);
    messageEmbed
        .setColor(mentionEmbed.embedColor)
        .setTitle(mentionEmbed.embedTitle)
        .setImage(null)
        .setDescription(
            mentionEmbed.embedDescription)
        .addField(
            mentionEmbed.jlptTestInfoTitle,
            mentionEmbed.jlptTestInfoDesc);

    // Displays JLPT commands
    for (const [key, value] of Object.entries(spacedjlptCommand)) {
      messageEmbed
          .addField(key.toUpperCase(), value, true)
      // Displays blank fields for spaces in between the
      // commands
          .addField('\u200B', '\u200B', true);
    }

    // Displays Jlpt rooms info
    messageEmbed
        .addField(
            mentionEmbed.jlptRoomsInfoTitle,
            mentionEmbed.jlptRoomsInfoDesc);

    // Displays jlpt room links
    for (const [key, value] of Object.entries(enumjlptRoom)) {
      const jlptTag = `<#${value}>`;
      messageEmbed
          .addField(key.toUpperCase(), `${jlptTag}`, true);
    }

    message.channel.send(messageEmbed);
  },
};
