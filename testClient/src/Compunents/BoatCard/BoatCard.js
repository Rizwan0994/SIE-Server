import React from 'react'
import { Carousel } from "react-bootstrap";
import { FaHeart, FaStar, FaUserFriends, FaDollarSign } from "react-icons/fa";
import { GoArrowBoth } from "react-icons/go";
import { RiSpeedUpFill } from "react-icons/ri";
import { GrSettingsOption } from "react-icons/gr";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaTachometerAlt } from "react-icons/fa";

const iconsColor = {
    color:"#858C94"
}

function BoatCard() {
  return (
    <div>
      <div
        className="card  m-0 p-0 shadow"
        style={{
       
          borderRadius: "30px",
          overflow: "hidden",
          borderStyle: "none",
        }}
      >
        <Carousel controls={false}>
          <Carousel.Item>
            <img
              src="https://www.greecetravelsecrets.com/wp-content/uploads/2019/10/IMG_9088-1080x675.jpg"
              className="d-block w-100"
              alt="Image 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://www.greecetravelsecrets.com/wp-content/uploads/2019/10/IMG_9088-1080x675.jpg"
              className="d-block w-100"
              alt="Image 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://www.greecetravelsecrets.com/wp-content/uploads/2019/10/IMG_9088-1080x675.jpg"
              className="d-block w-100"
              alt="Image 3"
            />
          </Carousel.Item>
        </Carousel>
        <div className="card-body">
          <div>
            <span style={{ position: "absolute", top: "10px", right: "10px" }}>
              <FaHeart />
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <p className="card-text"  style={{fontFamily:"Open Sans",fontWeight:"400",fontSize:"16px"}}>Powerboats, Pontoons</p>
            <span>
              <FaStar
                style={{
                  color: "#00AEEF",
                  fontSize: "15px",
                  marginTop: "-5px",
                }}
              />
              <span style={{ padding: "0px 10px 0px 10px " }}>4.5 (32) </span>
            </span>
          </div>
          <h5 className="card-title justify-content-between" style={{fontFamily:"Open Sans",fontWeight:"700",fontSize:"20px"}}>Boat/Experience name her...</h5>
          <p className="card-text"style={{fontFamily:"Source Sans Pro",fontWeight:"400",fontSize:"14px"}}>NAOUSA, PAROS, GREECE</p>
          <div className="d-flex justify-content-start">
            <p className="card-text">
              <FaUserFriends style={{ color: "#858C94" }} />{" "}
              <span style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                2-4 Guests
              </span>
            </p>
            <p className="card-text">
              <GoArrowBoth style={{ color: "#858C94" }} />{" "}
              <span style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                10m{" "}
              </span>
            </p>
            <p className="card-text">
              <FaTachometerAlt style={{ color: "#858C94" }} />
              <span style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                150hp
              </span>
            </p>
          </div>
          <div className="mb-2">
            <p className="card-text">
              <GrSettingsOption style={{ color: "#858C94" }} />{" "}
              <span style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                With or Without crew
              </span>{" "}
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="card-text">
              <FaDollarSign style={{ color: "#858C94" }} />{" "}
              <span style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                Crew Estimated Price: <b>1000</b> /per day
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoatCard


// 

