import React from 'react'
import RedCard from "../Compunents/HomeSections/RedCard/RedCard";
import BlueContainer from "../Compunents/HomeSections/BlueContainer/BlueContainer";
import HowItWorks from "../Compunents/HomeSections/HowItWorks/HowItWorks";

import WhySail_It_Easy from "../Compunents/HomeSections/Why_Sail_It_Easy/WhySail_It_Easy";
import RedCardButton from "../Compunents/UI/RedCardButton/RedCardButton";

import OurTopPicks from "../Compunents/HomeSections/OurTopPicks/OurTopPicks";
import OurFavouriteDestinations from "../Compunents/HomeSections/OurFavouriteDestinations/OurFavouriteDestinations";
import HeaderBanner from "../Compunents/HomeSections/HeaderBanner/HeaderBanner";
import Header from "../Compunents/Header/Header";
import Footer from "../Compunents/HomeSections/Footer/Footer";
import { useMediaQuery } from "react-responsive";
import BlueCont from '../images/bluecont.svg'
import Bluetab from "../images/tabletbluecont.svg";

import Tabbg from "../images/tabbg.svg";


import './home.css';
const styles = {
  container: {
    backgroundColor: "yellow",
    minHeight: "400px",
    height: "90vh", // Default height for larger screens
  },
};


function Home() {

const isMobile = useMediaQuery({ maxWidth: 576 });
const isExtended = useMediaQuery({ minWidth: 1600 });
const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
const HowItWorksStyle = {
  backgroundColor: "#ffffff",
  height: "50vh",
  width: "98.9vw",
  minHeight: isMobile  ? "450px": isTablet ? "670px" : isExtended ? "600px":"550px",
  minWidth: isMobile ? "435px " : isTablet ? "700px " : "1200px " 
};
const OurTopPicksStyles = {
  backgroundImage: `url('${isTablet ?Tabbg:""} ')`,
  minWidth: isTablet?"700px":"",
}

const OurFavDesStyle = {
  backgroundColor: "#F5F5F5",
  height: isMobile ? " 74vh" : "50vh",
  // width: isTablet ? " " : "80vw",
  minHeight:isMobile?"600px" : isTablet ? "530px " : isExtended?"560px":"540px",
  // minHeight: isMobile  ? "480px": isTablet ? "800px" : "750px",
  minWidth: isMobile ? "435px " : isTablet ? "700px " : "1200px ",
};
   
  return (
    <div style={{ minWidth: "px", backgroundColor: "white" }}>
      <div style={{ backgroundColor: "gray", minHeight: "3.7rem" }}>
        <Header />
      </div>
      <div className="">
        <HeaderBanner />
      </div>
      <div style={HowItWorksStyle}>
        <HowItWorks />
      </div>
      <div style={OurFavDesStyle}>
        <OurFavouriteDestinations />
      </div>

      <div>
        <RedCard />
      </div>

      <div style={OurTopPicksStyles}>
        <OurTopPicks />
      </div>

      {isMobile ? (
        <img 
          src={BlueCont}
          alt="Mobile Blue Container"
          style={{ width: "100vw", minWidth: "435px",marginTop:"8%" }}
        />
      ) : isTablet ? (
        <img
          src={Bluetab}
          alt="Mobile Blue Container"
          style={{ width: "100vw", minWidth: "700px" , marginTop:"-18%" }}
        />
      ) : (
        // Desktop view: Render the BlueContainer component
        <div style={{ backgroundColor: "blue" }}>
          <BlueContainer />
        </div>
      )}
      <div style={{ backgroundColor: "white" }}>
        <WhySail_It_Easy />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home