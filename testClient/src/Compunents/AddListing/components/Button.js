import React from "react";
import { useMediaQuery } from "react-responsive";
export default function Button({ btntext,ButtonClick }) {

  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isExtended = useMediaQuery({ minWidth: 1600 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });


  return (
    <>
      {" "}
      <button
      onClick={ButtonClick}
        type="button"
        className="btn btn shadow-sm"
        style={{
          backgroundColor: "#00BFFF",
          color: "white",
          fontFamily: "Open Sans",
          fontSize: "16px",
          fontWeight: "700",
          marginRight: "1%",
          marginLeft: isMobile ? "" : "auto",
          width: isMobile ? "90%" : "180px",
          height: isMobile ? "" : "45px",
          borderRadius: isMobile ? "30px" : "",
          padding: isMobile ? "2%" : "",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", 
        }}
      >
        {btntext}
      </button>
    </>
  );
}
