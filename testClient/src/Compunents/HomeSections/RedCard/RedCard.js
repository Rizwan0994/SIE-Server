import React from 'react'
import RedCardButton from '../../UI/RedCardButton/RedCardButton'
import ball from "../../../images/ball.svg";

import redc from "../../../images/redcontainer.svg";
import redtab from "../../../images/orangetablet.svg";

import { useMediaQuery } from "react-responsive";
function RedCard() {
  const isExtended = useMediaQuery({ maxWidth: 1200 });
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });

  const redcard = {
    minWidth: isMobile
      ? "435px"
      : isTablet
      ? "700px "
      : isExtended
      ? "1200px"
      : "1200px",
    minHeight: isMobile ? "" : isTablet ? " " : "200px",
    position: isMobile ? "" : isTablet ? " " : "absolute",
    zIndex: isMobile ? "" : isTablet ? " " : "999",
    // marginLeft: isExtended ? "19%" : " ",
    // marginRight: isExtended ? "9%" : " ",
    left: isMobile ? "" : isTablet ? " " : isExtended ? "" : "50%",
    transform: isMobile
      ? ""
      : isTablet
      ? " "
      : isExtended
      ? ""
      : "translate(-50%, 0)",
  };

  const tablet_btn_style ={
   
    paddingRight:"0px"
  }

  return (
    <div className="rounded" style={redcard}>
      <div
        className="row"
        style={{
          backgroundColor: "#FF7F50",
          marginTop: isMobile ? " " : isTablet ? " -5%" : "-2%",
          position:isTablet?"absolute" :"",
          zIndex:isTablet?"9":"",
          marginBottom: isMobile ? " " : isTablet ? " " : "3%",
          padding: isMobile ? " " : isTablet ? "2% " : "2%",
          borderRadius: isMobile ? "0px " : isTablet ? " 10px" : "10px",
          width: isMobile ? "100%" :isTablet?"590px": "82%",
          marginLeft: isMobile ? "0px " : isTablet ? " 10%" : " 10%",
        }}
      >
        {isMobile ? (
          // Mobile view content
          // <div
          //   className="row justify-content-center"
          //   style={{ marginTop: "auto", paddingRight: "0px" }}
          // >
          //   <img src={redc} alt="redcard" style={{ paddingRight: "0px" }} />
          // </div>
          <>
            <div className="col-12">
              <p
                style={{ fontFamily: "Open Sans", color: "white" }}
                className="p-3"
              >
                What kind of boat or experience are you looking for?
              </p>
            </div>
            <div className="col-12 px-4" style={{ marginBottom: "4%" }}>
              {/* */}
              <div
                className="row justify-content-center"
                style={{ marginTop: "2%" }}
              >
                <div className="col-4" style={tablet_btn_style}>
                  {" "}
                  <RedCardButton name={"Sea Activities"} />{" "}
                </div>
                <div className="col-4" style={tablet_btn_style}>
                  <RedCardButton name={"Party"} />{" "}
                </div>
                <div className="col-4" style={tablet_btn_style}>
                  <RedCardButton name={"Yacht"} />{" "}
                </div>
              </div>
              <div
                className="row justify-content-center"
                style={{ marginTop: "3%" }}
              >
                <div className="col-4 " style={tablet_btn_style}>
                  <RedCardButton name={"Daily"} />{" "}
                </div>
                <div className="col-4" style={tablet_btn_style}>
                  <RedCardButton name={"Relaxation"} />{" "}
                </div>
                <div className="col-4" style={tablet_btn_style}>
                  <RedCardButton name={"Powerboat"} />{" "}
                </div>
              </div>
              <div
                className="row justify-content-center"
                style={{ marginTop: "3%", marginBottom: "15%" }}
              >
                <div className="col-4" style={tablet_btn_style}>
                  <RedCardButton name={"Catamaran"} />{" "}
                </div>
                <div className="col-4" style={tablet_btn_style}>
                  <RedCardButton name={"Other"} />{" "}
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-3"
                style={{ marginLeft: "auto", marginTop: "" }}
              >
                <img
                  src={ball}
                  alt="ball"
                  style={{ position: "absolute", marginTop: "-10%" }}
                />
              </div>
            </div>
          </>
        ) : isTablet ? (
          // Tablet view content
          // <img src={redtab} alt="redcard" style={{ paddingRight: "0px" }} />
          <>
            <div className="col-12">
              <div className="col-6">
                <p
                  style={{ fontFamily: "Open Sans", color: "white" }}
                  className="p-3"
                >
                  What kind of boat or experience are you looking for?
                </p>
              </div>
            </div>
            <div className="col-11 px-4" style={{ marginBottom: "4%" }}>
              {/* */}
              <div className="row" style={{ marginTop: "2%" }}>
                <div className="col-3" style={{ padding: "0px" }}>
                  {" "}
                  <RedCardButton name={"Sea Activities"} />{" "}
                </div>
                <div className="col-3" style={tablet_btn_style}>
                  <RedCardButton name={"Party"} />{" "}
                </div>
                <div className="col-3" style={tablet_btn_style}>
                  <RedCardButton name={"Yacht"} />{" "}
                </div>
                <div className="col-3" style={tablet_btn_style}>
                  <RedCardButton name={"Daily"} />{" "}
                </div>
              </div>
              <div className="row" style={{ marginTop: "3%" }}>
                <div className="col-3" style={{ padding: "0px" }}>
                  <RedCardButton name={"Relaxation"} />{" "}
                </div>
                <div className="col-3" style={tablet_btn_style}>
                  <RedCardButton name={"Powerboat"} />{" "}
                </div>
                <div className="col-3" style={tablet_btn_style}>
                  <RedCardButton name={"Catamaran"} />{" "}
                </div>
                <div className="col-3" style={tablet_btn_style}>
                  <RedCardButton name={"Other"} />{" "}
                </div>
              </div>
            </div>
            <div
              className="col-1"
              style={{ padding: "0px", marginTop: "auto" }}
            >
              <img src={ball} alt="ball" />
            </div>
          </>
        ) : (
          <>
            <div className="col-3">
              <p
                style={{ fontFamily: "Open Sans", color: "white" }}
                className="p-3"
              >
                What kind of boat or experience are you looking for?
              </p>
            </div>
            <div className="col-8">
              {/* */}
              <div className="row" style={{ marginTop: "2%" }}>
                <div className="col-3">
                  {" "}
                  <RedCardButton name={"Sea Activities"} />{" "}
                </div>
                <div className="col-3">
                  <RedCardButton name={"Party"} />{" "}
                </div>
                <div className="col-3">
                  <RedCardButton name={"Yacht"} />{" "}
                </div>
                <div className="col-3">
                  <RedCardButton name={"Daily"} />{" "}
                </div>
              </div>
              <div className="row" style={{ marginTop: "1%" }}>
                <div className="col-3">
                  <RedCardButton name={"Relaxation"} />{" "}
                </div>
                <div className="col-3">
                  <RedCardButton name={"Powerboat"} />{" "}
                </div>
                <div className="col-3">
                  <RedCardButton name={"Catamaran"} />{" "}
                </div>
                <div className="col-3">
                  <RedCardButton name={"Other"} />{" "}
                </div>
              </div>
            </div>
            <div className="col-1" style={{ marginTop: "auto" }}>
              <img src={ball} alt="ball" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default RedCard;