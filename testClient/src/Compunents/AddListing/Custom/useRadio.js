import { useState } from 'react';

export function useCheckboxStates(checkboxLabels) {
  const initialState = checkboxLabels.reduce((acc, label) => {
    acc[label] = false;
    return acc;
  }, {});

  const [checkboxStates, setCheckboxStates] = useState(initialState);

  const handleCheckboxChange = (label) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  return [checkboxStates, handleCheckboxChange];
}
