import React from "react";
import { useMediaQuery } from "react-responsive";

const CardComponent = ({
  title,
  radioOptions,
  description,
  linkText,
  linkURL,
  onChange,
  value,
  isChecked
}) => {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isExtended = useMediaQuery({ minWidth: 1600 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const labelStyle = {
    fontSize: "18px",
    fontWeight: "700",
    fontFamily: "Open Sans",
    marginLeft: isMobile ? "" : "3%",
    // marginRight:isMobile?"4%":""
  };



  const handleRadioChange = () => {
    onChange(value);
  };



  return (
    <div
      className="card shadow"
      style={{
        marginRight: isMobile ? "" : "3%",
        borderStyle: "none",
        borderRadius: "0px",
        marginBottom: isMobile ? "3%" : "",
        padding: "2%",
      }}
    >
      <div className="card-body">
        {isMobile ? (
          <div className="d-flex">
            <label style={labelStyle}>{title}</label>
            <input
              style={{ marginLeft: "auto", marginRight: "2%" }}
              type="radio"
              name="options"
              value={value}
              checked={isChecked}
              onChange={handleRadioChange}
            />
          </div>
        ) : (
          <>
            {" "}
            <input
              style={{ marginLeft: "auto", marginRight: "2%" }}
              type="radio"
              name="options"
              value={value}
              checked={isChecked}
              onChange={handleRadioChange}
            />
            <label style={labelStyle}>{title}</label>
          </>
        )}

        <hr />
        <p className="card-text">{description}</p>
        <a style={{ textDecoration: "", color: "#00BFFF" }} href={linkURL}>
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
