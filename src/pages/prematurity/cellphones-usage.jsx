import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { Link } from 'gatsby';
import './prematurity.scss';

export default function CellphonesUsage() {
  return (
    <Layout coverTitle="">
      <div className="page-container">
        <div className="main-content">
          <div className="sub-title">
            הנחיות לשימוש בטלפונים סלולריים בפגייה
          </div>
          <p>אנשי צוות ובני משפחה יקרים,</p>
          <p>
            על מנת לשמור על בריאותכם ועל בטיחותם של היילודים הנמצאים בפגייה, אנא
            שמרו על הכללים הבאים:
          </p>
          <ul>
            <li>
              בכניסה למחלקה יש לחטא את המכשיר הסלולרי עם מטלית חיטוי או פד גזה
              לח עם ספטול לפני שטיפת הידיים.
            </li>
            <li>לאחר השימוש בטלפון הסלולרי, אנא חטאו את הידיים.</li>
            <li>
              לפי המלצה של משרד הבריאות יש לצמצם ככל הניתן את כמות ומשך השיחות
              בטלפון סלולרי כדי להקטין את החשיפה לקרינה הנפלטת מטלפונים
              סלולריים.
            </li>
            <li>מומלץ לצאת מהמחלקה לביצוע שיחה סלולרית ארוכה.</li>
            <li>
              יש להתרחק ככל הניתן מהמטופלים, השימוש בסלולרי בבית חולים אמנם לא
              מסכן את תקינות הציוד הרפואי, אך מומלץ להימנע משימוש בו בקרבה
              מיידית של 50-30 ס"מ מהמטופלים.
            </li>
            <li>השימוש בטלפונים סלולריים אסור בעת החזקה וטיפול במטופל.</li>
            <li>
              ניתן להשמיע מוזיקה באינקובטור או בעריסה בחיבור חוטי בין הטלפון
              לרמקול. נא להמנע משימוש בבלוטוס (bluetooth).
            </li>
          </ul>
          <p className="paragraph-title">
            אנא שמרו על בריאותם ועל ביטחונם של הקטנטנים המאושפזים בפגייה !
          </p>
          <p>
            <b>תודה מצוות הפגייה ומהקטנטנים המאושפזים.</b>
          </p>
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
  <Seo title="הנחיות לשימוש בטלפונים סלולריים בפגייה - אסותא אשדוד" />
);
