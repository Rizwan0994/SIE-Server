import React from 'react'
import {
  FaShip,
  FaUserGraduate,
  FaArrowRight,
  FaUsers,
  FaShower,
  FaBed,
} from "react-icons/fa";
import { GoArrowBoth } from "react-icons/go";
import { GiCaptainHatProfile } from "react-icons/gi";
import boatCap from '../../images/boatCap.svg'
import cap from '../../images/cap.svg'
import sha from "../../images/sha.svg";
import bed from "../../images/bed.svg";
import people from "../../images/people.svg";
import doublearrow from "../../images/doublearrow.svg";
import { useMediaQuery } from "react-responsive";

function OtherFeatures({boatData}) {

  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });


  return (
    <div>
      {isMobile ? (
        <></>
      ) : isTablet ? (
        <>
          <div
            className="container  align-items-center m-2 p-2 shadow rounded"
            style={{ justifyContent: "space-evenly", color: "#666666" }}
          >
            <div className="row d-flex justify-content-center ">
              <div className="col-12 d-flex justify-content-center" style={{marginRight:"4%"}}>
                {" "}
                <span className="text-center border-end px-4">
                  <img src={boatCap} alt="" />
                  <p className="m-1">{boatData.power}</p>
                </span>
                <span className="text-center border-end px-4 ">
                  <img src={cap} alt="" />

                  <p className="m-1">Captain Optional</p>
                </span>
                <span className="text-center border-end px-4">
                  <img src={doublearrow} alt="" />
                  <p className="m-1">{boatData.size} m</p>
                </span>
              </div>
              <div className="col-10 d-flex justify-content-center pt-3">
                {" "}
                <span className="text-center border-end px-4">
                  <img src={people} alt="" />
                  <p className="m-1">{boatData.capacity}</p>
                </span>
                <span className="text-center border-end px-4">
                  <img src={sha} alt="" />
                  <p className="m-1">{boatData.amenities.shower.quantity}</p>
                </span>
                <span className="text-center px-4">
                  <img src={bed} alt="" />
                  <p className="m-1">{boatData.amenities.bed.quantity}</p>
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div
          className="d-flex align-items-center shadow m-2 p-2 rounded"
          style={{ justifyContent: "space-evenly", color: "#666666" }}
        >
          <span className="text-center border-end pe-4">
            <img src={boatCap} alt="" />
            <p className="m-1">{boatData.power}</p>
          </span>
          <span className="text-center border-end pe-4 ">
            <img src={cap} alt="" />

            <p className="m-1">Captain Optional</p>
          </span>
          <span className="text-center border-end pe-4">
            <img src={doublearrow} alt="" />
            <p className="m-1">{boatData.size} m</p>
          </span>
          <span className="text-center border-end pe-4">
            <img src={people} alt="" />
            <p className="m-1">{boatData.capacity}</p>
          </span>
          <span className="text-center border-end pe-4">
            <img src={sha} alt="" />
            <p className="m-1">{boatData.amenities.shower.quantity}</p>
          </span>
          <span className="text-center">
            <img src={bed} alt="" />
            <p className="m-1">{boatData.amenities.bed.quantity}</p>
          </span>
        </div>
      )}
    </div>
  );
}

export default OtherFeatures