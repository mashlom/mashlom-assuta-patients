import * as React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'gatsby';
import Seo from '../../components/Seo';
import './prematurity.scss';

const links = [
  {
    title: 'דפי הדרכה בקבלה',
    pages: [
      { text: 'הכרת עולם הפג', url: 'premature-world' },
      {
        text: 'מניעת נפילות',
        url: 'parental-guidance-prevent-falls',
      },
      {
        text: 'הנחיות לשימוש בטלפונים סלולריים בפגייה',
        url: 'cellphones-usage',
      },      
    ],
  },
  {
    title: 'דפי הדרכה באשפוז',
    pages: [
      { text: 'דף מידע להורים - חוסר באנזים G6PD', url: 'G6PD-deficiency' },
      { text: 'דף הסבר להורים - חיסון נגיף RSV', url: 'rsv-vaccine' },
      {
        text: 'דף הסבר להורים - בדיקות עיניים בפגייה',
        url: 'eye-tests',
      },
      { text: 'דף הדרכה – בידוד מגע', url: 'contact-isolation' },
      {
        text: 'דף הדרכה – האכלת פג מבקבוק החל משבוע 34',
        url: 'feeding-bottle-week34',
      },      
      { text: 'דף הדרכה - התפתחות וגדילה', url: 'growth-development' },
      { text: 'הנחיות לרחצת פג', url: 'bathing-premature' },
      {
        text: 'דף הדרכה אכילה מזונדה + בקבוק',
        url: 'tube-bottle-feeding-readiness',
      },
    ],
  },
  {
    title: 'הנקה, בנק חלב אם ושאיבת חלב אם בפגייה',
    pages: [
      {
        text: 'דף הדרכה לשאיבת חלב אם ליולדת בפגייה',
        url: 'breast-milk-pumping-premature',
      },
      { text: 'שאיבת חלב אם', url: 'breast-milk-pumping' },
      { text: 'דף מידע להורים - חלב אם מבנק חלב אם', url: 'breast-milk-bank' },
      { text: 'סחיטת קולוסטרום', url: 'colostrum-extraction' },
      { text: 'דף מידע - הנקה', url: 'breastfeeding-science' },
    ],
  },
  {
    title: 'דפי הדרכה לקראת שחרור',
    pages: [
      { text: 'הדרכת החייאה וחנק', url: 'resuscitation-and-choking' },
      { text: 'המלצות לטיפול בתינוק לאחר השחרור', url: 'recommendations-release' },
      {
        text: 'הדרכת תזונתית לקראת שחרור מהפגייה',
        url: 'parental-guidance-nutrition',
      },
      {
        text: 'פיום קנה טרכאוסטומי בתינוקות - דפי הדרכה להורים',
        url: 'tracheostomy-care',
      },
      { text: 'טעימות ראשונות', url: 'first-tastes' },
      {
        text: 'הדרכת הורים לתינוקות בני חודש עד 3 חודשים',
        url: 'parent-guidance-clinic-1-3',
      },
      {
        text: 'בדרך הביתה – הדרכה לתינוקות המשתחררים מהפגייה',
        url: 'on-the-way-home',
      },
      // {
      //   text: 'הדרכה התפתחותית לקראת שחרור מהפגייה (פגים)',
      //   url: 'developmental-guidance-pre-release',
      // },
      {
        text: 'הדרכה התפתחותית לקראת שחרור מהפגייה (במועד)',
        url: 'developmental-guidance-pre-release-due',
      },
      {
        text: 'הדרכת הורים לתינוקות בני 3-6 חודשים מתוקן (מרפאת פגים)',
        url: 'parent-guidance-clinic-3-6',
      },
    ],
  },
];

export default function PrematurityIndex() {
  return (
    <Layout coverTitle="דפי מידע ליולדת">
      <main className="page-container">
        <section className="main-content">
          {links.map(({ title, pages }, categoryIndex) => (
            <div className="category" key={`category-${categoryIndex}`}>
              <h2 className='index-category-title'>{title}</h2>
              <ul className="bulleted-list">
                {pages.map(({ text, url }, pageIndex) => (
                  <li key={`page-${categoryIndex}-${pageIndex}`}>
                    <Link to={`/prematurity/${url}`} className="custom-link">
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export const Head = () => <Seo title="פגייה" />;
