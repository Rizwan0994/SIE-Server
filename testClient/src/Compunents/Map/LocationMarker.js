
import {GrLocation} from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";
import location from './location_icon.svg'

import React from "react";

const LocationMarker = ({ lat, lng, name, onClick }) => {
  return (
    <div onClick={onClick} style={{ color: "red", fontSize: "20px" }}>
      <img src={location} alt="" />
      {/* {name} */}
      {/* <FaMapMarkerAlt size={40} color="red" /> */}
    </div>
  );
};

export default LocationMarker;