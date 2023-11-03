import React, { useState } from 'react';

export default function useCustomSelect(options, initialSelectedOption) {
    const [selectedOption, setSelectedOption] = useState(initialSelectedOption);
  
    const handleChange = (e) => {
      setSelectedOption(e.target.value);
    };
  
    return { selectedOption, handleChange, options };
  }
  