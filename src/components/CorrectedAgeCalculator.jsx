import React, { useState } from 'react';
import {
  differenceInYears,
  // differenceInMonths,
  // differenceInWeeks,
  differenceInDays,
} from 'date-fns';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import he from 'date-fns/locale/he';
import './CorrectedAgeCalculator.scss';

const FULL_TERM_WEEKS = 40;

function formatCommas(input) {
  // Trim the input string
  let trimmedString = input.trim();

  // Remove the last comma if it exists
  if (trimmedString.endsWith(',')) {
    trimmedString = trimmedString.slice(0, -1);
  }

  // Replace the last occurrence of ", " with "ו-"
  const lastCommaSpaceIndex = trimmedString.lastIndexOf(', ');
  if (lastCommaSpaceIndex !== -1) {
    trimmedString = trimmedString.slice(0, lastCommaSpaceIndex) + ' ו-' + trimmedString.slice(lastCommaSpaceIndex + 2);
  }

  return trimmedString;
}

export default function CorrectedAgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [gestationWeeks, setGestationWeeks] = useState(40);
  const [ageToShow, setAgeToShow] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);

  const calculateAge = (birthDate, gestationWeeks) => {
    const today = new Date(); // Current date
    const birth = new Date(birthDate); // Birth date

    // Calculate differences in years, months, weeks, and days
    let years = differenceInYears(today, birth);
    let weeks;
    // const birthYear = birth.getFullYear();
    // const birthMonth = birth.getMonth();
    // let months = differenceInMonths(
    //   today,
    //   new Date(birthYear, birthMonth + years * 12)
    // );
    // let weeks = differenceInWeeks(
    //   today,
    //   new Date(birthYear, birthMonth + years * 12 + months, birth.getDate())
    // );
    // let days = differenceInDays(
    //   today,
    //   new Date(
    //     birthYear,
    //     birthMonth + years * 12 + months,
    //     birth.getDate() + weeks * 7
    //   )
    let days = differenceInDays(today,birth);

    if (gestationWeeks > 40) gestationWeeks = 40; // [YH] as for birth after week 40, no need to fix the child age
    const prematureWeeks = FULL_TERM_WEEKS - gestationWeeks;
    // [YH] the below updated calculation for 'years' is in order to consider the premature weeks
    // [YH] so if gestationWeeks = 38, the baby will be considered 2 years only after 2 years and 2 weeks
    years = differenceInYears(today, birth.setDate(birth.getDate() + (prematureWeeks * 7)));
    
    if (years < 2) {
      // const ageInDays = years * 365 + months * 30 + weeks * 7 + days;
      // [YH] I replaced the above calculation, from 2 reasons: A) month=30days is wrong assumption. B) as only weeks are required, there is no need to calculate the months 
      const ageInDays = days;
      const correctedAgeInDays = ageInDays - prematureWeeks * 7;

      // years = Math.floor(correctedAgeInDays / 365);
      // months = Math.floor((correctedAgeInDays % 365) / 30);
      // weeks = Math.floor(((correctedAgeInDays % 365) % 30) / 7);
      // days = ((correctedAgeInDays % 365) % 30) % 7;
      // years = 0;
      // months = 0;
      weeks = Math.floor(correctedAgeInDays / 7);
      days = (correctedAgeInDays - (weeks*7));
      if (correctedAgeInDays < 0) days = correctedAgeInDays; // [YH] for getting the "פחות מאפס" output

      // Adjust for overflow        
        // [YH] I'm pretty sure that this 'if' is not needed
      // if (days >= 7) {
      //   weeks += Math.floor(days / 7);
      //   days = days % 7;
      // }
      // if (weeks >= 4) {
      //   months += Math.floor(weeks / 4);
      //   weeks = weeks % 4;
      // }
      // if (months >= 12) {
      //   years += Math.floor(months / 12);
      //   months = months % 12;
      // }
    }

    let ageString = '';
    // if (years > 0) ageString += years == 1 ? 'שנה, ' : years + ' שנים, ';
    // if (months > 0) ageString += months == 1 ? 'חודש, ' : months + ' חודשים, ';
    if (weeks > 0) ageString += weeks == 1 ? 'שבוע, ' : weeks + ' שבועות, ';
    if (days > 0) ageString += days == 1 ? 'יום, ' : days + ' ימים, ';
    if (!ageString && days === 0) ageString = "0 ימים";
    if (!ageString) ageString = "פחות מאפס";
    if (years >= 2) ageString = "שנתיים ומעלה";  // [YH] new entry to avoid redundant caluculation (as above 2 years no special treatment)
    ageString = ageString.trim();
    ageString = formatCommas(ageString);

    setAgeToShow(ageString);
    setIsCalculated(true);
  };

  return (
    <div className="corrected-age-calculator">
      <h1>חישוב גיל מתוקן</h1>
      <div className="form">
        <div className="form-row">
          <label htmlFor="birthDate">תינוקכם נולד בתאריך:</label>
          <DatePicker
          selected={birthDate}
          onChange={(date) => setBirthDate(date)}
          dateFormat="dd/MM/yyyy"
          locale="he"
          placeholderText="dd/mm/yyyy"
          className="rtl-datepicker"
          maxDate={new Date()}
        />

        </div>
        <div className="form-row">
          <label htmlFor="gestation-week">בשבוע הריון:</label>
          <input
            id="gestation-week"
            type="number"
            min={0}
            max={44}
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
        {isCalculated && (
        <div>
          <p >גיל מתוקן: {ageToShow}</p>
        </div>
        )}
      </div>
    </div>
  );
}
