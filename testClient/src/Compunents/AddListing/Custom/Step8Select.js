import React from "react";
import { useMediaQuery } from "react-responsive";

const CustomSelect = ({ label, options, selectedValue, onChange  }) => {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  console.log(selectedValue)

  const selectBootStyle = {
    color: "#00BFFF",
    borderStyle: "none",
    fontWeight: "600",
    width:isMobile?"50%":"",
    marginRight:"auto"
  };

  return (
    <>
      <span
        style={{
          borderRight: "1px solid #666666",
          paddingRight: "10%",
          whiteSpace: "nowrap",width:isMobile?"50%":"",
        }}
      >
        {label}
      </span>
      <select
        className="form-select"
        style={selectBootStyle}
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default CustomSelect;
