import React from "react";
import Button from "react-bootstrap/Button";
import { useMediaQuery } from "react-responsive";

export default function Step11Custom({ labelText ,yesClicked, setYesClicked, noClicked, setNoClicked }) {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const divStyle = {
    display: isMobile ? "" : "flex",
    // flexDirection: 'column',
    alignItems: "center",
    width: "-webkit-fill-available",
  };

  const labelStyle = {
    fontSize: "16px",
    fontWeight: "600",
    fontFamily: "Open Sans",
    marginLeft: isMobile ? "" : "%",
    // marginRight:isMobile?"4%":""
  };

  const btnStyle = {
    backgroundColor: yesClicked ? '#00BFFF' : 'white',
    color:yesClicked?"#FFF":"black",
    border:yesClicked? "none ": "#666666 solid #666666",
    borderRadius: "10px",
    width: isMobile ? "50%" : "100px",
    padding: "5%",
   
    marginRight: "5%",
    marginTop:isMobile?"2%":""
  };
  

  const handleYesClick = () => {
    setYesClicked(true);
    setNoClicked(false);
  };

  const handleNoClick = () => {
    setNoClicked(true);
    setYesClicked(false);
  };


  return (
    <div>
      <label style={divStyle}>
        <span className="mb-2" style={labelStyle}>{labelText}</span>
        <div
          className="d-flex  align-items-center"
          style={{ marginLeft: isMobile ? "" : "auto" }}
        >
          <button style={btnStyle}  onClick={handleYesClick}>Yes</button>{" "}
          <button
            style={{
              backgroundColor: noClicked ? '#00BFFF' : 'white',
              border:noClicked?"none ": "#666666 solid #666666",
              borderRadius: "10px",
              width: isMobile ? "50%" : "100px",
              padding: "5%",
              color:noClicked?"#FFF":"black",
              marginTop:isMobile?"2%":""
            
            }}
            onClick={handleNoClick}
          >
            No
          </button>{" "}
        </div>
      </label>
    </div>
  );
}
