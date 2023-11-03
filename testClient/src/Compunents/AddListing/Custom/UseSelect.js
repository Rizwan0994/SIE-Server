import { useState } from 'react';

export function useYearSelect(initialValue) {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return {
    selectedValue,
    handleChange,
  };
}

export function useMonthSelect(initialValue) {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return {
    selectedValue,
    handleChange,
  };
}
