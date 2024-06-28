import React from 'react';
import Image from '../components/Image';
import { FormattedMessage } from 'react-intl';
import './Footer.scss';

const Footer = () => (
  <footer className="page-footer">
    <div className="footer-top">
      <nav style={{ marginRight: '20px' }}>
        <ul className="footer-ul">
          <li className="footer-copy-write">
            <a
              className="fmenu-big-link"
              aria-label="Assuta Ashdod"
              href="https://www.assutaashdod.co.il/"
              target="_self"
            >
              <FormattedMessage id="footer_copy_right"
                defaultMessage="© {year} Assuta Ashdod" 
                values={{ year: new Date().getFullYear() }}
              />
            </a>
          </li>
          <li className="hide-on-mobile">
            <a
              className="fmenu-big-link"
              aria-label="about"
              href="https://www.assutaashdod.co.il/en/?catid=%7BEE360582-387D-4CE7-9105-BDEF14D4A4DA%7D"
              target="_self"
            >
              <FormattedMessage id="footer_about" />
            </a>
          </li>
          <li className="hide-on-mobile">
            <a
              className="fmenu-big-link"
              aria-label="public inquiries"
              href="https://www.assutaashdod.co.il/en/public_inquiries/"
              target="_self"
            >
              <FormattedMessage id="footer_public_inquiries" />
            </a>
          </li>
          <li className="hide-on-mobile">
            <a
              className="fmenu-big-link"
              aria-label="accessibility"
              href="https://www.assutaashdod.co.il/en/?catid=%7B0CFCB0BD-DF84-412A-AEA5-ED6C957733F4%7D"
              target="_self"
            >
              <FormattedMessage id="footer_accessibility" />
            </a>
          </li>
        </ul>
      </nav>
      <nav
        style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '20px' }}
      >
        <ul className="footer-ul">
          <li>
            <Image
              src="assuta/human-exp-logo-gray.png"
              alt="human experience logo"
              className="footer-image-size"
              style={{ marginLeft: '20px' }}
            />
          </li>
          <li>
            <a href="https://www.mashlom.me">
              <Image
                src="mashlom/FullLogo_Transparent_NoBuffer.png"
                alt="mashlom.me"
                className="footer-image-size"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
