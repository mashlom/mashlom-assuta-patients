import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Cover from './Cover';
import useBodyDirection from '../hooks/useBodyDirection';
import './Layout.scss';

const Layout = ({
  children,
  includeCover = true,
  coverTitle,
  isShowLangSwitcher,
}) => {
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
