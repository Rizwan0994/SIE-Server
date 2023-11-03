import { useState } from 'react';

function useNumberInput(initialValue, setFormData) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    // Set the corresponding field in formData based on the input's name or ID
    setFormData((prevData) => ({
      ...prevData,
      features: {
        ...prevData.features,
        [e.target.name]: newValue,
      },
    }));
  };

  return {
    value,
    handleChange,
  };
}

export default useNumberInput;
