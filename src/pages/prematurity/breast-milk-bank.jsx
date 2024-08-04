import * as React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { Link } from 'gatsby';
import PdfLink from '../../components/PdfLink';
import './prematurity.scss';

export default function BreastMilkBank() {
  return (
    <Layout coverTitle="חלב אם">
      <div className="page-container">
        <div className="main-content">
          <div className="sub-title">חלב אם מבנק חלב אם</div>        
          <p>
            הנקה הינו אופן ההזנה המומלץ לתינוקות ומוכרת ע"י ארגוני בריאות ורפואה
            בארץ ובעולם כסוגיה בבריאות הציבור ולא רק כבחירה של סגנון חיים. להזנה
            בחלב אם עד גיל שנה ואף יותר מכך יש השפעה על
            הורדת תחלואה ותמותה בטווח הקרוב והרחוק בקרב פגים וילודים חולים.
          </p>

          <p>
            הנקה ישירה ולפי דרישה לעתים אינה אפשרית בתקופה ראשונה לפגים
            וילודים חולים וחלב אם הינו אפשרות ההזנה המומלצת.
          </p>

          <p>
            חלב אם שנשאב משד אימו של התינוק הוא ההזנה המתאימה ביותר לכל הילודים,
            כולל פגים. לכן יש להשקיע כל מאמץ ותמיכה לאם השואבת. שאיבה של האם
            בצורה נכונה תאפשר ביסוס ושימור תפוקת חלב לאורך תקופה ארוכה.
          </p>

          <p>
            ככל שהתינוק צורך יותר חלב אימו, שיעורי התחלואה בדלקת נמקית של המעי
            (NEC), אלח דם מאוחר (LOS), מחלת ריאות כרונית (BPD) ורטינופטיה של
            פגות (ROP), נמוכים יותר ומשך האשפוז בפגייה קצר יותר. בנוסף, צריכת
            חלב אם של התינוק קשורה בתוצאות נוירו-התפתחותיות טובות יותר בהמשך
            החיים.
          </p>

          <p>
            רוב התינוקות שנולדו במשקל לידה נמוך מאוד (מתחת ל-1500 גרם) זקוקים
            לתוספות לחלב אם של התינוק. גורמים מוסמכים, כמו ארגון הבריאות העולמי
            (WHO), האקדמיה האמריקאית לרפואת ילדים (AAP) וועדת התזונה של החברה
            האירופאית לגסטרואנטרולוגיה, רפואת כבד ותזונה בילדים (ESPGHAN) הצהירו
            שחלב אם מתורמת צריך להיות הבחירה המועדפת כתוספת לחלב אם של התינוק
            (כשזה איננו זמין או מספיק) בפגים שנולדו במשקל &lt; 1500 גרם ו/או
            בשבוע היריון &lt; 32, במיוחד בתת- הקבוצה של פגים שנולדו במשקל &lt;
            1000 גרם ו/או בשבוע היריון &lt; 28.
          </p>

          <p>
            לכן כאשר יש צורך לתסף את חלב אם של התינוק, ההמלצה היא חלב אם מתורמת
            מבנק חלב אם מוכר העומד בדרישות בינלאומיות ורק בהעדרו, ניתן לתת תמ"ל (תרכובת
            מזון לתינוקות, פורמולה) פגים.
          </p>

          <p>
            לאור הבנת יתרונות חלב אם, כטיפול בחירה בפגים, הוקמו ברוב הארצות
            המפותחות בנקי חלב אם במטרה להוות גשר עד ביסוס נפחי חלב אם לכמויות
            הנדרשות להזנת תינוקה.
          </p>

          <p>
            לאחרונה נפתח בנק חלב אם בישראל בניהולו ופיקוחו של מד"א, העומד
            בסטנדרטים המחמירים ביותר הקיימים בבנקי חלב אם בעולם.
          </p>

          <p>
            תורמות חלב אם עומדות בתנאים מיוחדים המבטיחים את כשירותן לשמש כתורמות
            חלב.
          </p>

          <p>
            מבחינה הלכתית, רב בית החולים יעקב קיהן מציין שאין איסור הלכתי
            להזנת תינוק בחלב אם מתורמת, בין אם יהודיה ובין אם לאו
             (ראה נספח <PdfLink fileName='milk_donation_rav_letter' text='כתב הלכה'/>).
          </p>

          <p>בכל שאלה ניתן לפנות אל הצוות המטפל.</p>

          <p>בברכת בריאות, צוות הפגייה.</p>

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
  <Seo title="דף מידע להורים בנושא חלב אם מבנק חלב אם" />
);
