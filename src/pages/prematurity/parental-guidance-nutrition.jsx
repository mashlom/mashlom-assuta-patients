import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { Link } from 'gatsby';
import './prematurity.scss';

export default function NutritionalGuidancePreRelease() {
  return (
    <Layout coverTitle="לקראת שחרור">
      <div className="page-container">
        <div className="main-content">
          <div className="sub-title">הדרכה תזונתית לקראת שחרור מהפגייה</div>
          <p>הורים יקרים,</p>
          <p>
            מזל טוב לקראת השחרור הביתה. בדף הדרכה זה ריכזנו מידע העונה על
            שאלות נפוצות בהזנה של תינוקות פגים לאחר השחרור מהפגייה.
          </p>

          <p className="paragraph-title">מהי התזונה המומלצת לתינוקות?</p>
          <p>
            התזונה הטובה והמומלצת ביותר עבור רוב התינוקות היא חלב אם. לכן נמליץ
            על המשך מתן חלב אם כל עוד זה מתאים לאם ולתינוק.
          </p>

          <p className="paragraph-title">מה כמות ארוחות ההנקה המותרות?</p>
          <p>
            אימהות מיניקות ואימהות ששואבות חלב אם יקבלו הדרכת הנקה לפני השחרור
            הביתה. ההדרכה תינתן ע"י אחות יועצת הנקה.
          </p>

          <p className="paragraph-title">
            אם נותנים תרכובת מזון לתינוקות  (תמ"ל), איזה סוג לתת?
          </p>
          <p>
            סוג התמ"ל ייקבע עבור כל תינוק ע"י הרופא ויפורט במכתב השחרור.
            <br /> ניתן לחלק את התמ"לים ל-3 קבוצות עיקריות:
          </p>
          <ul className="numbered-list">
            <li>
              תמ"ל ילודים רגיל שלב 1 של אחת מחברות התמ"לים (החברות המוכרות
              ביותר: מטרנה, סימילאק ונוטרילון).
            </li>
            <li>
              תמ"ל המשך לפגים. תמ"לים אלה עשירים ברכיבים תזונתיים כגון: אנרגיה,
              חלבון, ויטמינים ומינרלים. התמ"לים מותאמים לדרישות התזונתיות המוגברות של
              הפגים.
            </li>
            <li>תמ"לים מיוחדים עפ"י התוויה רפואית.</li>
          </ul>

          <p className="paragraph-title">
            אילו סוגים של תמ"ל המשך לפגים קיימים?
          </p>
          <p>מטרנה סנסיטיב, סימילאק גולד נאושור, נוטרילון המשך לפגים</p>

          <p className="paragraph-title">מתי נותנים תמ"ל המשך לפגים?</p>
          <p>
            ההמלצה למתן תמ"ל המשך לפגים מתבססת על הערכה תזונתית שנעשית לפני
            השחרור ע"י דיאטנית ורופא הפגייה ונקבעת כהמלצה הרפואית לאחר השחרור.
          </p>

          <p className="paragraph-title">עד מתי לתת תמ"ל המשך לפגים?</p>
          <p>משך התזונה ייקבע לפי:</p>
          <ul className="numbered-list">
            <li>מעקב הגדילה בטיפת חלב.</li>
            <li>הערכה של דיאטנית פגים בקופת החולים והמלצתה.</li>
          </ul>

          <p className="paragraph-title">האם מותר לשנות סוג תמ"ל?</p>
          <p>
            מומלץ להימנע משינויים תכופים בתמ"ל. לפני כל שינוי רצוי להתייעץ עם
            רופא הילדים ועם הדיאטנית.
            <br /> אם נעשה שינוי יש לתת לתינוק תקופת הסתגלות של שבוע עד 10 ימים
            לפחות לתמ"ל החדש.
          </p>

          <p className="paragraph-title">איך אדע שהתינוק שלי אוכל מספיק?</p>
          <p>
            אם התינוק שלכם רגוע בסיום הארוחה, אוכל כל 4-3 שעות לפי סימני רעב
            (בהנקה תיתכן תדירות ארוחות גדולה יותר) ועולה במשקל בקצב גדילה תקין
            סימן שהוא אוכל כמות המותאמת לדרישותיו. בכל שאלה ניתן לפנות אל הצוות
            המטפל.
          </p>
          <p className="paragraph-title">המשך מעקב</p>
          <p>
            המשך מעקב הגדילה לאחר השחרור מהפגייה יהיה במסגרת טיפת חלב. <br/>אחיות
            טיפת חלב יאמדו את הגדילה לפי עקומות הגדילה וקצב הגדילה המתאים לגילו
            המתוקן של הפג.<br/> אם הדבר יידרש תפנה האחות לרופא ולדיאטנית בקופת
            החולים.<br/> לכן הורים יקרים חשוב מאוד שתגיעו למעקב בטיפת חלב ותשתפו את
            צוות טיפת חלב בכל התלבטות.
          </p>

          <br/>
        <p>בכל שאלה ניתן לפנות אל הצוות המטפל.</p>
        <p>בברכת בריאות איתנה.</p>
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

export const Head = () => <Seo title="הדרכה תזונתית לקראת שחרור מהפגייה" />;
