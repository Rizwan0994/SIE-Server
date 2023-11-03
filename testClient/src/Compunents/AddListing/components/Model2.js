import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import tick from "../svgs/tick.svg";
import { FaPiEqualsBold } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BiEquals } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEquals } from "@fortawesome/free-solid-svg-icons";
import "./model.css";
import equal from '../svgs/equalsign.svg'

const HeadingStyle = {
  fontSize: "23px",
  fontWeight: "600",
  fontFamily: "Open Sans",
  marginTop: "5%",
  marginBottom: "5%",
  marginLeft: "8%",
};
const paraStyle = {
  fontSize: "15px",
  fontWeight: "400",
  fontFamily: "Open Sans",
  padding: "5% 10% 5% 10%",
};

const numdivStyle = {
  display: "flex",
  borderRadius: "8px",
  alignItems: "center",
  border: "rgb(186 185 185) solid 1px",
  width: "100%",
  padding: "10px 65px 10px 15px",
  color: "#00BFFF",
};

const numberContStyle = {
  width: "60px",
  borderStyle: "none",
  color: "#00BFFF",
  fontWeight: "600",
  borderRight: "1px solid #666666", // Border on the right side
  borderLeft: "1px solid #666666", // Border on the left side
  paddingLeft: "11%",
  margin: "0% 2%",
};

export default function Model1({
  showModal,
  handleCloseModal,
  handleContinueFromModal,
  label,
  formData,
}) {
  const [value, setValue] = useState(0);
  return (
    <>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="p-2"
      >
        <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
        <Modal.Body className="" style={{ margin: "%" }}>
          <h4 style={HeadingStyle}>{label}</h4>
          <center>
            {" "}
            <div
              style={{ marginTop: "%", display: "flex", marginBottom: "5%" }}
              className="row justify-content-center"
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ marginBottom: "5%" }}
              >
                <div className="col-lg-3 text-start">
           
                    <label> Consumption </label>
                    <div style={numdivStyle}>{value}</div>
                    <p style={{ fontSize: "12px", fontFamily: "Open Sans" }}>
                      Liters or gallons/hour
                    </p>
            
                </div>

                <div className="col-1">
                <AiOutlineClose />
                </div>
               
                <div className="col-lg-3 text-start ">
         
                    <label> Fuel Price </label>

                    <div style={numdivStyle}>{value}</div>
                    <p style={{ fontSize: "12px", fontFamily: "Open Sans" }}>
                      EUR/Liter or gallon
                    </p>
                 
                </div>
                <div className="col-1">
                <AiOutlineClose />
                </div>
                <div className="col-lg-3 text-start">
             
                <label> Cruising Hours </label>
                  <div style={numdivStyle}>{value}</div>
                  <p style={{ fontSize: "12px", fontFamily: "Open Sans" }}>
                    average/per day
                  </p>
       
                 
                </div>
              </div>

              <div
                className="d-flex align-items-center justify-content-center"
                style={{ marginBottom: "5%" }}
              >
                {" "}
                <div className="col-lg-3 text-start">
                  <label> Fuel cost </label>
                  <div style={numdivStyle}>{value}</div>
                  <p style={{ fontSize: "12px", fontFamily: "Open Sans" }}>
                  EUR/per day
                  </p>
                </div>
                <div className="col-1">
                <AiOutlinePlus />
                </div>
               
                <div className="col-lg-3 text-start">
                  <label> Mooring cost </label>
                  <div style={numdivStyle}>{value}</div>
                  <p style={{ fontSize: "12px", fontFamily: "Open Sans" }}>
                  EUR/per day
                  </p>
                </div>
                <div className="col-1">
                <FontAwesomeIcon icon={faEquals} style={{color:"#666666"}} />
                {/* <img src={equal} alt="" /> */}
                </div>
         
                <div className="col-lg-3 text-start">
                  <label> Total </label>
                  <div style={numdivStyle}>{value}</div>
                  <p style={{ fontSize: "12px", fontFamily: "Open Sans" }}>
                  EUR/per day
                  </p>
                </div>
              </div>
            </div>
            <button
              className="mb-5"
              style={{
                backgroundColor: "#00BFFF",
                fontSize: "16px",
                width: "80%",
                padding: "2.0%",
                fontWeight: "700",
                borderStyle: "none",
                borderRadius: "25px",
                color: "white",
              }}
              onClick={handleContinueFromModal}
            >
              Apply
            </button>
          </center>
        </Modal.Body>
      </Modal>
    </>
  );
}
