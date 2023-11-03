import React, { useState, useEffect } from "react";
import Step2 from "../svgs/step2.svg";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.css';
import YearPicker from "../Custom/DateSelector";
import YearSelector from "../Custom/YearPicker";
import useSelect from "../Custom/UseSelect";
import useYearMonthSelect from "../Custom/SelectYearMonth";
import useNumberInput from "../Custom/InputNumber";
import Step2mb from "../svgs/step2mb.svg";
import { useMediaQuery } from "react-responsive";
import useNumberInc from "../Custom/NumberHook";
import add from "../svgs/add.svg";
import subtract from "../svgs/subtract.svg";
import "./step3.css";


const HeadingStyle = {
  fontSize: "20px",
  fontWeight: "600",
  fontFamily: "Open Sans",
};

export default function Step3({ formData, setFormData }) {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isExtended = useMediaQuery({ minWidth: 1600 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 990 });
  const islaptop_isTablet = useMediaQuery({ minWidth: 577, maxWidth: 990 });
  const container = {
    height: isMobile?"":isTablet?"":"86vh",
  };
  
  console.log(formData);

  const row1Style = {
    width: isMobile ? "" : "218px",
    height: isMobile ? "" : "45px",
    fontSize: "10px",
  };

  const row2Style = {
 
 
  };


  const selectstyle = {
    borderStyle: "none",
    marginLeft: isMobile ? "auto" : "10px",
    fontFamily: "Open Sans",
    fontWeight: "400",
    color: "#333333",
  };
  const row2boxStyles = {

    width: isMobile ? "" : "156px",
    height: isMobile ? "" : "45px",
fontSize:"10px",
    // width: isMobile ? "" : "fit-content",
    border: isMobile?"": "#666666 solid 0.5px",
    display: "flex",
    borderRadius: "5px",
    padding: isMobile ? "3%" : "2%",
    alignItems:isMobile?"":"center"
  };

  const row3boxStyles = {

    width: isMobile ? "" : "182px",
    height: isMobile ? "" : "45px",
fontSize:"10px",
    // width: isMobile ? "" : "fit-content",
    border: isMobile?"": "#666666 solid 0.5px",
    display: "flex",
    borderRadius: "5px",
    padding: isMobile ? "3%" : "2%",
    alignItems:isMobile?"":"center"
  };


  const numberContStyle = {
    width: "60px",
    borderStyle: "none",
    color: "#00BFFF",
    fontWeight: "600",
    marginLeft: isMobile ? "auto" : "",
    borderRight: "1px solid rgb(186 185 185)",
  };


  const EngcountDivStyle ={
    border: isMobile?"": "#666666 solid 0.5px",
     width: isMobile?"": "120px",
     height:isMobile?"":"45px",
     padding:isMobile?"":isTablet?"4%" : isLaptop?"2%":"2%",
     borderRadius:isMobile? "":"5px",
     display:isMobile?"flex":"flex",
     margin:isMobile?"10px 5px":isTablet?"":"5% 0%",
     fontSize:"10px",
     alignItems:isMobile?"":"center"
   }

  const PowcountDivStyle = {
    border: isMobile?"": "#666666 solid 0.5px",
    width: isMobile?"": "155px",
    height:isMobile?"":"45px",
    padding: isMobile ? "3%" : "2%",
    borderRadius: "5px",
    display: isMobile ? "flex" : "flex",
    fontSize:"10px",
    alignItems:isMobile?"":"center"
  };
  const SpeedcountDivStyle = {
    border: isMobile?"": "#666666 solid 0.5px",
    width: isMobile?"": "145px",
    height:isMobile?"":"45px",
    padding: isMobile ? "3%" : "2%",
    borderRadius: "5px",
    display: isMobile ? "flex" : "flex",
    fontSize:"10px",
    alignItems:isMobile?"":"center"
  };


  const numberStyle = {
    color: "#00BFFF",
    fontWeight: "600",
    marginLeft: isMobile ? "auto" : "",
    marginRight: isMobile ? "8%" : isTablet ? "%" : "",
  };

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [vesselName, setVesselName] = useState("");

  const {
    years: builtin_year,
    months: builtin_month,
    yearSelect: builtin_select_year,
    monthSelect: builtin_select_month,
  } = useYearMonthSelect(0);
  const {
    years: refitin_year,
    months: refitin_months,
    yearSelect: refitin_select_year,
    monthSelect: refitin_select_month,
  } = useYearMonthSelect(0);

  const [lenght_value, setLengthValue] = useState(0);
  const [fuel_cap_value, setFuelCapValue] = useState(0);
  const [fuel_consump_value, setFuelConsumpValue] = useState(0);
  const [water_cap_value, setWaterCapValue] = useState(0);
  const [power_eng_value, setPowerEngValue] = useState(0);
  const [max_cruising_value, setMaxCruisingValue] = useState(0);

  // const [lenght_value,setLengthValue] =useState(0)
  // const [built_type, setBuidType] = useState("feet");
  // const [refit_type, setRefitTpye] = useState("");
  const [lenght_type, setLengthType] = useState("liters");
  const [fuel_type, setFuelType] = useState("petrol");
  const [fuel_cap_type, setFuelCapType] = useState("petrol");
  const [fuel_consump_type, setFuelConsumpType] = useState("petrol");
  const [water_cap_type, setWaterCapType] = useState("liters");
  const [power_eng_type, setPowerEngType] = useState("liters");

  const {
    value: engines,
    increment: engines_inc,
    decrement: engines_dec,
  } = useNumberInc(1);

  const updateManufacturer = (value) => {
    setManufacturer(value);
    setFormData((prevData) => ({
      ...prevData,
      features: {
        ...prevData.features,
        manufacturer: value,
      },
    }));
  };

  const updateModel = (value) => {
    setModel(value);
    setFormData((prevData) => ({
      ...prevData,
      features: {
        ...prevData.features,
        model: value,
      },
    }));
  };

  const updateVesselName = (value) => {
    setVesselName(value);
    setFormData((prevData) => ({
      ...prevData,
      features: {
        ...prevData.features,
        vesselName: value,
      },
    }));
  };
  let updatedFeature = {};
  const handleSelectChange = (e, type, value) => {
    const selectedValue = e.target.value;

    switch (type) {
      case "length":
        setLengthType(selectedValue);
        updatedFeature = {
          length: {
            ...formData.features.length,
            value: formData.features.length.value,
            type: lenght_type,
          },
        };
        break;
      case "fuelType":
        setFuelType(selectedValue);
        updatedFeature = {
          fuelType: { ...formData.features.fuelType, type: selectedValue },
        };
        break;
      case "fuelCapacity":
        setFuelCapType(selectedValue);
        updatedFeature = {
          fuelCapacity: {
            ...formData.features.fuelCapacity,
            value: formData.features.fuelCapacity.value,
            type: selectedValue,
          },
        };
        break;
      case "fuelConsumption":
        setFuelConsumpType(selectedValue);
        updatedFeature = {
          fuelConsumption: {
            ...formData.features.fuelConsumption,
            value: formData.features.fuelConsumption.value,
            type: selectedValue,
          },
        };
        break;
      case "powerEngine":
        setPowerEngType(selectedValue);
        updatedFeature = {
          powerCapacity: {
            ...formData.features.powerCapacity,
            value: formData.features.powerCapacity.value,
            type: selectedValue,
          },
        };
        break;
      case "waterType":
        setWaterCapType(selectedValue);
        updatedFeature = {
          waterCapacity: {
            ...formData.features.waterCapacity,
            value: formData.features.waterCapacity.value,
            type: selectedValue,
          },
        };
        break;
      default:
        // Handle other cases or do nothing
        break;
    }
    setFormData((prevData) => ({
      ...prevData,
      features: {
        ...prevData.features,
        ...updatedFeature,
      },
    }));
  };

  const handleLengthChange = (event) => {
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      features: {
        ...prevFormData.features,
        length: {
          ...prevFormData.features.length,
          value: value,
        },
      },
    }));
  };

  const handleFuelCapChange = (event) => {
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      features: {
        ...prevFormData.features,
        fuelCapacity: {
          ...prevFormData.features.fuelCapacity,
          value: value,
        },
      },
    }));
  };

  const handleFuelConsmpChange = (event) => {
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      features: {
        ...prevFormData.features,
        fuelConsumption: {
          ...prevFormData.features.fuelConsumption,
          value: value,
        },
      },
    }));
  };

  const handleWaterChange = (event) => {
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      features: {
        ...prevFormData.features,
        waterCapacity: {
          ...prevFormData.features.waterCapacity,
          value: value,
        },
      },
    }));
  };

  const handlePowerChange = (event) => {
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      features: {
        ...prevFormData.features,
        powerCapacity: {
          ...prevFormData.features.powerCapacity,
          value: value,
        },
      },
    }));
  };

  const handleMaxCruisChange = (event) => {
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      features: {
        ...prevFormData.features,
        maxCruising: value,
      },
    }));
  };

  const handleBuiltInChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      features: {
        ...prevData.features,
        builtIn: {
          month: builtin_select_month.selectedValue,
          year: builtin_select_year.selectedValue,
        },
      },
    }));
  };

  const handleRefitInChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      features: {
        ...prevData.features,
        refitIn: {
          month: refitin_select_month.selectedValue,
          year: refitin_select_year.selectedValue,
        },
      },
    }));
  };

  const updateEngines = () => {
    setFormData((prevData) => ({
      ...prevData,
      features: {
        ...prevData.features,
        engine: engines,
      },
    }));
  };

  console.log(lenght_value);

  return (
    <div
      className={`container${islaptop_isTablet ? "-fluid" : ""}`}
      style={container}
    >
      <div
        className="row justify-content-center"
        style={{ marginBottom: "5%" }}
      >
        <div
          className="col-12 col-sm-12 col-lg-10 "
          style={{ marginTop: "3%" }}
        >
          <img src={isMobile ? Step2mb : Step2} width="100%" alt="" />
        </div>
      </div>
      {/* 1 */}
      <div
        className="row"
        style={{
          marginLeft: isMobile ? "" : isTablet ? "4%" : "9%",
          padding: isMobile ? "4%" : "",
          marginBottom: "5%",
          marginTop: isTablet ? "7%" : "%",
        }}
      >
        <div className="col-12 col-sm-4" style={{ padding: "0px" }}>
          <h4 className="pb-2" style={HeadingStyle}>
            Manufacturer
          </h4>
          {/* <div style={countDivStyle}>
           
          </div> */}
          <Form.Control
            size="lg"
            type="text"
            onChange={(e) => updateManufacturer(e.target.value)}
            placeholder="Type manufacturer here"
            style={row1Style}
          />
        </div>

        {isMobile ? (
          <>
            {" "}
            <hr
              style={{
                backgroundColor: "#CCCCCC",
                marginLeft: isMobile ? "" : "10%",
                margin: "5% 0%",
              }}
            />
          </>
        ) : (
          <></>
        )}

        <div className="col-12 col-sm-4" style={{ padding: "0px" }}>
          <h4 className="pb-2" style={HeadingStyle}>
            Model
          </h4>
          {/* <div style={countDivStyle}>
            
          </div> */}
          <Form.Control
            size="lg"
            type="text"
            placeholder="Type model here"
            onChange={(e) => updateModel(e.target.value)}
            style={row1Style}
          />
        </div>
        {isMobile ? (
          <>
            {" "}
            <hr
              style={{
                backgroundColor: "#CCCCCC",
                marginLeft: isMobile ? "" : "10%",
                margin: "5% 0%",
              }}
            />
          </>
        ) : (
          <></>
        )}

        <div className="col-12 col-sm-4" style={{ padding: "0px" }}>
          <h4 className="pb-2" style={HeadingStyle}>
            Vessel name
          </h4>
          {/* <div style={countDivStyle}>
          
          
          </div> */}
          <Form.Control
            size="lg"
            type="text"
            placeholder="Type name here"
            onChange={(e) => updateVesselName(e.target.value)}
            style={row1Style}
          />
        </div>
      </div>
      {isMobile ? (
        <>
          {" "}
          <hr
            style={{
              backgroundColor: "#CCCCCC",
              marginLeft: isMobile ? "" : "10%",
              margin: "5% 0%",
            }}
          />
        </>
      ) : (
        <>
          {" "}
          <hr style={{ marginLeft: isTablet?"4%":"8%", marginBottom: "3%" }} />
        </>
      )}

      {/* 2 */}
      {/* style={{ marginLeft: "9%", marginBottom: "3%" }} */}
      <div
        className="row"
        style={{
          marginLeft: isMobile ? "" : isTablet ? "3%" : "8%",
          padding: isMobile ? "2%" : "",
          marginTop: isTablet ? "4%" : "",
          marginBottom: isTablet ? "4%" : "",
        }}
      >
        <div
          className="col-12 col-sm-4"
          style={{ marginRight: isTablet ? "" : "%" }}
        >
          <h4 className="pb-2" style={HeadingStyle}>
            Built in
          </h4>

          <div style={row2boxStyles}>
            <div style={{ marginLeft: isMobile ? "auto" : "" }}>
              <select
                style={{
                  borderStyle: "none",
                  fontFamily: "Open Sans",
                  fontWeight: "400",
                  color: "#333333",
                  
                }}
                value={builtin_select_year.selectedValue}
                onChange={builtin_select_year.handleChange}
                onBlur={handleBuiltInChange}
              >
                {builtin_year.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div
              style={{
                border: isMobile?"": "#666666 solid 0.5px",
                height: "auto",
                margin: "0 10px",
              }}
            ></div>
            <div style={{ marginLeft: isMobile ? "auto" : "" }}>
              <select
                style={{
                  borderStyle: "none",
                  fontFamily: "Open Sans",
                  fontWeight: "400",
                  color: "#333333",
                 
                }}
                value={builtin_select_month.selectedValue}
                onChange={builtin_select_month.handleChange}
                onBlur={handleBuiltInChange}
              >
                {builtin_month.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {isMobile ? (
          <>
            {" "}
            <hr
              style={{
                backgroundColor: "#CCCCCC",
                marginLeft: isMobile ? "" : "10%",
                margin: "5% 0%",
              }}
            />
          </>
        ) : (
          <></>
        )}

        <div className="col-12 col-sm-4">
          <h4 className="pb-2" style={HeadingStyle}>
            Refit in
          </h4>

          <div style={row2boxStyles}>
            <div style={{ marginLeft: isMobile ? "auto" : "" }}>
              <select
                style={{
                  borderStyle: "none",
                  fontFamily: "Open Sans",
                  fontWeight: "400",
                  color: "#333333",
                  
                }}
                value={refitin_select_year.selectedValue}
                onChange={refitin_select_year.handleChange}
                onBlur={handleRefitInChange}
              >
                {refitin_year.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div
              style={{
                border: isMobile?"": "#666666 solid 0.5px",
                height: "auto",
                margin: "0 10px",
              }}
            ></div>
            <div style={{ marginLeft: isMobile ? "auto" : "" }}>
              <select
                style={{
                  borderStyle: "none",
                  fontFamily: "Open Sans",
                  fontWeight: "400",
                  color: "#333333",
                  border: isMobile?"": "#666666 solid 0.5px",
                }}
                value={refitin_select_month.selectedValue}
                onChange={refitin_select_month.handleChange}
                onBlur={handleRefitInChange}
              >
                {refitin_months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {isMobile ? (
          <>
            {" "}
            <hr
              style={{
                backgroundColor: "#CCCCCC",
                marginLeft: isMobile ? "" : "10%",
                margin: "5% 0%",
              }}
            />
          </>
        ) : (
          <></>
        )}

        <div className="col-12 col-sm-4" style={{ marginRight: "%" }}>
          <h4 className="pb-2" style={HeadingStyle}>
            Length
          </h4>

          <div style={row2boxStyles}>
            <input
              type="number"
              value={formData.features.length.value}
              onChange={handleLengthChange}
              style={numberContStyle}
            />

            <div
              style={{
                border: isMobile?"": "#666666 solid 0.5px",
                height: "auto",
                margin: "0 10px",
              }}
            ></div>
            <select
              value={lenght_type}
              onChange={(e) => handleSelectChange(e, "length")}
              style={{
                borderStyle: "none",
                marginLeft: isMobile ? "auto" : "",
                fontFamily: "Open Sans",
                fontWeight: "400",
                color: "#333333",
              }}
            >
              <option value="feet">Feet</option>
              <option value="meters">Meters</option>
            </select>
          </div>
        </div>
      </div>

      {isMobile ? (
        <>
          {" "}
          <hr
            style={{
              backgroundColor: "#CCCCCC",
              marginLeft: isMobile ? "" : "10%",
              margin: "5% 0%",
            }}
          />
        </>
      ) : (
        <></>
      )}
      {/* 3   style={{ marginLeft: "9%", marginBottom: "3%" }} 
      style={{ marginRight:isMobile?"":isTablet?"": "9%" }}
      */}
      <div
        className="row"
        style={{
          marginLeft: isMobile ? "" : isTablet ? "3%" : "8%",
          padding: isMobile ? "2%" : "",
          marginBottom: isTablet ? "4%" : "",
          marginTop: isMobile ? "" : isTablet ? "" : "4%",
        }}
      >
        <div className="col-12 col-sm-4 col-lg-3" style={{ marginRight: "%" }}>
          <h4 className="pb-2" style={HeadingStyle}>
            Fuel type
          </h4>
          <div style={row2boxStyles}>
           
            <select
              value={fuel_type}
              onChange={(e) => handleSelectChange(e, "fuelType")}
              style={{
                borderStyle: "none",
                paddingRight: isMobile ? "73%" : "",
                fontFamily: "Open Sans",
                fontWeight: "400",
                color: "#333333",
              }}
            >
              <option value="none">Select type</option>
              <option value="meters">Liters</option>
            </select>
          </div>
        </div>

        {isMobile ? (
          <>
            {" "}
            <hr
              style={{
                backgroundColor: "#CCCCCC",
                marginLeft: isMobile ? "" : "10%",
                margin: "5% 0%",
              }}
            />
          </>
        ) : (
          <></>
        )}

        <div className="col-12 col-sm-4 col-lg-3" style={{ marginRight: "%" }}>
          <h4 className="pb-2" style={HeadingStyle}>
            Fuel capacity
          </h4>
          <div style={row2boxStyles}>
            <input
              type="number"
              value={formData.features.fuelCapacity.value}
              onChange={handleFuelCapChange}
              style={numberContStyle}
            />
          
            <select
              value={fuel_cap_type}
              onChange={(e) => handleSelectChange(e, "fuelCapacity")}
              style={{
                borderStyle: "none",
                marginLeft: isMobile ? "auto" : "10px",
                fontFamily: "Open Sans",
                fontWeight: "400",
                color: "#333333",
              }}
            >
              <option value="liters">Liters</option>
              <option value="kiloliters">kiloliters</option>
            </select>
          </div>
        </div>

        {isMobile ? (
          <>
            {" "}
            <hr
              style={{
                backgroundColor: "#CCCCCC",
                marginLeft: isMobile ? "" : "10%",
                margin: "5% 0%",
              }}
            />
          </>
        ) : (
          <></>
        )}

        <div className="col-12 col-sm-4 col-lg-3" style={{ marginRight: "%" }}>
          <h4 className="pb-2" style={HeadingStyle}>
            Fuel consumption
          </h4>
          <div style={row3boxStyles}>
            <input
              type="number"
              value={formData.features.fuelConsumption.value}
              onChange={handleFuelConsmpChange}
              style={numberContStyle}
            />
           
            <select
              value={fuel_consump_type}
              onChange={(e) =>
                handleSelectChange(e, "fuelConsumption", fuel_cap_value)
              }
              style={selectstyle}
            >
              <option value="liters/hour">Liters/hour</option>
              <option value="gallon/hour">Gallon/hour</option>
            </select>
          </div>
        </div>

        {isMobile ? (
          <>
            {" "}
            <hr
              style={{
                backgroundColor: "#CCCCCC",
                marginLeft: isMobile ? "" : "10%",
                margin: "5% 0%",
              }}
            />
          </>
        ) : (
          <></>
        )}

        <div
          className="col-12 col-sm-4 col-lg-3"
          style={{ marginTop: isTablet ? "4%" : "" }}
        >
          <h4 className="pb-2" style={HeadingStyle}>
            Water capacity
          </h4>
          <div style={row2boxStyles}>
            <input
              type="number"
              value={formData.features.waterCapacity.value}
              onChange={handleWaterChange}
              style={numberContStyle}
            />
        
            <select
              value={water_cap_type}
              onChange={(e) => handleSelectChange(e, "waterType")}
              style={selectstyle}
            >
              <option value="liters">Liters</option>
              <option value=""></option>
            </select>
          </div>
        </div>
      </div>

      {isMobile ? (
        <>
          {" "}
          <hr
            style={{
              backgroundColor: "#CCCCCC",
              marginLeft: isMobile ? "" : "10%",
              marginTop: isMobile ? "5%" : "5% 0%",
            }}
          />
        </>
      ) : (
        <></>
      )}
      {/* 4  style={{ marginLeft: "9%", marginBottom: "3%" }} */}
      <div
        className="row"
        style={{
          marginLeft: isMobile ? "" : isTablet ? "3%" : "8%",
          padding: isMobile ? "2%" : "",
          marginTop: isMobile ? "" : isTablet ? "" : "4%",
        }}
      >
        <div
          className="col-12 col-sm-4 "
          style={{ padding: isMobile ? "0px" : "" }}
        >
          {isMobile ? (
            <></>
          ) : (
            <>
              {" "}
              <h4 className="pb-2" style={HeadingStyle}>
                Engines
              </h4>
            </>
          )}

          <div style={EngcountDivStyle}>
            {isMobile ? (
              <>
                {" "}
                <h4 style={HeadingStyle}>Engines</h4>
              </>
            ) : (
              <> </>
            )}
            <span style={numberStyle}>{engines}</span>
            <div
              style={{
                display: "flex",
                marginLeft: isMobile ? "" : isTablet ? "auto" : "30px",
              }}
            >
              <img
                onClick={() => {
                  engines_dec();
                  updateEngines();
                }}
                src={subtract}
                style={{
                  marginRight: "5px",
                  cursor: "pointer",
                }}
                alt=""
              />
              <img
                onClick={() => {
                  engines_inc();
                  updateEngines();
                }}
                src={add}
                style={{ cursor: "pointer" }}
                alt=""
              />
            </div>
          </div>
        </div>
        {isMobile ? (
          <>
            {" "}
            <hr
              style={{
                backgroundColor: "#CCCCCC",
                marginLeft: isMobile ? "" : "10%",
                marginTop: isMobile ? "5%" : "5% 0%",
              }}
            />
          </>
        ) : (
          <></>
        )}

        <div className="col-12 col-sm-4" style={{ marginRight: "%" }}>
          <h4 className="pb-2" style={HeadingStyle}>
            Power per engine
          </h4>
          <div style={PowcountDivStyle}>
            <input
              type="number"
              value={formData.features.powerCapacity.value}
              onChange={handlePowerChange}
              style={numberContStyle}
            />
           
            <select
              value={power_eng_type}
              onChange={(e) => handleSelectChange(e, "powerEngine")}
              style={{
                borderStyle: "none",
                marginLeft: isMobile ? "auto" : isTablet ? "" : "10px",
                fontFamily: "Open Sans",
                fontWeight: "400",
                color: "#333333",
              }}
            >
              <option value="liters">hp</option>
              <option value="kiloliters">kiloliters</option>
            </select>
          </div>
        </div>

        {isMobile ? (
          <>
            {" "}
            <hr
              style={{
                backgroundColor: "#CCCCCC",
                marginLeft: isMobile ? "" : "10%",
                marginTop: isMobile ? "5%" : "5% 0%",
              }}
            />
          </>
        ) : (
          <></>
        )}

        <div className="col-12 col-sm-4" style={{ marginRight: "%" }}>
          <h4 className="pb-2" style={HeadingStyle}>
            Max cruising speed
          </h4>
          <div style={SpeedcountDivStyle}>
            <input
              type="number"
              value={formData.features.maxCruising}
              onChange={handleMaxCruisChange}
              style={numberContStyle}
            />
           
            <div style={{ marginLeft: isMobile ? "auto" : "20px" }}>
              <span
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: "400",
                  color: "#333333",
                }}
              >
                Knots{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
