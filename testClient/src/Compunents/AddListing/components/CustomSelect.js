import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOption || 'Select an option'}
        <IoIosArrowDown className={`dropdown-icon ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`dropdown-item ${
                selectedOption === option ? 'selected' : ''
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;