import React, { useState } from 'react';
import { format, parse } from 'date-fns';

const YearPicker = ({ selectedYear, onYearChange }) => {
  const [year, setYear] = useState(selectedYear);

  const handleYearChange = (event) => {
    const inputYear = event.target.value;
    const parsedYear = parse(inputYear, 'yyyy', new Date());

    if (!isNaN(parsedYear)) {
      setYear(parsedYear);
      onYearChange(parsedYear);
    }
  };

  return (
    <input
      type="text"
      value={format(year, 'yyyy')}
      onChange={handleYearChange}
      placeholder="Select Year"
    />
  );
};

export default YearPicker;
