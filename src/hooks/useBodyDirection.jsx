import { useEffect } from 'react';
import { useIntlContext } from '../context/IntlContext';

const useBodyDirection = () => {
  const { locale: currentLanguage } = useIntlContext();
  useEffect(() => {
    document.body.style.direction = currentLanguage === 'he' ? 'rtl' : 'ltr';
  }, [currentLanguage]);
};

export default useBodyDirection;
