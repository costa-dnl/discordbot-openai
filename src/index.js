import { config } from 'dotenv';
import { Client, Collection, REST, Routes } from 'discord.js';
import { readdirSync } from 'node:fs';
import secureDb from 'secure-db';
import relativeTime from 'util-stunks/src/func/relativeTime.js';
import { Configuration, OpenAIApi } from 'openai';

import Translator, { languages } from './translation/index.js';
import iaText from './subCommands/iaText.js';

config();

const client = new Client({
  intents: 3246851,
  failIfNotExists: false
});
const { Database } = secureDb
const db = new Database('l')
const commands = [];
const collection = new Collection();
const cooldown = new Collection();
const rest = new REST({version: '10'}).setToken(process.env['DISCORD_TOKEN']);

readdirSync('./src/commands').forEach(async (file) => {
  const command = (await import(`./commands/${file}`)).default;

  const langs = (type, tKey) => {
    for(const lang of Object.keys(languages)) {
      if(['pt-IN'].includes(lang)) return;
      const t = new Translator(lang).t;
      type.setNameLocalization(lang, t(`${tKey}.name`))
      type.setDescriptionLocalization(lang, t(`${tKey}.description`));

      return type;
    }
    return type;
  };

  commands.push(command.slashBuilder(langs))

  collection.set(command.name, command.execute)
});

async function loadSlash() {
  try {
    await rest.put(Routes.applicationCommands(process.env['DISCORD_CLIENT_ID']), {body: commands});
    console.log('loadSlash finnished');
  } catch (err) {
   console.error(err)
  }
};

client.once('ready', async () => {
  console.log('CLIENT_LOGIN:', client.user.tag);

  await loadSlash();
});

client.on('interactionCreate', async (interaction) => {
  const lang = db.get('lang') || 'pt-BR';
  const t = new Translator(lang).t;

  if(interaction.isChatInputCommand()) {
    const cd = cooldown.get(interaction.user.id);
    if(cd?.time > Date.now()) return interaction.reply({content: t('events.cooldownTime', {time: relativeTime(cd.time, {compact: true})}), ephemeral: true});
    if(cd?.await) return interaction.reply({content: t('events.cooldownAwait'), ephemeral: true})
  
    const command = collection.get(interaction.commandName);
    if(!command) return interaction.reply({content: t('events.commandNotFound'), ephemeral: true});

    const time = Date.now() + 10000;
    cooldown.set(interaction.user.id, {time, await: true});

    await interaction.deferReply().catch(() => {});
    return await command(interaction, t, () => cooldown.set(interaction.user.id, {time, await: false}));
  }

  if(interaction.isAutocomplete()) iaText.autoComplete(interaction, t);
});

client.login(process.env['DISCORD_TOKEN']);

const configuration = new Configuration({
  apiKey: process.env['OPENAI_KEY']
});
const openai = new OpenAIApi(configuration);

export { openai, cooldown, Translator, db };
export default client;