import React from "react";
import imgicon from "../svgs/img_icon.svg";
import step4 from "../svgs/step4.svg";
import "./step5.css";
import Form from "react-bootstrap/Form";
import { AiOutlinePlus } from "react-icons/ai";
import map from "../svgs/map.svg";
import { useMediaQuery } from "react-responsive";
import useNumberInput from "../Custom/InputNumber";
import Step4mb from "../svgs/step4mb.svg";
import { isMatch } from "date-fns";



export default function Step5({ formData, setFormData }) {

  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isExtended = useMediaQuery({ minWidth: 1600 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 990 });
  const islaptop_isTablet = useMediaQuery({ minWidth: 577, maxWidth: 990 });

  const container = {
    height: "85vh",
    padding:isMobile?"3%": isTablet?"3%":""  };

  const HeadingStyle = {
    fontSize: "20px",
    fontWeight: "600",
    fontFamily: "Open Sans",
    paddingBottom:isTablet?"2%":""
  };

  const numdivStyle = {
    display: "flex",
    borderRadius: "8px",
    alignItems: "center",
    border: "rgb(186 185 185) solid 1px",
    width: isMobile ? "" : isTablet ? "215px" : "fit-content",
    // padding: "5%",
    padding: isMobile ? "3%" : isTablet ? "4%" : "3%",

    // paddingLeft:isTablet?"2%":""
  };

  const numberContStyle = {
    width: "60px",
    borderStyle: "none",
    color: "#00BFFF",
    fontWeight: "600",
    marginLeft: isMobile ? "auto" : "",
    borderRight: "1px solid rgb(186 185 185)",
  };


  console.log(formData)
  const handleMarinaChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      location: {
        ...prevData.location,
        marina: event.target.value,
      },
    }));
  };

  const handleCruisingRangeChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      location: {
        ...prevData.location,
        cruisingRange: event.target.value,
      },
    }));
  };

  return (
    <div style={container}>
      <div
        className="row justify-content-center"
        style={{ marginBottom: "2%" }}
      >
        <div className="col-12 col-sm-12 col-md-10 col-lg-8" style={{ marginTop: "3%" }}>
        <img src={isMobile?Step4mb:step4} width="100%" alt="" />
        </div>
      </div>

      <div className="row justify-content-center d-flex  d-lg-flex">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 " style={{display:isTablet?"flex":"" ,marginTop:isMobile?"":isTablet?"2%":""}}>
          <div style={{ width: isMobile ? "" : isTablet ? "fit-content" : "" }}>
            <h4>Marina</h4>
             <Form.Control
        size="lg"
        type="text"
        placeholder="Agios Georgios, Corfu"
        onChange={handleMarinaChange}
        value={formData.location.marina}
      />

            <div
              style={{
                width:isTablet?"60%": isMobile?"":"50%",
                padding:isMobile?"3% 2% 3% 7%": isTablet?"4% 2% 4% 7%":"4%" ,
                border: "#BEBEBE solid 1px",
                borderRadius: "6px",
                marginTop: "5%",
              }}
            >
              <span
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: "400",
                  display: "flex",
                  fontSize: "12px",
                  color: "#333333",
                }}
              >
                Add another marina{" "}
                <AiOutlinePlus style={{ marginLeft:isMobile?"auto":isTablet?"5%":"auto", marginTop:isMobile?"1%":"2%" }} />{" "}
              </span>
            </div>
          </div>
          {isMobile?(<></>):(<></>)}
          <hr
        style={{
          backgroundColor: "#CCCCCC",
          marginLeft: isMobile?"":"10%",
          margin:"5% 0%"
        }}
      />
      
          <div style={{ width: isMobile ? "" : isTablet ? "fit-content" : "" ,marginLeft:isTablet?"2%":"", marginTop:isMobile?"2%":""}}>
            <h4 className="" style={HeadingStyle}>
              Cruising Range
            </h4>
            <div style={numdivStyle}>
            <input
          type="number"
          style={numberContStyle}
          onChange={handleCruisingRangeChange}
          value={formData.location.cruisingRange}
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
                  Nautical miles{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 " style={{ marginTop:isMobile?"5%":""}} >
          <img src={map} alt="" style={{ height: "85%", width:isTablet?"100%":isMobile?"100%": "", marginLeft:isTablet?"": isMobile?"":"29%" ,marginTop:isTablet?"4%":""}} />
        </div>
      </div>
    </div>
  );
}