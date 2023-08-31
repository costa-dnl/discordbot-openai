import { SlashCommandBuilder } from 'discord.js';

import iaText from '../subCommands/iaText.js';
import iaImage from '../subCommands/iaImage.js'
import { Translator } from '../index.js';

const subCommand = {
  text: iaText,
  image: iaImage
};

export default {
  name: 'ia',
  slashBuilder(langs) {
    const def = new Translator('pt-BR').t;

    const slash = new SlashCommandBuilder()
      .setName(this.name)
      .setDescription(def('commands.ia.slashBuilder.description'))
      .addSubcommand((subCommand) => iaText.slashBuilder(subCommand, def, langs))
      .addSubcommand((subCommand) => iaImage.slashBuilder(subCommand, def, langs))
      .setDMPermission(false);

    langs(slash, 'commands.ia.slashBuilder')

    return slash;
  },
  async execute(interaction, t, c) {
    try {
      const subcommand = interaction.options._subcommand;
      const values = interaction.options._hoistedOptions.map((option) => option.value);

      if (!Object.keys(subCommand).includes(subcommand)) {
        await interaction.editReply(t('commands.ia.texts.commandNotFout'))
        c();
      };

      return subCommand[subcommand].execute(interaction, values, t, c);

    } catch (err) {
      console.error(err);
      await interaction.editReply(t('commands.ia.texts.catchMessage'));
      c();
    }
  }
}