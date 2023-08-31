export default {
  ia: {
    slashBuilder: {
      name: 'ia',
      description: 'Inteligência Artificial'
    },
    texts: {
      commandNotFound: 'Não achei esse comando, mano :(',
      catchMessage: 'Deu um erro doido aqui e não consegui terminar o comando :/'
    }
  },

  language: {
    slashBuilder: {
      name: 'idioma',
      description: 'Muda a língua dos meus comandos pro rolê ficar mais louco.'
    },
    texts: {
      rowPlaceholder: 'Línguas',
      optionEn_US: 'Gringão',
      optionEs_ES: 'Espanhol',
      optionJa: 'Japa',
      optionPt_BR: 'Brasileiro',
      optionPt_IN: 'Português, Brabo',
      message: '**Língua atual:** `{{lang}}`\n**Escolhe a língua massa pra ser a nova língua padrão:**',
      altered: '**Língua mudada pro jeito `{{lang}}`.**',
      canceled: 'Deu ruim e não consegui esperar mais não, fera.'
    }
  },
  
  //subCommands
  iaImage: {
    slashBuilder: {
      name: 'imagem',
      description: 'Gera uma parada louca em forma de imagem.',
      options: {
        a: {
          name: 'entrada',
          description: 'A IA vai tentar gerar uma imagem com essa parada.'
        },
        b: {
          name: 'tamanho',
          description: "Tamanho da imagem que cê' quer:"
        }
      }
    },
    texts: {
      awaiting: 'To gerando uma imagem com o título `{{input}}`, mano.',
      attachmentDescription: 'Imagem gerada pela IA.',
      completed: '**Entrada:** `{{input}}`',
      catchMessage: 'Deu um erro loko aqui e não consegui terminar a parada :/'
    }
  },

  iaText: {
    slashBuilder: {
      name: 'texto',
      description: 'Gera uma resposta irada em formato de texto',
      options: {
        a: {
          name: 'modelo',
          description: 'Escolhe um modelo brabo pra gerar a parada.',
          choices: {
            a: '[Davinci] - o mestre dos mestres, mas leva um tempão pra gerar a resposta.',
            b: '[Curie] - resposta boa e rápida, mas também demora um pouco.',
            c: '[Babbage] - o reizinho dos chatbots, respostas curtas e simples, mas na moral, a parada é boa.'
          }
        },
        b: {
          name: 'entrada',
          description: 'Mensagem que vai ser jogada pra IA processar.'
        }
      }
    },
    texts: {
      awaiting: 'To gerando um texto com o título `{{input}}`, fera.',
      errorModel: 'Cê escolheu um modelo inválido, aí não rolou.',
      completed: '**Entrada:** `{{input}}`\n**Modelo:** `{{model}}`\n```\n{{response}}\n```',
      catchMessage: 'Deu um erro loko aqui e não consegui terminar a parada :/'
    }
  }
}
