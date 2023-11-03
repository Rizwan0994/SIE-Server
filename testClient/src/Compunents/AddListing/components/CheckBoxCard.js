import React from 'react';
import { useMediaQuery } from "react-responsive";

function CheckboxCard({title, checkboxLabels,checkboxStates,handleCheckboxChange }) {

  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isExtended = useMediaQuery({ minWidth: 1600 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 990 })
  const islaptop_isTablet =  useMediaQuery({ minWidth: 577, maxWidth: 990 })
const labelStyle ={
fontSize: "16px",
fontFamily:"Open Sans",
fontWeight:"400",
}
  return (
    <div className="card shadow" style={{ height:islaptop_isTablet?"300px":"", width:isMobile?"100%":isTablet?"95%":"90%",borderStyle:"none",padding:"5%"}}>
      <h4>{title}</h4>
      <hr/>
      <div className="card-body" style={{padding:"0px"}}>
        {checkboxLabels.map((label) => (
          <div className="form-check" style={{labelStyle}} key={label}>
            <input
              type="checkbox"
              className="form-check-input"
              id={label}
              checked={checkboxStates[label]}
              onChange={() => handleCheckboxChange(label)}
            />
            <label className="form-check-label" htmlFor={label}>
              {label}
            </label>
          </div>
        ))}
      </div>
      {/* <div className="card-footer">
        Selected Checkboxes: {checkboxLabels.filter((label) => checkboxStates[label]).join(', ')}
      </div> */}
    </div>
  );
}

export default CheckboxCard;
