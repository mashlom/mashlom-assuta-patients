import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { Link } from 'gatsby';
import './prematurity.scss';

export default function ParentalGuidancePreventFalls() {
  return (
    <Layout coverTitle="הדרכת הורים">
      <div className="page-container">
        <div className="main-content">
          <div className="sub-title"> מניעת נפילות</div>
          <p>הורים יקרים,</p>
          <p>
            חשוב לנו שהשהייה בפגייה תהיה בטוחה, לכן אנו מבקשים לשמור על הכללים
            הבאים כדי למזער את מקרי נפילות היילודים:
          </p>
          <ul className="numbered-list">
            <li>
              הוצאה והחזרה של יילוד מהאינקובטור תיעשה בעזרת אחות או איש צוות
              נוסף. אין להוציא את היילוד מהאינקובטור באופן עצמאי.
            </li>
            <li>הוצאת יילוד מהעריסה רק באישור אחות.</li>
            <li>יש להקפיד על נעילת גלגלי העריסה והאינקובטור כל הזמן.</li>
            <li>
              בהרגשת עייפות או חולשה יש להחזיר את היילוד לעריסה / אינקובטור
              בעזרת אחות.
            </li>
            <li>יש לסגור את דלתות ודפנות האינקובטור.</li>
            <li>שמרו על סביבה מאורגנת ונקייה מחפצים מיותרים.</li>
            <li>
              ידעו את הצוות על נוזל שנשפך על הרצפה. אין ללכת עם היילוד על רצפה
              רטובה.
            </li>
            <li>חשוב להיות ערניים לצינורות ולכבלים של מכשור.</li>
            <li>שקילת היילוד רק בהשגחת איש צוות פגייה.</li>
            <li>אין להשאיר את היילוד ללא השגחה על משטח גבוה.</li>
            <li>רחצת היילוד תיעשה רק לאחר הדרכה ובהשגחת אחות פגייה.</li>
            <li>
              אין לדבר בטלפון הנייד במהלך הטיפול ביילוד ובמהלך שהותכם בחדרי
              הטיפול.
            </li>
          </ul>

          <div className="back-to-home-container">
            <Link to="/prematurity" className="back-to-home-button">
              חזרה לדף הבית
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const Head = () => (
  <Seo title="הדרכת הורים - מניעת נפילות - אסותא אשדוד" />
);
