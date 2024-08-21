import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Cover from './Cover';
import useBodyDirection from '../hooks/useBodyDirection';
import './Layout.scss';
import { useEffect } from 'react';

const Layout = ({
  children,
  includeCover = true,
  coverTitle,
  isShowLangSwitcher,
}) => {

  useEffect(() => {
    const scriptId = 'nagishli-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "/nagishli.js?v=2.3";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useBodyDirection();
  return (
    <div>
      <Header isShowLangSwitcher={isShowLangSwitcher} />
      <main>
        {includeCover && <Cover title={coverTitle} />}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
