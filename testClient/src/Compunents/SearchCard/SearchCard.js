import React from 'react'
import Card from "react-bootstrap/Card";
import InputDestination from '../UI/SearchInput/SearchInputField'
import InputDate from '../UI/DatePicker/DatePickerField'
import RoundedFilledButton from "../UI/RoundedFilledButton/RoundedFilledButton";
import { useState } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import {useNavigate} from "react-router-dom"



const Cardheading = {
    fontWeight:"700",
    fontFamily:"Playfair Display",
    fontSize:"36px"
}
const CardText = {
  fontWeight: "400",
  fontFamily: "Open Sans",
  fontSize:"16px"
};

const btnStyle = {
    marginTop:"25%"
}

function SearchCard(props) {
  const navigate = useNavigate();
   const isMobile = useMediaQuery({ maxWidth: 576 }); // Adjust the max width as needed for mobile view
   const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });

   const cardStyle = {
     minWidth: isMobile ? "435px" : isTablet ? "96%" : "27rem",
     width: isMobile ? "100%" : isTablet ? "97% " : "27rem",
     minHeight: isMobile ? "24rem" : isTablet ? " 96%" : "27rem",
     height: isMobile ? "24rem" : isTablet ? "96% " : "25rem",
     boxShadow: isMobile ? "0px 0px 10px rgba(0, 0, 0, 0.2)" : "none",
     marginTop:isTablet?"5%":"",
     marginLeft:isTablet?"8%":""
   };

   const [startDate, setStartDate] = useState(null);
   const [endDate, setEndDate] = useState(null);
   const [destination, setDestination] = useState("");

const handleDestinationChange = (newDestination) => {
  setDestination(newDestination);
};

 const handleDateChange = (dates) => {
   const [start, end] = dates;
   setStartDate(start);
   setEndDate(end);
   console.log(destination + " "+start + "  " + end);
 };


   const handleSearchClick = () => {
    if (destination.trim() === "") {

      alert("Please enter a destination.");
    } else if (startDate && endDate) {
//
//http://localhost:8000/api/boats/availability/
/// location/${location}/from/${dateFrom}/to/${dateTo
     
      const formatDate = (date) => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, "0");
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const year = d.getFullYear();
        return `${year}-${month}-${day}`;
      };

      const apiUrl = `https://sie-server.onrender.com/api/ships/location/${destination}/from/${formatDate(startDate)}/to/${formatDate(endDate)}`;

      const params = {
        location: destination,
        from_date: formatDate(startDate),
        to_date: formatDate(endDate),
      };

      // Make the GET request using Axios  ,{params}
      axios
        .get(apiUrl)
        .then((response) => {
          // Handle the response data as needed
          console.log("Response data:", response.data);
          // Now you can navigate to the search page or perform other actions
          navigateToSearchPage(startDate, endDate, destination);
        })
        .catch((error) => {
          // Handle any errors that occurred during the request
          console.error("Error:", error);
          alert("Error occurred while fetching data.");
        });
    } else {
      // Handle case when dates are not selected or invalid input
      alert("Please select valid date range.");
    }
  };

  
  const navigateToSearchPage = (
    startDate,
    endDate,
    destination
  ) => {

    const queryString = `?start=${startDate}&end=${endDate}&destination=${destination}`;
    const searchPagePath = "/search" + queryString;
    navigate(searchPagePath)

  };


  return (
    <Card style={cardStyle}>
      <Card.Body style={{ padding: isTablet?"7%": "9%" }}>
        <Card.Title style={Cardheading}>
          {props.heading}
        </Card.Title>
        <Card.Text style={CardText}>
      {props.ptext}
        </Card.Text>
        <div style={{ marginTop: "10%" }}>
          <InputDestination
            destination={destination}
            onDestinationChange={handleDestinationChange}
          />
        </div>
        <div style={{ marginTop: "3%" }}>
          <InputDate
            startDate={startDate}
            endDate={endDate}
            onDateChange={handleDateChange}
          />
        </div>

        <div className="d-flex justify-content-end" style={{ marginTop: "7%" }}>
        {isMobile ? (
  <button style={{fontWeight:"700", backgroundColor: "#00BFFF", width: "-webkit-fill-available", borderStyle: "none", color: "white", borderRadius: "20px", padding: "8px" }}>
    Lets go
  </button>
) : (
  <RoundedFilledButton
    buttonClick={handleSearchClick}
    fontWeight={"700"}
    backgroundColor={"#00BFFF"}
    name={"Lets go"}
  />
)}

          {/**/}
        </div>
      </Card.Body>
    </Card>
  );
}

export default SearchCard;