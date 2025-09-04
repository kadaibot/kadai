const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('あいさつをしろ'),

	async execute(client, interaction) {
		await interaction.reply({ content: `計算中`, ephemeral: true });
	},
};
