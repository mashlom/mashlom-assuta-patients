import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import Image from './Image';
import UriLink, { UriTypes } from './UriLink';
import LanguageSwitcher from './LanguageSwitcher';
import { FormattedMessage } from 'react-intl';
import { useIntlContext } from '../context/IntlContext';
import './Header.scss';

const Header = ({ isShowLangSwitcher }) => {
  const { isHebrew } = useIntlContext();
  return (
    <header className="page-header">
      <div className="header-main-section">
        <Link className="logo" to="/" title="Assuta Ashdod">
          <Image
            src={isHebrew ? 'assuta_logo.svg' : 'assuta_logo_en.png'}
            alt="Assuta Ashdod"
            width="300px"
          />
        </Link>
        <div className={classNames('header-contact', {
                'is-eng': !isHebrew,
            })}>
          <span className="assuta-call-text">
            <FormattedMessage id="header_hostiptal_phone_title" />
            <UriLink
              uriType={UriTypes.TEL}
              link="*8480"
              text="8480*"
              className="assuta-call-phone"
            />
          </span>
          <span className="assuta-call-text">
          <FormattedMessage id="header_info_phone_title" />
            <UriLink
              uriType={UriTypes.TEL}
              link="08-3004100"
              className="assuta-call-phone"
            />
          </span>
        </div>
      </div>
      <LanguageSwitcher isShow={isShowLangSwitcher} />
    </header>
  );
};

export default Header;
