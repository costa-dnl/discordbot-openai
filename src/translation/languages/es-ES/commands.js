export default {
  ia: {
    slashBuilder: {
      name: 'ia',
      description: 'Inteligencia Artificial'
    },
    texts: {
      commandNotFound: 'No se pudo encontrar ese comando.',
      catchMessage: 'Se produjo un error que impidió la finalización del comando.'
    }
  },

  language: {
    slashBuilder: {
      name: 'idioma',
      description: 'Cambiar el idioma de mis comandos para el servidor.'
    },
    texts: {
      rowPlaceholder: 'Idiomas',
      optionEn_US: 'Inglés',
      optionEs_ES: 'Español',
      optionJa: 'Japonés',
      optionPt_BR: 'Portugués, Brasil',
      optionPt_IN: 'Portugués, Brasil (Informal)',
      message: '**Idioma actual:** `{{lang}}`\n**Elige un idioma de la lista para ser el nuevo idioma predeterminado:**',
      altered: '**Idioma cambiado a `{{lang}}`.**',
      canceled: 'La solicitud se canceló porque excedió el límite de tiempo.'
    }
  },

  //subCommands
  iaImage: {
    slashBuilder: {
      name: 'imagen',
      description: 'Generar una respuesta en formato de imagen.',
      options: {
        a: {
          name: 'entrada',
          description: 'La IA intentará generar una imagen con esta entrada.'
        },
        b: {
          name: 'tamaño',
          description: 'Tamaño de la imagen a generar:'
        }
      }
    },
    texts: {
      awaiting: 'Se está generando una imagen con el título `{{input}}`.',
      attachmentDescription: 'Imagen generada artificialmente.',
      completed: '**Entrada:** `{{input}}`',
      catchMessage: 'Se produjo un error que impidió la finalización del comando.'
    }
  },

  iaText: {
    slashBuilder: {
      name: 'texto',
      description: 'Generar una respuesta en formato de texto',
      options: {
        a: {
          name: 'modelo',
          description: 'Elige un modelo para realizar la tarea.',
          choices: {
            a: '[Davinci] - Mejores respuestas largas, pero requiere más tiempo para generar.',
            b: '[Curie] - Buenas respuestas, pero requiere más tiempo para generar.',
            c: '[Babbage] - Mejor modelo para chatbot, respuestas cortas y simples.',
          }
        },
        b: {
          name: 'entrada',
          description: 'Mensaje que se enviará a la IA.'
        }
      }
    },
    texts: {
      awaiting: 'Se está generando un texto con el título `{{input}}`.',
      errorModel: 'You entered an invalid model, which caused an error.',
      completed: '**Entrada:** `{{input}}`\n**Modelo:** `{{model}}`\n```\n{{response}}\n```',
      catchMessage: 'Se produjo un error que impidió la finalización del comando.'
    }
  }
}
