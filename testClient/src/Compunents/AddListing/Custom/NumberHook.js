import { useState } from 'react';

function useNumberInput(initialValue = 1) {
  const [value, setValue] = useState(initialValue);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return {
    value,
    increment,
    decrement,
  };
}

export default useNumberInput;