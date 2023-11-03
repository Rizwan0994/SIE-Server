// import BoatCard from "../../BoatCard/BoatCard";
// import { Container, Row, Col, Carousel } from "react-bootstrap";
// import React from 'react'
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import RoundedFilledButton from "../../UI/RoundedFilledButton/RoundedFilledButton";

// import bg from "../../../images/bg.svg";

// function OurTopPicks() {
//   return (

//     <div class="container-fluid " >
//       <center>
//       <div className="justify-content-center" style={{width:"85vw"}}>
//       <div
//         className="row justify-content-center"
//         style={{
//           fontFamily: "Playfair Display",
//           color: "#333333",
//           fontWeight: "700",
//           fontSize: "28px",

//           paddingTop: "2%",
//         }}
//       >
//         Our top picks for you
//       </div>
//       <div
//         className="row justify-content-center"
//         style={{
//           fontFamily: "Open Sans",
//           color: "#333333",
//           fontWeight: "400",
//           fontSize: "16px",
//           paddingTop: "0.5%",
//           paddingBottom: "2%",
//         }}
//       >
//         Description text goes here
//       </div>
//       <div class="flex-row d-flex justify-content-center ">
//         <Col className=" d-flex align-items-center justify-content-center  ">
//           <IoIosArrowBack />
//         </Col>
//         <div class="col-3 d-flex justify-content-center">
//           {" "}
//           <BoatCard />
//         </div>
//         <div class="col-3 d-flex justify-content-center mx-3">
//           {" "}
//           <BoatCard />
//         </div>
//         <div class="col-3 d-flex justify-content-center">
//           {" "}
//           <BoatCard />
//         </div>
//         <Col className=" d-flex align-items-center justify-content-center">
//           <IoIosArrowForward  />
//         </Col>
//       </div>

//       <div className="row mt-5 mb-3 justify-content-center">
//         <div className="col text-center">
//           <RoundedFilledButton
//             // style={{ marginTop: "25%" }}
//             fontWeight={"700"}
//             backgroundColor={"#00BFFF"}
//             name={"   Browse all listings"}
//             style={{ fontSize: "16px" }}
//           />
//         </div>
//       </div>
//       </div>
//       </center>
//     </div>
//   );
// }

// export default OurTopPicks

import BoatCard from "../../BoatCard/BoatCard";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import RoundedFilledButton from "../../UI/RoundedFilledButton/RoundedFilledButton";
import { useMediaQuery } from "react-responsive";
import bg from "../../../images/bg.svg";
import mbg from "../../../images/mobiletopbg.svg";

import lgbg from "../../../images/top_pick_lg.svg";

const iconStyle = {
  fontSize: "30px",
  padding: "4px",
  backgroundColor: "#00BFFF",
  borderRadius: "50%",
  color: "white",
};

function OurTopPicks() {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const isExtended = useMediaQuery({ maxWidth: 1200 });
  const isXL = useMediaQuery({ minWidth: 1200 });
  const container = {
    minWidth: isMobile ? "435px " : isTablet ? "700px " : "1200px ",
    minHeight: isMobile ? " " : "800px",
    backgroundImage: isTablet ? 'none' : `url('${isMobile ? mbg : isExtended ? lgbg : bg}')`,
    backgroundSize: isMobile ? "contain" : "cover",
    padding: isTablet
      ? "20% 0% 27% 0%"
      : isXL
      ? "100px 0% 10% 0%"
      : isMobile
      ? "100px 0% 0% 0%"
      : "100px 0% 10% 0%",
    position: "relative",
    backgroundRepeat: isExtended ? "cover" : "round",
    marginTop: isTablet ? "13%" : "",
    marginBottom: isXL ? "-6%" : isExtended ? "-8%" : "",
  };

  return (
    <div class="container-fluid " style={container}>
      <div
        style={{
          width: isMobile ? " " : isTablet ? " " : " 1200px",
          margin: "auto",
          marginTop: isMobile
            ? " "
            : isTablet
            ? " "
            : isExtended
            ? " 5%"
            : " 2%",
        }}
      >
        <div
          className="row justify-content-center"
          style={{
            fontFamily: "Playfair Display",
            color: "#333333",
            fontWeight: "700",
            fontSize: "28px",
            paddingTop: isMobile ? "%" : isTablet ? "" : "4%",
          }}
        >
          Our top picks for you
        </div>
        <div
          className="row justify-content-center"
          style={{
            fontFamily: "Open Sans",
            color: "#333333",
            fontWeight: "400",
            fontSize: "16px",
            paddingTop: "0.5%",
            paddingBottom: isMobile ? "6%" : "3%",
          }}
        >
          Description text goes here
        </div>
        {isMobile ? (
          <>
            <div class="row d-flex justify-content-center ">
              <div
                class="col-12 d-flex justify-content-center"
                style={{ padding: "2%" }}
              >
                {" "}
                <BoatCard />
              </div>
              <div
                class="col-12 d-flex justify-content-center"
                style={{ padding: "2%" }}
              >
                {" "}
                <BoatCard />
              </div>
              <div
                class="col-12 d-flex justify-content-center"
                style={{
                  padding: "2%",
                  paddingBottom: "0px",
                  backgroundColor: "white",
                }}
              >
                {" "}
                <BoatCard />
              </div>
            </div>
          </>
        ) : isTablet ? (
          // Tablet view content
          <>
            <div
              className="row justify-content-center "
              style={{ padding: "20px", paddingTop: "" }}
            >
              <div className="col-6 d-flex justify-content-center">
                <BoatCard />
              </div>
              <div className="col-6 d-flex justify-content-center ">
                <BoatCard />
              </div>
            </div>
            <div
              className="row justify-content-center "
              style={{ padding: "20px" }}
            >
              <div className="col-6 d-flex justify-content-center">
                <BoatCard />
              </div>
              <div className="col-6 d-flex justify-content-center ">
                <BoatCard />
              </div>
            </div>
          </>
        ) : (
          // For mobile view, render each BoatCard in a separate row
          <>
            <div class="flex-row d-flex justify-content-center ">
              <Col className=" d-flex align-items-center justify-content-center  ">
                <IoIosArrowBack style={iconStyle} />
              </Col>
              <div class="col-3 d-flex justify-content-center">
                {" "}
                <BoatCard />
              </div>
              <div class="col-3 d-flex justify-content-center mx-3">
                {" "}
                <BoatCard />
              </div>
              <div class="col-3 d-flex justify-content-center">
                {" "}
                <BoatCard />
              </div>
              <Col className=" d-flex align-items-center justify-content-center">
                <IoIosArrowForward style={iconStyle} />
              </Col>
            </div>
          </>
        )}
        <div
          className="row  justify-content-center"
          style={{
            paddingTop: "5%",
            paddingBottom: "5%",
            backgroundColor:isMobile? "white":"",
          }}
        >
          <div className="col text-center">
            {isMobile ? (
              <>
                <button
                  style={{
                    backgroundColor: "#00BFFF",
                    fontSize: "16px",
                    width: "90%",
                    padding: "2.5%",
                    fontWeight: "700",
                    borderStyle: "none",
                    borderRadius: "25px",
                    color: "white",
                  }}
                >
                  Browse all listings
                </button>
              </>
            ) : (
              <RoundedFilledButton
                // style={{ marginTop: "25%" }}
                fontWeight={"700"}
                backgroundColor={"#00BFFF"}
                name={"   Browse all listings"}
                style={{
                  fontSize: "16px",
                  width: isMobile ? "90%" : "",
                  padding: "2.5%",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTopPicks;
