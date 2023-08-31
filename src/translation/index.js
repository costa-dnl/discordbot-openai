import enUS from './languages/en-US/index.js';
import esES from './languages/es-ES/index.js';
import ja from './languages/ja/index.js';
import ptBR from './languages/pt-BR/index.js';
import ptIN from './languages/pt-IN/index.js';

const languages = {
  'en-US': enUS,
  'es-ES': esES,
  ja,
  'pt-BR': ptBR,
  'pt-IN': ptIN
};

export default class Translator {
  constructor(locale) {
    const translations = this.loadTranslations(locale);

    this.t = (key, values) => {
      if(key.includes('.')) {
        let nk = translations;
        key.split('.').map((n) => {nk = nk[n]});
        return this.replacePlaceholders(nk, values);
      }

      const translation = translations[key] || key;
      return this.replacePlaceholders(translation, values);
    };
  }

  loadTranslations(locale) {
    return languages[locale];
  }

  replacePlaceholders(translation, values) {
    return translation.replace(/\{\{(\w+)\}\}/g, (match, key) => values[key] || '');
  }
};

export { languages }