import React from "react";
import { useMediaQuery } from "react-responsive";
import SearchCard from "../../SearchCard/SearchCard";
import img from "../../../images/rocket.svg";
import tabimg from '../../../images/tablet_rocket.svg'
import "../home.css";



function HeaderBanner() {
  const isExtended = useMediaQuery({ minWidth: 1200 }); 
  const isMobile = useMediaQuery({ maxWidth: 576 }); 
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });

    const bannerContainer = {
      backgroundColor: isMobile ? " " : "#00BFFF",
      height: isTablet? "65vh": "85vh",
      width: "100%",
      minWidth: isMobile ? " " : isTablet ? "700px" : "1200px",
      minHeight: isMobile ? "700px" : isTablet ? "550px " : "550px",
    };

  return (
    <div className="container-fluid" style={bannerContainer}>
      <div className="row">
        {isMobile ? (
          <>
            <div
              className="col-12 "
              style={{
                paddingRight: "0px",
                backgroundColor: "#00BFFF",
                minWidth: "435px",
              }}
            >
              <img
                src={img}
                alt=""
                style={{ float: "right", width: "80%", marginTop: "10%" }}
              />
            </div>
            <div className="col-12 p-0">
              <div style={{ marginTop: isMobile ? " " : "10%" }}>
                <SearchCard heading={"Let’s find your next life experience"} />
              </div>
            </div>
          </>
        ) : isTablet ? (
          <>
            <div className=" col-7">
              <div style={{ marginTop: "10%", float: "right" }}>
                <SearchCard
                  heading={"Let’s find your next life experience"}
                  ptext={
                    " More than 40,000 private yacht rentals and bareboat charters near you and worldwide for your next boating trip"
                  }
                />
              </div>
            </div>
            <div
              className=" col-5"
              style={{ marginTop: "200px", paddingRight: "0px" }}
            >
              <img src={tabimg} alt="" style={{ float: "right", width: "90%" }} />
            </div>
          </>
        ) : (
          <>
            <div className=" col-lg-6 col-xl-7 col-md-6">
              <div style={{ marginTop: "10%", marginRight:"10%", float: "right" }}>
                <SearchCard
                  heading={"Let’s find your next life experience"}
                  ptext={
                    " More than 40,000 private yacht rentals and bareboat charters near you and worldwide for your next boating trip"
                  }
                />
              </div>
            </div>
            <div
              className=" col-lg-6 col-xl-5 col-md-6"
              style={{ marginTop: isExtended?"200px":"auto", paddingRight: "0px" }}
            >
              <img src={img} alt="" style={{ float: "right" }} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default HeaderBanner;
