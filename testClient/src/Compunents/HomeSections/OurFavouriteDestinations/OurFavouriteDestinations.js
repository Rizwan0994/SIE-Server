import BoatCard from "../../BoatCard/BoatCard";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import card1 from "../../../images/card1.svg";
import card2 from "../../../images/card2.svg";
import card3 from "../../../images/card3.svg";
import FavouriteDestinationCard from "../../FavouriteDestinationCard/FavouriteDestination";
import { useMediaQuery } from "react-responsive";
import pic1 from '../../../images/OurFavDes1.svg'
import pic2 from '../../../images/OurFavDes2.svg'
import pic3 from '../../../images/OurFavDes3.svg'
import dot from '../../../images/dot.svg'
import {Link} from 'react-router-dom'
// import "./topstyles.css";

const iconStyle = {
  fontSize: "30px",
  padding: "4px",
  borderRadius: "50%",
  backgroundColor: "#00BFFF",
  color: "white",
};

function OurFavouriteDestinations() {
   const isMobile = useMediaQuery({ maxWidth: 576 });
   const isExtraLarge = useMediaQuery({ minWidth: 1200 });
   const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const handleDotClick = (index) => {
      setActiveCardIndex(index);
    };

     const featureCards = [
       {
         imageSource: card1,
         title: "Paros",
       },
       {
         imageSource: card2,
         title: "Corfu",
       },
       {
         imageSource: card3,
         title: "Santorini",
       },
     ];

  const container = {
   backgroundColor:"",
    width: isTablet ? " " : isExtraLarge? "60%" : isMobile ? "90%":"80%",
  };

  

  return (
    // <div style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container-fluid " style={container}>

      <div
          className="row justify-content-center"
          style={{
            fontFamily: "Open Sans",
            color: "#666666",
            fontWeight: "600",
            fontSize: "20px",
            paddingTop: isMobile?"10%" : isTablet ? "5% " : "3%",
            paddingBottom: isMobile?"3%" : isTablet ? "2% " : "1%",
          }}
        >
          SUBHEAD TITLE HERE
        </div>
        <div
          className="row justify-content-center"
          style={{
            fontFamily: "Playfair Display",
            color: "#333333",
            fontWeight: "700",
            fontSize: "22px",
            paddingBottom: isMobile?"3%" : isTablet ? "2% " : "1%",
          }}
        >
          Our favourite destinations
        </div>
        <div
          className="row justify-content-center"
          style={{
            fontFamily: "Open Sans",
            color: "#333333",
            fontWeight: "400",
            fontSize: "16px",
            paddingBottom: isMobile?"3%" : isTablet ? "% " : "3%",
          }}
        >
          Description text goes here
        </div>
        {/*  */}
        {isMobile ? (
          // Mobile layout
          <div>
            <div
              className="col-12 d-flex justify-content-center"
              style={{ height: "15vh",marginBottom:"10px" }}
            >
              <FavouriteDestinationCard image={pic1} title={"Paros"} />
            </div>
            <div
              className="col-12 d-flex justify-content-center"
              style={{ height: "15vh",marginBottom:"10px" }}
            >
              <FavouriteDestinationCard image={pic2} title={"Corfu"} />
            </div>
            <div
              className="col-12 d-flex justify-content-center"
              style={{ height: "15vh",marginBottom:"10px" }}
            >
              <FavouriteDestinationCard image={pic3} title={"Santorini"} />
            </div>
            <center>  <Link to="" style={{color:"#666666" ,fontSize:"14px", fontFamily:"Open Sans"}}> Discover more destinations
            </Link></center>
          
          </div>
        ) : isTablet ? (
          <>
          <div className="row justify-content-center mt-5 px-3" style={{height:"200px"}}>
            <div
              class="col-4 d-flex justify-content-center p-0"
             
            >
              <FavouriteDestinationCard
                image={card1}
                title={"Paros"}
               
              />
            </div>
            <div
              class="col-4 d-flex justify-content-center p-0"
              
            >
              <FavouriteDestinationCard
                image={card2}
                title={"Corfu"}
              
              />
            </div>
            <div
              class="col-4 d-flex justify-content-center p-0"
              
            >
              <FavouriteDestinationCard
                image={card3}
                title={"Santorini"}
                
              />
            </div>
           
          
          </div>
         <center className="mt-3">
         <img src={dot} alt="" />
         </center>
        
          </>
          
        ) : (
          <div
            class="flex-row d-flex justify-content-center "
            style={{
              // minHeight: "450px",
              // width: "700px",
              // paddingTop: "50px",
              // marginLeft: "auto",
              // marginRight: "auto",
              height:"300px"
            }}
          >
            {/* Normal layout for larger screens */}
            <Col
              className=" d-flex align-items-center justify-content-center  "
              // style={{ marginTop: "-100px" }}
            >
              <IoIosArrowBack style={iconStyle} />
            </Col>
            <div
              class="col-3 d-flex justify-content-center"
              style={{ width: "33.33%" }}
            >
              <FavouriteDestinationCard
                image={card1}
                title={"Paros"}
                description={"The unrivalled natural beauty"}
              />
            </div>
            <div
              class="col-3 d-flex justify-content-center"
              style={{ width: "33.33%" }}
            >
              <FavouriteDestinationCard
                image={card2}
                title={"Corfu"}
                description={"Stunning natural landscape"}
              />
            </div>
            <div
              class="col-3 d-flex justify-content-center"
              style={{ width: "33.33%" }}
            >
              <FavouriteDestinationCard
                image={card3}
                title={"Santorini"}
                description={"Astonishing volcanic scenery"}
              />
            </div>
            <Col
              className=" d-flex align-items-center justify-content-center"
              // style={{ marginTop: "-100px" }}
            >
              <IoIosArrowForward style={iconStyle} />
            </Col>
          </div>
        )}
        {/*  */}
      </div>
    // </div>
  );
}

export default OurFavouriteDestinations;
