import { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } from "discord.js";

import { db, Translator} from '../index.js';

export default {
  name: 'language',
  slashBuilder(lang) {
    const def = new Translator('pt-BR').t;

    const slash = new SlashCommandBuilder()
      .setName(this.name)
      .setDescription(def('commands.language.slashBuilder.description'));

      lang(slash, 'commands.language.slashBuilder');

  return slash;
  },
  async execute(interaction, t, c) {
    const lang = db.get('lang') || 'pt-BR';
    const row = new ActionRowBuilder()
      .addComponents(new StringSelectMenuBuilder()
        .setCustomId('.')
        .setPlaceholder(t('commands.language.texts.rowPlaceholder'))
        .setOptions([{
          value: 'en-US',
          label: 'English, US',
          description: t('commands.language.texts.optionEn_US'),
          emoji: '🇺🇸',
          default: lang === 'en-US'
        }, {
          value: 'es-ES',
          label: 'Español',
          description: t('commands.language.texts.optionEs_ES'),
          emoji: '🇪🇸',
          default: lang == 'es-ES'
        }, {
          value: 'ja',
          label: '日本語',
          description: t('commands.language.texts.optionJa'),
          emoji: '🇯🇵',
          default: lang == 'ja'
        }, {
          value: 'pt-BR',
          label: 'Português, Brasil',
          description: t('commands.language.texts.optionPt_BR'),
          emoji: '🇧🇷',
          default: lang == 'pt-BR'
        }, {
          value: 'pt-IN',
          label: 'Português, Brasil (Informal)',
          description: t('commands.language.texts.optionPt_IN'),
          emoji: '🇧🇷',
          default: lang == 'pt-IN'
        }])
        .setMinValues(1)
      );

      const inte = await interaction.editReply({content: t('commands.language.texts.message', {lang}), components: [row]});
      const collector = inte.createMessageComponentCollector({
        filter: (int) => int.user.id == interaction.user.id,
        time: 15000
      });
      
      collector.on('collect', (int) => {
        const nT = new Translator(int.values[0]).t;
        db.set('lang', int.values[0]);
        interaction.editReply({content: nT('commands.language.texts.altered', {lang: int.values[0]}), components: []})
        collector.stop('.')
      });

      collector.once('end', (collect, reason) => {
        if(reason === '.') return;
        interaction.editReply({content: t('commands.language.texts.canceled', {lang}), components: []})
      })
      c();
  }
}