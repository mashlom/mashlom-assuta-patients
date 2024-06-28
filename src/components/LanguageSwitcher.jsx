import _ from 'lodash';
import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { languages } from '../common/helpers/languages';
import { changePathLanguage, getCurrentPathLanguage } from '../common/helpers/utils';
import { useIntlContext } from '../context/IntlContext';

const LanguageSwitcher = ({ isShow = false }) => {
  const { locale, setLocale } = useIntlContext();
  useEffect(() => {
    const langParam = getCurrentPathLanguage();
    if (langParam && languages.includes(langParam)) {
      setLocale(langParam);
    }
  });

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    if (newLang) {
      const newUrl = changePathLanguage(newLang);
      navigate(newUrl, { replace: true });
    }
  };

  return (
    <nav style={{ display: isShow ? 'block' : 'none', marginLeft:'20px' }}>
      <select
        id="language-select"
        value={locale}
        onChange={handleLanguageChange}
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {_.capitalize(lang)}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default LanguageSwitcher;
