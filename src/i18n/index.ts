import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';

// Import translations
import ptBRTranslation from './pt_BR.json';
import enUSTranslation from './en_US.json';

const resources = {
  'pt-BR': ptBRTranslation,
  'en-US': enUSTranslation,
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb): unknown => cb(getLocales()[0].languageTag),
  init: (): void => {},
  cacheUserLanguage: (): void => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'pt-BR',
    keySeparator: '.',
    debug: __DEV__,
    ns: ['common'],
    cache: {
      enabled: false,
    },
  });

export default i18n;
