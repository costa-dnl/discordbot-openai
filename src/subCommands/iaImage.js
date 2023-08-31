import { AttachmentBuilder } from 'discord.js';
import { openai } from '../index.js';

export default {
  slashBuilder(subCommand, def, langs) {
    subCommand
      .setName('image')
      .setDescription(def('commands.iaImage.slashBuilder.description'))
      .addStringOption((stringOption) => {
        stringOption
          .setName('input')
          .setDescription(def('commands.iaImage.slashBuilder.options.a.description'))
          .setMinLength(6)
          .setMaxLength(250)
          .setRequired(true)

        langs(stringOption, 'commands.iaImage.slashBuilder.options.a');

        return stringOption;
      })
      
      .addStringOption((stringOption) => {
        stringOption
          .setName('size')
          .setDescription(def('commands.iaImage.slashBuilder.options.b.description'))
          .setChoices(
            {name: '1024x1024', value: '1024x1024'},
            {name: '512x512', value: '512x512'},
            {name: '256x256', value: '256x256'}
          )

        langs(stringOption, 'commands.iaImage.slashBuilder.options.b');

        return stringOption;
      })
      
      
    langs(subCommand, 'commands.iaImage.slashBuilder');

    return subCommand;
  },
  async execute(interaction, [input, size = '512x512'], t, c) {
    try {
      await interaction.editReply(t('commands.iaImage.texts.awaiting', {input}));

      console.log(size)
      const response = await openai.createImage({
        prompt: input,
        n: 1,
        size,
        user: `discord_${interaction.user.id}`
      });

      const attachment = new AttachmentBuilder(response.data.data[0].url)
        .setName(`${input}.png`)
        .setDescription(t('commands.iaImage.texts.attachmentDescription'))

      await interaction.editReply({
        content: t('commands.iaImage.texts.completed', {input}),
        files: [attachment]
      })
    
      c();
    } catch (err) {
      console.error(err);
      console.error('data:', err?.response?.data);
      await interaction.editReply(t('commands.iaImage.texts.catchMessage'));
      c();
    }
  }
}