export default {
  ia: {
    slashBuilder: {
      name: 'ia',
      description: 'Artificial Intelligence'
    },
    texts: {
      commandNotFound: 'Could not find that command.',
      catchMessage: 'An error occurred that prevented the command from completing.'
    }
  },

  language: {
    slashBuilder: {
      name: 'language',
      description: 'Change the language of my commands for the server.'
    },
    texts: {
      rowPlaceholder: 'Languages',
      optionEn_US: 'English',
      optionEs_ES: 'Spanish',
      optionJa: 'Japanese',
      optionPt_BR: 'Portuguese, Brazil',
      optionPt_IN: 'Portuguese, Brazil (Informal)',
      message: '**Current language:** `{{lang}}`\n**Choose a language from the list to be the new default language:**',
      altered: '**Language changed to `{{lang}}`.**',
      canceled: 'The request was canceled because it exceeded the time limit.'
    }
  },

  //subCommands
  iaImage: {
    slashBuilder: {
      name: 'image',
      description: 'Generate a response in image format.',
      options: {
        a: {
          name: 'input',
          description: 'The AI will try to generate an image with this input.'
        },
        b: {
          name: 'size',
          description: 'Size of the image to be generated:'
        }
      }
    },
    texts: {
      awaiting: 'An image is being generated with the title `{{input}}`.',
      attachmentDescription: 'Artificially generated image.',
      completed: '**Input:** `{{input}}`',
      catchMessage: 'An error occurred that prevented the command from completing.'
    }
  },

  iaText: {
    slashBuilder: {
      name: 'text',
      description: 'Generate a response in text format',
      options: {
        a: {
          name: 'model',
          description: 'Choose a model to perform the task.',
          choices: {
            a: '[Davinci] - Best long responses, but takes more time to generate.',
            b: '[Curie] - Good responses, but takes more time to generate.',
            c: '[Babbage] - Best model for chatbot, short and simple responses.',
          }
        },
        b: {
          name: 'input',
          description: 'Message that will be sent to the AI.'
        }
      }
    },
    texts: {
      awaiting: 'A text is being generated with the title `{{input}}`.',
      errorModel: 'You entered an invalid model, which caused an error.',
      completed: '**Input:** `{{input}}`\n**Model:** `{{model}}`\n```\n{{response}}\n```',
      catchMessage: 'An error occurred that prevented the command from completing.'
    }
  }
}