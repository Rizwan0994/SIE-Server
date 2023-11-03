import React, { useState } from "react";
import "./radio.css";
import { useMediaQuery } from "react-responsive";
import calculator from "../svgs/calculator.svg";
import Model1 from "./Model2";

function RadioInput ({ label,formData,setFormData ,obj ,label_value }) {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isExtended = useMediaQuery({ minWidth: 1600 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 990 });
  const islaptop_isTablet = useMediaQuery({ minWidth: 577, maxWidth: 990 });

  const numdivStyle = {
    display: "flex",
    borderRadius: "8px",
    alignItems: "center",
    border: "rgb(186 185 185) solid 1px",
    width: isMobile ? "100%" : "fit-content",
    padding: isMobile ? "2% 3%" : isTablet ?"1% 3%": "3% 5%",
    color: "",
    marginBottom: isMobile ? "2%" : "",
    marginTop: isMobile ? "2%" : isTablet?"": "4%",
    marginRight:isMobile?"":isTablet?"":"2%",
    marginLeft: isMobile?"":isTablet?"":"6%"



    
  };

  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState(0);
  const [showModal, setShowModal] = useState(false);


  const numberContStyle = {
    width:isMobile?"52%": "60px",
    borderStyle: "none",
    color: "#00BFFF",
    fontWeight: "600",
    marginLeft: isMobile ? "" : "",
    borderRight: "1px solid rgb(186 185 185)",
  };

  const labelStyle = {
    fontSize: "16px",
    fontWeight: "400",
    fontFamily: "Open Sans",
    marginLeft: isMobile?"": "10px",
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleContinueFromModal = () => {
    handleCloseModal();
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleValueChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue)
    // Determine which object in the form data to update based on the 'obj' prop
    const updatedData = {
      ...formData,
      [obj]: {
        ...formData[obj],
        [label_value]: newValue
      }
    };

    setFormData(updatedData);
  };


  console.log(formData)

  return (
    <div className="mt-2">
      <div>
        {isMobile ? (
          <>
            {" "}
           
            <div className="d-flex">
            <label style={labelStyle} htmlFor={`radio-${label}`}>
              {label}
            </label>
            <input
            style={{marginRight:"5px" ,marginLeft:"auto"}}
              type="radio"
              id={`radio-${label}`}
              name="radioGroup"
              checked={showInput}
              onChange={() => setShowInput(!showInput)}
              className={showInput ? "radio-checked" : ""}
            />
            </div>
          
          </>
        ) : (
          <>
            {" "}
            <input
              type="radio"
              id={`radio-${label}`}
              name="radioGroup"
              checked={showInput}
              onChange={() => setShowInput(!showInput)}
              className={showInput ? "radio-checked" : ""}
            />
            <label style={labelStyle} htmlFor={`radio-${label}`}>
              {label}
            </label>
          </>
        )}
      </div>

      <div className="d-block d-sm-flex align-items-center">
        {showInput && (
          <div style={numdivStyle}>
            <input
              type="number"
              value={value} onChange={handleValueChange} 
              style={numberContStyle}
            />
            <div
              style={{
                borderRight: "1px solid rgb(186 185 185)",
                height: "100%",
                marginLeft: isMobile ? "30px" : "",
              }}
            ></div>
            <div style={{ marginLeft: isMobile ? "auto" : "20px" }}>
              <span
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: "400",
                  color: "#333333",
                }}
              >
                EUR
              </span>
            </div>
          </div>
        )}

        {showInput && label === "Fuel and mooring fees/per day" && (
          <>
            <p
              style={{ marginLeft: isMobile ? "37%" : "2%", color: "#00BFFF" ,marginTop:isMobile?"":isTablet?"":"5%" ,marginLeft:isMobile?"":isTablet?"":"5%" }}
              onClick={handleShowModal}
            >
              {" "}
              <img src={calculator} alt="" /> Calculating tool
            </p>

            <Model1
            formData={formData}
              label={label}
              showModal={showModal}
              handleCloseModal={handleCloseModal}
              handleContinueFromModal={handleContinueFromModal}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default RadioInput;
