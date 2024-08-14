import React, { useState } from 'react';
import {
  differenceInYears,
  differenceInDays,
} from 'date-fns';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
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
  
  return trimmedString.replace(/ו-יום/g, "ויום");
}

export default function CorrectedAgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [gestationWeeks, setGestationWeeks] = useState(40);
  const [ageToShow, setAgeToShow] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);

  const calculateAge = (birthDate, gestationWeeks) => {
    const today = new Date(); // Current date
    const birth = new Date(birthDate); // Birth date
    
    if (gestationWeeks > 40) gestationWeeks = 40; // for birth after week 40, no need to fix the child age
    const prematureWeeks = FULL_TERM_WEEKS - gestationWeeks;

    // Calculate differences in years and days
    let days = differenceInDays(today,birth);
    let weeks;
    // calculating years considering the premature weeks. placed after days calculation as it change the 'birth' value
    let years = differenceInYears(today, birth.setDate(birth.getDate() + (prematureWeeks * 7))); 
   
    if (years < 2) {
      const ageInDays = days;
      const correctedAgeInDays = ageInDays - prematureWeeks * 7;

      weeks = Math.floor(correctedAgeInDays / 7);
      days = (correctedAgeInDays - (weeks*7));
      if (correctedAgeInDays < 0) days = correctedAgeInDays; // for getting the "פחות מאפס" output

    }

    let ageString = '';
    if (weeks > 0) ageString += weeks === 1 ? 'שבוע, ' : weeks + ' שבועות, ';
    if (days > 0) ageString += days === 1 ? 'יום, ' : days + ' ימים, ';
    if (!ageString && days === 0) ageString = "0 ימים";
    if (!ageString) ageString = "פחות מאפס";
    if (years >= 2) ageString = "שנתיים ומעלה";  // for avoiding redundant caluculation (as above 2 years no special treatment)
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
