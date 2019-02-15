import { L10nConfig, ProviderType } from 'angular-l10n';

export const l10nConfig: L10nConfig = {

  locale: {
    languages: [
      { code: 'fr', dir: 'ltr' },
      { code: 'en', dir: 'ltr' }
    ],
    language: 'fr'
  },
  translation: {
    providers: [
      {
        type: ProviderType.Static,
        prefix: './assets/locale-'
      }
    ],
    missingValue: "Cette traduction n'existe pas"
  }

}