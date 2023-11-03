import SearchCard from "../Compunents/SearchHeaderCard/HeaderCard";
import { BiFilter, BiCaretDown } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import Map from "../Compunents/Map/MapLoader";
import Boats from "../Compunents/Boats/Boat";
import Filter from "../Compunents/Filter/Filter";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from '../Compunents/Header/Header'
import Footer from '../Compunents/HomeSections/Footer/Footer'
import { useMediaQuery } from "react-responsive";
import Pagination from "react-bootstrap/Pagination";
//

function Search() {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });


  const containerStyle ={
    width:"100%",
      minWidth: isMobile ? "435px " : isTablet ? "700px " : "1200px " 
  }  

  const [sliderState, setSliderState] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
  const [ResData, setResData] = useState([{}]);
  const [formattedStartDate, setFormattedStartDate] = useState(null);
  const [formattedEndDate, setFormattedEndDate] = useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [destination, setDestination] = useState(
    searchParams.get("destination")
  );

  const [startDate, setStartDate] = useState(searchParams.get("start"));
  const [endDate, setEndDate] = useState(searchParams.get("end"));
   const [resData, setData] = useState([]);

  //   const encodedData = searchParams.get("data");

  //    const decodeResponseData = (encodedData) => {
  //      try {
  //        const decodedData = JSON.parse(decodeURIComponent(encodedData));
  //        return decodedData;
  //      } catch (error) {
  //        console.error("Error decoding response data:", error);
  //        return null;
  //      }
  //    };

  //    const responseData = decodeResponseData(encodedData);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleSearchClick = async () => {
      console.log(destination);
      if (destination.trim() === "") {
        alert("Please enter a destination.");
      } else if (startDate && endDate) {
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

        await  axios
          .get(apiUrl, { params })
          .then((response) => {
            // Handle the response data as needed
            console.log("Response data:", response.data);
            setResData(response.data);
            console.log("objectssacascascascascacascsacsac")
            setData(resData);
            setLoading(false);
            
          })
          .catch((error) => {
            // Handle any errors that occurred during the request
            console.error("Error:", error);
            alert("Error occurred while fetching data.");
            setLoading(false);
          });
      } else {
        // Handle case when dates are not selected or invalid input
        alert("Please select valid date range.");
      }
    };

    handleSearchClick();
  }, []);

  console.log(resData)

  const handleSliderChange = (event) => {
    setSliderState(event.target.checked);
  };

  const applyFilters = (filteredResults) => {
    console.log(filteredResults);
    setResData(filteredResults);
  };

  const date1change = (Results) => {
    console.log("s date" + Results);
    setStartDate(Results)
  };
  
  const date2change =(Results ) =>{
     console.log("e date" + Results);
     setEndDate(Results)
  }

   const sortByPriceLowToHigh = () => {
     const sortedData = [...ResData].sort((a, b) => a.price - b.price);
     setResData(sortedData);
   };

  // console.log(ResData.location);

  
    const boatsPerPage = 6;

    const indexOfLastBoat = currentPage * boatsPerPage;
    const indexOfFirstBoat = indexOfLastBoat - boatsPerPage;
    const currentBoats = ResData.slice(indexOfFirstBoat, indexOfLastBoat);

    const totalPages = Math.ceil(ResData.length / boatsPerPage);

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };


  return (
    <div>
      <Header />
      <div className="container-fluid" style={containerStyle}>
        <SearchCard
          setSearchData={applyFilters}
          setDate={date1change}
          setDate2={date2change}
        />
        <div className="row mt-5 mb-3 justify-content-center ">
          <div className="col">
            {/* <button className="btn btn-white border">
              <BiFilter className="me-2" />
              Filter
            </button> */}
            <button
              type="button"
              className="btn btn-white border"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <BiFilter className="me-2" />
              Filter
            </button>
            <Filter setFilteredBoats={applyFilters} />
          </div>

          <div
            className="col d-flex text-end"
            style={{ justifyContent: "end" }}
          >
            <div style={{ display: "contents" }}>
              <small
                className="pr-2"
                style={{
                  fontFamily: "Open Sans",
                  fontSize: "12px",
                  fontWeight: "400",
                }}
              >
                <span>Short by:</span>
              </small>
              <strong
                style={{
                  paddingLeft: "1%",
                  paddingRight: "5%",
                  fontSize: "12px",
                  fontFamily: "Open Sans",
                  fontWeight: "700",
                }}
              >
                <span onClick={sortByPriceLowToHigh}>
                  Price low to high <BiCaretDown />
                </span>
              </strong>
              <div>
                <span> Show Map</span>

                <label className="switch pl-1">
                  <input type="checkbox" onChange={handleSliderChange} />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            {/* {sliderState && <Map data={ResData[0].location} />} */}
          </div>
        </div>
        <div className="row">
          {isTablet ? (
            <>
              <div>
                <Boats
                  data={currentBoats}
                  fromdate={startDate}
                  todate={endDate}
                />
              </div>
              <div className="d-flex justify-content-center mt-4">
                <Pagination>
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <Pagination.Item
                      key={index}
                      active={index + 1 === currentPage}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
                </Pagination>
              </div>
            </>
          ) : (
            <div>
             {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {ResData.length > 0 ? ( // Render only if data is available
            <div>
              <Boats data={ResData} fromdate={startDate} todate={endDate} />
            </div>
          ) : (
            <p>No data available</p>
          )}
        </div>
      )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
