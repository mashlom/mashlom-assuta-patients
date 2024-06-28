import React, { createContext, useContext, useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import translations from '../locales/i18n-translations.json';
import { defaultLanguage } from '../common/helpers/languages';

export const IntlContext = createContext();

const IntlContextProvider = ({ children, language, messages }) => {
  const [locale, setLocale] = useState(language|| defaultLanguage);
  const [localeMessages, setLocaleMessages] = useState(messages || translations[defaultLanguage]);
  
  const isHebrew = locale === 'he';

  useEffect(() => {
    setLocaleMessages(translations[locale]);
  }, [locale]);

  return (
    <IntlContext.Provider value={{ locale, setLocale, isHebrew }}>
      <IntlProvider locale={locale} messages={localeMessages}>
        {children}
      </IntlProvider>
    </IntlContext.Provider>
  );
};

export default IntlContextProvider;

export const useIntlContext = () => {
  const context = useContext(IntlContext);
  if (!context) {
    return {
      isHebrew: true,
      locale: defaultLanguage,
      setLocale: () => {},
    };
  }
  return context;
};