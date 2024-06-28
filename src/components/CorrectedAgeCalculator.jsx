import React, { useState } from 'react';
import {
  differenceInYears,
  differenceInMonths,
  differenceInWeeks,
  differenceInDays,
} from 'date-fns';
import './CorrectedAgeCalculator.scss';

const FULL_TERM_WEEKS = 40;

export default function CorrectedAgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [gestationWeeks, setGestationWeeks] = useState(40);
  const [ageToShow, setAgeToShow] = useState('');

  const calculateAge = (birthDate, gestationWeeks) => {
    const today = new Date(); // Current date
    const birth = new Date(birthDate); // Birth date

    // Calculate differences in years, months, weeks, and days
    let years = differenceInYears(today, birth);
    const birthYear = birth.getFullYear();
    const birthMonth = birth.getMonth();
    let months = differenceInMonths(
      today,
      new Date(birthYear, birthMonth + years * 12)
    );
    let weeks = differenceInWeeks(
      today,
      new Date(birthYear, birthMonth + years * 12 + months, birth.getDate())
    );
    let days = differenceInDays(
      today,
      new Date(
        birthYear,
        birthMonth + years * 12 + months,
        birth.getDate() + weeks * 7
      )
    );

    const prematureWeeks = FULL_TERM_WEEKS - gestationWeeks;

    if (years < 2) {
      const ageInDays = years * 365 + months * 30 + weeks * 7 + days;
      const correctedAgeInDays = ageInDays - prematureWeeks * 7;

      years = Math.floor(correctedAgeInDays / 365);
      months = Math.floor((correctedAgeInDays % 365) / 30);
      weeks = Math.floor(((correctedAgeInDays % 365) % 30) / 7);
      days = ((correctedAgeInDays % 365) % 30) % 7;

      // Adjust for overflow
      if (days >= 7) {
        weeks += Math.floor(days / 7);
        days = days % 7;
      }
      if (weeks >= 4) {
        months += Math.floor(weeks / 4);
        weeks = weeks % 4;
      }
      if (months >= 12) {
        years += Math.floor(months / 12);
        months = months % 12;
      }
    }

    let ageString = '';
    if (years > 0) ageString += `${years} year${years > 1 ? 's' : ''}, `;
    if (months > 0) ageString += `${months} month${months > 1 ? 's' : ''}, `;
    if (weeks > 0) ageString += `${weeks} week${weeks > 1 ? 's' : ''}, `;
    if (days > 0) ageString += `${days} day${days > 1 ? 's' : ''}`;

    ageString = ageString.trim();
    if (ageString.endsWith(',')) {
      ageString = ageString.slice(0, -1);
    }

    setAgeToShow(ageString);
  };

  return (
    <div className="corrected-age-calculator">
      <h1>חישוב גיל מתוקן</h1>
      <div className="form">
        <div className="form-row">
          <label htmlFor="birthDate">תינוקכם נולד בתאריך:</label>
          <input
            id="birthDate"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="gestation-week">בשבוע מס׳ x להריון:</label>
          <input
            id="gestation-week"
            type="number"
            min={0}
            max={40}
            value={gestationWeeks}
            onChange={(e) =>
              setGestationWeeks(e.target.value ? parseInt(e.target.value) : '')
            }
          />
        </div>
        <button
          onClick={() => {
            calculateAge(birthDate, gestationWeeks);
          }}
        >
          חשב גיל מתוקן
        </button>
        <div className="result">
          <p>גיל מתוקן</p>
          <p style={{ direction: 'ltr' }}>{ageToShow}</p>
        </div>
      </div>
    </div>
  );
}
