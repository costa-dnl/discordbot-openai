export default {
  ia: {
    slashBuilder: {
      name: 'ia',
      description: '人工知能'
    },
    texts: {
      commandNotFound: 'このコマンドが見つかりませんでした。',
      catchMessage: 'コマンドの完了を妨げるエラーが発生しました。'
    }
  },

  language: {
    slashBuilder: {
      name: '言語',
      description: 'サーバーのコマンド言語を変更する。'
    },
    texts: {
      rowPlaceholder: '言語',
      optionEn_US: '英語',
      optionEs_ES: 'スペイン語',
      optionJa: '日本語',
      optionPt_BR: 'ポルトガル語、ブラジル',
      optionPt_IN: 'ポルトガル語、ブラジル（くだけた言い方）',
      message: '**現在の言語:** `{{lang}}`\n**新しいデフォルト言語をリストから選択してください:**',
      altered: '**言語が `{{lang}}` に変更されました。**',
      canceled: 'リクエストはタイムアウトによりキャンセルされました。'
    }
  },
  
  //subCommands
  iaImage: {
    slashBuilder: {
      name: '画像',
      description: '画像形式の応答を生成します。',
      options: {
        a: {
          name: '入力',
          description: 'IAがこの入力で画像を生成しようとします。'
        },
        b: {
          name: 'サイズ',
          description: '生成される画像のサイズ:'
        }
      }
    },
    texts: {
      awaiting: '`{{input}}`のタイトルで画像が生成されています。',
      attachmentDescription: '人工的に生成された画像。',
      completed: '**入力:** `{{input}}`',
      catchMessage: 'コマンドの完了を妨げるエラーが発生しました。'
    }
  },

  iaText: {
    slashBuilder: {
      name: 'テキスト',
      description: 'テキスト形式の応答を生成します。',
      options: {
        a: {
          name: 'モデル',
          description: 'タスクを実行するモデルを選択してください。',
          choices: {
            a: '[Davinci] - 最高の長い回答ですが、生成には時間がかかります。',
            b: '[Curie] - 良い回答ですが、生成には時間がかかります。',
            c: '[Babbage] - チャットボットに最適なモデルで、短く単純な回答が生成されます。',
          }
        },
        b: {
          name: '入力',
          description: 'IAに送信するメッセージ。'
        }
      }
    },
    texts: {
      awaiting: '`{{input}}`のタイトルでテキストが生成されています。',
      errorModel: '無効なモデルを入力したため、エラーが発生しました。',
      completed: '**入力:** `{{input}}`\n**モデル:** `{{model}}`\n```\n{{response}}\n```',
      catchMessage: 'コマンドの完了を妨げるエラーが発生しました。'
    },
  }
}
