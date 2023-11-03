import React from 'react'
import WhyBookWithSail from "../../WhyBookWithSail/WhyBookWithSail";

import img1 from "../../../images/star.svg";
import img2 from "../../../images/thumb.svg";
import  img3  from "../../../images/trust.svg";
import img4 from "../../../images/msg.svg";
import { useMediaQuery } from "react-responsive";




function  WhySail_It_Easy() {

  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const container = {
    height: "50%",
    width: "99%",
    minWidth: isMobile ? "435px" : isTablet ? "700px" :"1200px",
   
  };

  return (
    <div class="container-fluid " style={container}>
      <div
        className="row justify-content-center"
        style={{
          fontFamily: "Playfair Display",
          color: "#333333",
          fontWeight: "700",
          fontSize: "28px",
          paddingTop: isMobile ?"10%" : isTablet?"10%":"3%",
        }}
      >
        Why book with Sail it Easy?
      </div>
      <div
        className="row justify-content-center"
        style={{
          fontFamily: "Open Sans",
          color: "#333333",
          fontWeight: "600",
          fontSize: "20px",
          paddingTop: "1%",
          paddingBottom:isMobile ? "8%":isTablet?"8%":"3%",
        }}
      >
        Sailing made easy for everyone
      </div>

      {isMobile ? (
        <div class="row d-flex  " style={{ padding: "0% 0%" }}>
          <div class="col-12  d-flex justify-content-center " style={{marginBottom:"5%"}}>
            {" "}
            <WhyBookWithSail
              image={img1}
              title={"Seamless Booking Experience"}
              description={
                "We made it effortless for you to search, compare, and book your desired boats."
              }
            />
          </div>
          <div class="col-12 d-flex justify-content-center" style={{marginBottom:"5%"}}>
            {" "}
            <WhyBookWithSail
              image={img2}
              title={"Transparent & Fair Pricing"}
              description={
                "We display all costs upfront, ensuring transparency and eliminating any hidden fees."
              }
            />
          </div>
          <div class="col-12 d-flex justify-content-center" style={{marginBottom:"5%"}}>
            {" "}
            <WhyBookWithSail
              image={img3}
              title={"Trusted & Verified Listings"}
              description={
                "Our platform verifies boat owners and hosts, ensuring the quality and reliability of the listings."
              }
            />
          </div>

          <div class="col-12 d-flex justify-content-center" style={{marginBottom:"5%"}}>
            {" "}
            <WhyBookWithSail
              image={img4}
              title={"Personalised Customer Service"}
              description={
                "We offer real-time support, tailored recommendations & flexible booking options"
              }
            />
          </div>
        </div>
      ) : isTablet ? (
        // Tablet view content
        <div
          class="row d-flex justify-content-center "
          style={{ padding: "0% 10%" }}
        >
          <div class="col-6 d-flex justify-content-center">
            {" "}
            <WhyBookWithSail
              image={img1}
              title={"Seamless Booking Experience"}
              description={
                "We made it effortless for you to search, compare, and book your desired boats."
              }
            />
          </div>
          <div class="col-6 d-flex justify-content-center">
            {" "}
            <WhyBookWithSail
              image={img2}
              title={"Transparent & Fair Pricing"}
              description={
                "We display all costs upfront, ensuring transparency and eliminating any hidden fees."
              }
            />
          </div>
          <div class="col-6 d-flex justify-content-center">
            {" "}
            <WhyBookWithSail
              image={img3}
              title={"Trusted & Verified Listings"}
              description={
                "Our platform verifies boat owners and hosts, ensuring the quality and reliability of the listings."
              }
            />
          </div>

          <div class="col-6 d-flex justify-content-center">
            {" "}
            <WhyBookWithSail
              image={img4}
              title={"Personalised Customer Service"}
              description={
                "We offer real-time support, tailored recommendations & flexible booking options"
              }
            />
          </div>
        </div>
      ) : (
        // Desktop view: Render the BlueContainer component
        <div
          class="flex-row d-flex justify-content-center "
          style={{ padding: "0% 30%" }}
        >
          <div class="col d-flex justify-content-center">
            {" "}
            <WhyBookWithSail
              image={img1}
              title={"Seamless Booking Experience"}
              description={
                "We made it effortless for you to search, compare, and book your desired boats."
              }
            />
          </div>
          <div class="col d-flex justify-content-center">
            {" "}
            <WhyBookWithSail
              image={img2}
              title={"Transparent & Fair Pricing"}
              description={
                "We display all costs upfront, ensuring transparency and eliminating any hidden fees."
              }
            />
          </div>
          <div class="col d-flex justify-content-center">
            {" "}
            <WhyBookWithSail
              image={img3}
              title={"Trusted & Verified Listings"}
              description={
                "Our platform verifies boat owners and hosts, ensuring the quality and reliability of the listings."
              }
            />
          </div>

          <div class="col d-flex justify-content-center">
            {" "}
            <WhyBookWithSail
              image={img4}
              title={"Personalised Customer Service"}
              description={
                "We offer real-time support, tailored recommendations & flexible booking options"
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default  WhySail_It_Easy