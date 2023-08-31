export default {
  ia: {
    slashBuilder: {
      name: 'ia',
      description: 'Inteligência Artificial'
    },
    texts: {
      commandNotFound: 'Não foi possível encontrar esse comando.',
      catchMessage: 'Ocorreu um erro que impediu a conclusão do comando.'
    }
  },

  language: {
    slashBuilder: {
      name: 'idioma',
      description: 'Alterar o idioma dos meus comandos para o servidor.'
    },
    texts: {
      rowPlaceholder: 'Idiomas',
      optionEn_US: 'Inglês',
      optionEs_ES: 'Espanhol',
      optionJa: 'Japonês',
      optionPt_BR: 'Português, Brasil',
      optionPt_IN: 'Português, Brasil (Informal)',
      message: '**Idioma atual:** `{{lang}}`\n**Escolha um idioma da lista para ser o novo idioma padrão:**',
      altered: '**Idioma alterado para `{{lang}}`.**',
      canceled: 'A solicitação foi cancelada porque excedeu o limite de tempo.'
    }
  },
  
  //subCommands
  iaImage: {
    slashBuilder: {
      name: 'imagem',
      description: 'Gerar uma resposta em formato de imagem.',
      options: {
        a: {
          name: 'entrada',
          description: 'A IA tentará gerar uma imagem com essa entrada.'
        },
        b: {
          name: 'tamanho',
          description: "Tamanho da imagem."
        }
      }
    },
    texts: {
      awaiting: 'Uma imagem está sendo gerada com o título `{{input}}`.',
      attachmentDescription: 'Imagem gerada artificialmente.',
      completed: '**Entrada:** `{{input}}`',
      catchMessage: 'Ocorreu um erro que impediu a conclusão do comando.'
    }
  },

  iaText: {
    slashBuilder: {
      name: 'texto',
      description: 'Gerar uma resposta em formato de texto',
      options: {
        a: {
          name: 'modelo',
          description: 'Escolha um modelo para realizar a tarefa.',
          choices: {
            a: '[Davinci] - Melhores respostas longas, mas requer mais tempo para gerar.',
            b: '[Curie] - Respostas boas, mas requer mais tempo para gerar.',
            c: '[Babbage] - Melhor modelo para chatbot, respostas curtas e simples.',
          }
        },
        b: {
          name: 'entrada',
          description: 'Mensagem que será enviada para a IA.'
        }
      }
    },
    texts: {
      awaiting: 'Um texto está sendo gerado com o título `{{input}}`.',
      errorModel: 'Você inseriu um modelo inválido, o que causou um erro.',
      completed: '**Entrada:** `{{input}}`\n**Modelo:** `{{model}}`\n```\n{{response}}\n```',
      catchMessage: 'Ocorreu um erro que impediu a conclusão do comando.'
    }
  }
}
