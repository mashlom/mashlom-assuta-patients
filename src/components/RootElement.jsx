import React from 'react';
import IntlContextProvider from '../context/IntlContext';

const RootElement = ({ children, pageContext } ) => {
  return <IntlContextProvider language={pageContext?.language} messages={pageContext?.messages}>{children}</IntlContextProvider>;
};

export default RootElement;
