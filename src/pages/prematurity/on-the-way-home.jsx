import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import CorrectedAgeCalculator from '../../components/CorrectedAgeCalculator';
import { Link } from 'gatsby';
import './prematurity.scss';

export default function OnTheWayHome() {
  return (
    <Layout coverTitle="בדרך הביתה">
      <div className="page-container">
        <div className="main-content">
          <div className="sub-title">
            הדרכה להורים לתינוקות המשתחררים מהפגייה
          </div>
          <p>הורים יקרים,</p>
          <p>
            בשעה טובה תינוקכם משתחרר מהפגייה. בדף זה תמצאו דגשים שיסייעו לכם
            לטפל בו בבית ולתמוך בהתפתחותו.
          </p>
          <p>
            תינוקכם נולד טרם זמנו, כך שייתכן שחלק ממערכות החישה והתנועה שלו אינן
            בשלות כמו אצל תינוק הנולד בזמן.
          </p>
          <p>אנשי המקצוע מציינים שני גילים לתינוקכם:</p>
          <ul>
            <li>
              גיל כרונולוגי: המתייחס לתאריך בו נולד ילדכם - לגיל זה נתייחס בפן
              הרפואי לדוגמה, מתן חיסונים.
            </li>
            <li>
              גיל מתוקן: המציין את התיקון של גילו לו היה נולד במועד - לגיל זה
              נתייחס בפן ההתפתחותי ובאכילה (התחלת מוצקים, למשל).
            </li>
          </ul>
          <p>
            כאשר אתם מעיינים בטבלאות התפתחות, בדקו את התפתחות תינוקכם על פי גילו
            המתוקן, עד גיל שנתיים. שימו לב שלתינוקות שנולדו טרם זמנם קיים טווח
            התפתחות רחב יותר.
          </p>
          <CorrectedAgeCalculator />
          <p className="paragraph-title">התפתחות משחק ולמידה</p>
          <p>
            העובר ברחם נמצא בסביבה אופטימלית ומווסתת גירויים. התינוק יוצא לעולם
            לסביבה מלאת גירויים חושיים בעוצמות שונות. תינוקכם חוקר את הסביבה
            החדשה שהגיע אליה והוא יעשה זאת במנחים שונים (על הבטן, על הגב)
            ובדרכים שונות (דרך הפה, דרך הידיים).
          </p>
          <p>
            עודדו את תינוקכם למקד מבט בגירוי ספציפי, התחילו בפנים שלכם ובהמשך
            עברו למשחק. התחילו מקו האמצע, התקרבו אל פניו של התינוק אט אט והחלו
            לנוע באיטיות לאחד הצדדים. עודדו את התינוק לעקוב אחר פניכם לשני
            הצדדים ובהמשך, גם לעקוב בצורה מלאה בכל הטווח.
          </p>
          <p>
            החל מגיל חודש-חודש וחצי מתוקן, בהתאם לסימני ההתעניינות של התינוק,
            ניתן לחשוף אותו למשחקים בהדרגה.
          </p>
          <p>
            לדרך שבה אתם אוחזים בתינוק, מטפלים בו, משוחחים ומשחקים עמו ישנה
            השפעה רבה על התפתחותו וגדילתו. צרו קשר עין עם תינוקכם, חייכו אליו
            ודברו איתו בזמן שאתם מטפלים בו. כשיגדל מעט ויתחיל להפיק קולות, הגיבו
            אליו בחזרה וחכו מעט ש"יענה" לכם, ליצירת שיחה. מחקרים התפתחותיים מצאו
            כי הדיבור המכוון לתינוקות הוא גורם משמעותי ביותר בהתפתחותם השכלית.
          </p>
          <p className="paragraph-title">זמן שינה</p>
          <p>
            השינה חשובה מאוד להתפתחות השכלית והרגשית של תינוקכם. מומלץ לא להעיר
            תינוק משנתו, אלא אם התקבלה הנחייה רפואית אחרת. השינה המומלצת היא
            בחדר עם אור עמום, שקט, ובטמפרטורה נוחה בין 24-22 מעלות. השכיבה
            המומלצת על ידי משרד הבריאות בזמן השינה היא על הגב, עד שתינוקכם יתהפך
            באופן עצמאי.
          </p>
          <p>
            תחת השגחה ניתן לתחום את אזור השינה של התינוק על ידי "נחשוש", בדומה
            לקן הפגייה. מומלץ לשנות מידי פעם את כיוון השינה של התינוק בעריסה
            (פעם הראש פונה למראשות העריסה ופעם למרגלותיה) – לעידוד סימטריה
            בתנועות הצוואר. השתמשו במזרן קשיח, ללא כריות שינה או משחקים בקרבת
            התינוק.
          </p>

          <p className="paragraph-title">הרמה ונשיאת התינוק</p>
          <p>
            הרמה - הרימו את תינוקכם דרך הצד כשידיכם תומכות בבתי השחי ובראש
            התינוק. הקפידו להרים את התינוק באיטיות משני הצדדים. <br /> לפני
            ההרמה ניתן להשתהות מספר שניות כשהתינוק על צדו, כדרך להתריע לתינוק על
            התנועה ואף לתת לו הזדמנות להיות שותף פעיל בתנועה. דרך הרמה זו מעודדת
            שימוש בשרירי הגוף, כהכנה לתנועה איכותית בעתיד (גלגול, התיישבות,
            זחילה וכו'). הניחו את התינוק חזרה באיטיות באותו אופן שבו הוא הורם.
          </p>
          <p>
            <strong>נשיאה</strong> – בחודשים הראשונים לחיי התינוק מומלץ לשאת
            אותו על הידיים או במנשא מערסל (ידיים ורגליים אסופות לכיוון מרכז
            הגוף, כפי שמתואר בהמשך) הנותן תמיכה מלאה לצוואר ולגב.
          </p>

          <p className="paragraph-title">החזקת התינוק ומגע</p>
          <p>
            החזקה נכונה מרגיעה ומעניקה שקט לתינוק. החזקת התינוק על הידיים חשובה
            ואיננה פינוק! מגע מטבעו הוא חוויה חיובית, מרגיעה ומנחמת. מגע של
            ההורים, המותאם לצרכי התינוק, חשוב ומשפיע באופן חיובי על מרכיבים
            התפתחותיים, פיזיים, רגשיים ושכליים. ערסלו את תינוקכם כששתי ידיו
            קרובות לבית החזה, רגליו מקופלות מעט בברכיים וראשו במרכז הגוף. כאשר
            ידיו קרובות לפה אנו מאפשרים לו תחושת ביטחון ואפשרות להרגעה עצמית
            בעזרת מציצת הידיים. ניתן לערסל את התינוק גם בזמן משחק, לפני ואחרי
            החלפת חיתול / אמבטיה וכו'. <br /> ניתן וכדאי להמשיך במגע עור לעור
            (ערסול במנח ה"קנגורו") גם בבית.
          </p>

          <p className="paragraph-title">זמן אמבטיה</p>
          <p>
            זמן האמבטיה הוא הזדמנות חושית נהדרת עבור התינוק - סביבה מימית, עוטפת
            וחמימה המזכירה את הסביבה הרחמית. בנוסף, בזמן זה התינוק נע תחת
            התנגדות שונה מאשר באוויר.
          </p>
          <p>
            הפכו את שעת הרחצה היומית לזמן איכות – אל תמהרו, דאגו ליצור קשר עין
            עם התינוק, דברו איתו ושירו לו. תינוק שמראה אי שקט בזמן הכניסה והרחצה
            באמבטיה ניתן לעטוף בחיתול בד, להכניסו עם החיתול ולפתוח את החיתול
            בהדרגה באמבטיה. שימו לב שמיקומכם בזמן הרחצה משתנה כך שהתינוק פעם
            מסתכל ימינה ופעם שמאלה לכיוונכם. ניתן לעשות זאת גם על ידי סיבוב
            התינוק באמבטיה, אם אין מקום. ניתן לנצל את הזמן, לפני או אחרי
            האמבטיה, לעיסוי קצר ונעים של התינוק.
          </p>
          <p className="paragraph-title">האכלה</p>
          <p>
            שימו לב לאותות הרעב והשובע של תינוקכם, אם הוא בוכה או משחרר את
            הבקבוק או השד. מחקרים מראים כי תינוקות שהואכלו לפי דרישה מפתחים
            הרגלי אכילה בריאים יותר. ודאו שנוח לכם, וכי יש לכם תמיכה מלאה בגב,
            משענות לידיים, תמיכה לרגליים (שרפרף או הדום) וכרית תמיכה לתינוק.
            שמרו על מנח מערסל של התינוק, עם תמיכה לכל אורך הגוף (ישבן, גב, עורף)
            – ידיים אסופות למרכז הגוף, שהראש לא יהיה מוטה או מסובב הצידה. בהנקה
            – דאגו שתהיו בטן אל בטן עם התינוק ושהראש לא יהיה מוטה או מסובב. היו
            תמיד בקשב לתינוקכם – אם יש שינוי בצבע פניו, במציצה, בנשימה – ייתכן
            שהוא זקוק להפסקה לצורך הסדרת הנשימה או להוצאת אוויר "גרעפס". בהאכלה
            ובהרמה ל"גרעפס" הקפידו להניח את התינוק כל פעם על כתף / יד אחרת – לעידוד
            סימטריה.
          </p>
          <p className="paragraph-title">משחק ותנועה</p>
          <p>
            המרחק ממנו רואה תינוק שזה עתה נולד הוא 25-20 ס"מ ובהדרגה ילך ויגדל.
            כדאי תחילה להניח צעצוע במרחק זה. צבעים ניגודיים ברורים (כמו שחור /
            לבן / אדום ) יעזרו לתינוק למקד את מבטו באובייקט. בגיל זה נשאף שתנועת
            התינוק תהיה סימטרית ככל הניתן. נעשה זאת על ידי מתן גירויים בצורה
            סימטרית - הניחו את המשחק פעם בצד ימין, פעם בצד שמאל ובמרכז. ישנה
            חשיבות למשחק במנחים שונים ומגוונים.
          </p>

          <p className="paragraph-title">מנחים</p>
          <p>
            <strong>לכל מנח החשיבות שלו:</strong>
            <ul>
              <li>
                <strong>על הגב</strong> – ניתן ליצור קשר עין בקלות ולעודד הושטת
                ידיים וקשר עין - יד.
              </li>
              <li>
                <strong>חצי ישיבה (עם תמיכה מלאה בגב)</strong> – קל ליצור קשר
                עין ולתקשר.
              </li>
              <li>
                <strong>על הבטן</strong> – חיזוק שרירי הצוואר, הגב וחגורת
                הכתפיים.
              </li>
              <li>
                <strong>על הצד</strong> – עוזר לתינוק במציאת קו האמצע. זהו מנח
                מעבר שממנו מתהפכים ומתיישבים.
              </li>
            </ul>
            בכל המנחים, דאגו להציג משחק אחד כל פעם ולא להציף את התינוק בגירויים.
            ניתן להשתמש בצעצועים עם מרקמים שונים בכל פעם. כשהתינוק על הגב מומלץ
            להציג לו צעצוע מעל ידיו, לעידוד הושטת הידיים מעל והצידה (קשר
            עין - יד). ניתן לעשות זאת באמצעות "אוניברסיטה" או טרמפולינה. <br />{' '}
            ממש מרגע הלידה, נעודד את התינוק לשכב על הבטן (בזמן ערות!). מנח זה הוא
            הבסיס לאבני דרך רבות במוטוריקה הגסה כמו זחילה, התיישבות וישיבה.
            בנוסף, מנח זה עוזר לתינוק גם להימנע מהצפה של גירויים חושיים. זכרו
            שעל פי הוראת משרד הבריאות השכבה על הבטן חייבת להיות בהשגחה לשם מניעת
            מוות בעריסה. ישנה חשיבות לתדירות ההשכבה על הבטן ופחות למשך הזמן.
            לכן, אם התינוק מתקשה ובוכה, ניתן להפוך אותו לשכיבה על הגב ולהשכיבו
            על הבטן כעבור זמן כשהוא נרגע. ככל שנצליח ליצור חוויה טובה, כך גם
            התינוק יתייחס לכך באופן חיובי, ולאט לאט, משך הזמן שבו הוא ישהה על
            בטנו ילך ויתארך. יש למה לצפות!
            <br />
            <br />
            <strong>
              ניתן להקל על התינוק המתקשה לשכב על הבטן על ידי השכבה על הבטן
              בשיפוע חיובי:
            </strong>
            <ul>
              <li>
                <strong>בטן על בטן ההורה</strong> – כשההורה בשיפוע, נשען על
                כריות / ספה: פני ההורה הן האטרקציה הטובה ביותר, שום צעצוע
                'התפתחותי' לא ישווה לו.
              </li>
              <li>
                <strong>על רגלי ההורים</strong> – זו גם שכיבה על הבטן! הוא מרגיש
                שהוא על הידיים, ואנחנו יודעים שהוא על הבטן.
              </li>
              <li>
                בכל הזדמנות בעגלה כדאי להשכיב את התינוק קודם על הבטן, וכשהוא
                מתעייף, להשכיבו על הגב. בעגלה ניתן ליצור שיפוע חיובי בתחילה.
              </li>
              <li>
                <strong>בשכיבה על הצד</strong> – הקפידו להניח תמיכה מאחורי גב
                התינוק והקפידו שהיד התחתונה אינה "נשארת מאחור" ונושאת משקל.
              </li>
            </ul>
          </p>

          <p className="paragraph-title">שימוש בסל קל</p>
          <p>
            מומלץ להפחית את השימוש בסל קל למינימום הנדרש ולדאוג לתמיכה סביב ראש
            התינוק. בנסיעות ארוכות יש לבצע הפסקות יזומות בנסיעה ולהוציא את התינוק על מנת
            לשנות את תנוחת הגו והראש. מנח הושבה ממושך ותדיר בסל קל אינו מומלץ
            לתינוק קטן, כיוון שבמנח זה עבודת השרירים אינה מאפשרת התפתחות תנועה
            תקינה. כלל זה חל גם לגבי שימוש ממושך בטרמפולינה.
          </p>

          <p><b>אנו מברכים אתכם עם שחרורכם הביתה ומאחלים לכם ולילדכם התפתחות בריאה ורגועה.</b></p>

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
  <Seo title="בדרך הביתה - הדרכה להורים לתינוקות פגים המשתחררים מהפגייה" />
);
