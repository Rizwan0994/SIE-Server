import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import FeatureWorks from "../../FeatureWorks/FeatureWorks";
import imgp1 from "../../../images/explore.svg";
import imgp2 from "../../../images/personalise.svg";
import imgp3 from "../../../images/bookandgo.svg";
import "../home.css";

const container = {
  // width: "60vw",
  marginLeft: "auto",
  marginRight: "auto",
};

const Heading = {
  fontFamily: "Open Sans",
  fontSize: "20px",
  fontWeight: "600",
  marginBottom: "6%",
  paddingTop: "4%",
  // minWidth: "200px",
};

function HowItWorks() {
 const isMobile = useMediaQuery({ maxWidth: 576 });

  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveCardIndex(index);
  };

  const featureCards = [
    {
      imageSource: imgp1,
      title: "Explore",
      description:
        "Find your desired destination and choose from a variety of options for rentals.",
    },
    {
      imageSource: imgp2,
      title: "Personalise",
      description:
        "See all tailored options the owners offer and select what suits you.",
    },
    {
      imageSource: imgp3,
      title: "Book and go!",
      description:
        "Complete your booking and you are all set for your next trip!",
    },
  ];

  return (
    <div style={container}>
      <div className="row justify-content-center" style={Heading}>
        HOW IT WORKS{" "}
      </div>
      {isMobile ? (
        <div className="row justify-content-center">
          <div className="carousel-container">
            <div className="carousel-card">
              <FeatureWorks {...featureCards[activeCardIndex]} />
            </div>
            <div className="dot-container">
              {featureCards.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${activeCardIndex === index ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="row d-flex justify-content-center">
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center">
            {" "}
            <FeatureWorks
              imageSource={imgp1}
              title={"Explore"}
              description={
                "Find your desired destination and choose from a variety of options for rentals."
              }
            />
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center">
            {" "}
            <FeatureWorks
              imageSource={imgp2}
              title={"Personalise"}
              description={
                "See all tailored options the owners offer and select what suits you."
              }
            />
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center">
            {" "}
            <FeatureWorks
              imageSource={imgp3}
              title={"Book and go!"}
              description={
                "Complete your booking and you are all set for your next trip!"
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default HowItWorks;
