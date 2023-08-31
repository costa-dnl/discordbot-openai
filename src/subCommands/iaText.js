import { openai } from '../index.js';

export default {
  slashBuilder(subCommand, def, langs) {
    subCommand
      .setName('text')
      .setDescription(def('commands.iaText.slashBuilder.description'))
      .addStringOption((stringOption) => {
        stringOption
          .setName('model')
          .setDescription(def('commands.iaText.slashBuilder.options.a.description'))
          .setAutocomplete(true)
          .setRequired(true);

        langs(stringOption, 'commands.iaText.slashBuilder.options.a')

        return stringOption;
      })
      .addStringOption((stringOption) => {
        stringOption
          .setName('input')
          .setDescription(def('commands.iaText.slashBuilder.options.b.description'))
          .setMinLength(12)
          .setMaxLength(500)
          .setRequired(true);

        langs(stringOption, 'commands.iaText.slashBuilder.options.b')

        return stringOption;
      });

      langs(subCommand, 'commands.iaText.slashBuilder')
      
    return subCommand;
  },
  async autoComplete(interaction, t) {
    try {
      const choice = interaction.options.getString('model').toLowerCase();
      const choiches = [
        {name: t('commands.iaText.slashBuilder.options.a.choices.a'), value: 'davinci'},
        {name: t('commands.iaText.slashBuilder.options.a.choices.b'), value: 'curie'},
        {name: t('commands.iaText.slashBuilder.options.a.choices.c'), value: 'babbage'}
      ];
      const filtered = choiches.filter((ch) => ch.name.toLowerCase().includes(choice))

      await interaction.respond(filtered.map((choice) => choice))
    } catch (err) {
      console.error(err);
    }
  },
  async execute(interaction, [model, prompt], t, c) {
    try {
      await interaction.editReply(t('commands.iaText.texts.awaiting', {input: prompt}));
      const models = {
        davinci: 'text-davinci-003',
        curie: 'text-curie-001',
        babbage: 'text-babbage-001'
      };

      if(!models[model]) {
        await interaction.editReply(t('commands.iaText.texts.errorModel'))
        c();
        return;
      }

      const response = await openai.createCompletion({
        model: models[model],
        prompt,
        temperature: 0,
        max_tokens: 1000,
        user: `discord_${interaction.user.id}`
      });

      await interaction.editReply(t('commands.iaText.texts.completed', {
        input: prompt,
        model,
        response: `${response.data.choices[0].text.slice(0, 1850)}${response.data.choices[0].text.slice(1851) ? '...' : ''}`,
      }));
      c();

    } catch (err) {
      console.error(err);
      console.error('data:', err?.response?.data)
      interaction.editReply(t('commands.iaText.texts.catchMessage'));
      c();
    }
  }
};