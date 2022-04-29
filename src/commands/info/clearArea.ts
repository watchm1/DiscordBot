import { Command } from '../../structures/Command';

export default new Command({
	name: 'clearArea',
	description: 'clear chats messages',
	run: async ({ interaction }) => {
		interaction.reply('deleting...');
	}
});
