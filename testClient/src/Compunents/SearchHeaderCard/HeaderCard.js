import React ,{ useEffect, useState } from 'react'

import { BiSearch, BiX } from "react-icons/bi";
import "./search.css";
import { HiCalendar, HiX } from "react-icons/hi";

import { BiUser, BiPlus } from "react-icons/bi";

import { MdPeopleAlt } from "react-icons/md";

import { useLocation } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import leftarrow from '../../images/leftarrow.svg'

import axios from "axios";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const label = {
  color: "#666666",
  fontFamily: "Open Sans",
  fontSize: "12px",
};

function HeaderCard({ setSearchData, setDate, setDate2 }) {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const destination1 = searchParams.get("destination");

  const [destination, setDestination] = useState(destination1);
  //   const [ResData, setResData] = useState([]);
  const [newDestination, setNewDestination] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [startDate, setStartDate] = useState(searchParams.get("start"));
  const [endDate, setEndDate] = useState(searchParams.get("end"));

  const [newstartDate, setNewStartDate] = useState(null);
  const [newendDate, setNewEndDate] = useState(null);
  // Decode the encoded response data

  // Get the values of the query parameters

  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  };
  const [formattedStartDate, setFormattedStartDate] = useState(null);
  const [formattedEndDate, setFormattedEndDate] = useState(null);
  // Format the start and end dates

  const [isEditing, setIsEditing] = useState(false);

  const handleClickDestination = () => {
    setIsEditing(true);
    setNewDestination(destination);
  };

  const handleConfirmDestination = () => {
    if (newDestination) {
      setDestination(newDestination);
    }
    setIsEditing(false);
  };

  const clearDestination = () => {
    setDestination("");
  };
  const clearDate = () => {
    setStartDate(null);
    setEndDate(null);
  };

  useEffect(() => {
    setFormattedStartDate(formatDate(startDate));
    setFormattedEndDate(formatDate(endDate));
  }, []);

  const handleSearchClick = () => {
    console.log(newDestination);
    if (newDestination.trim() === "") {
      alert("Please enter a destination.");
    } else if (startDate && endDate) {
      const apiUrl = "http://127.0.0.1:8000/api/boats/availability/";

      const formatDate = (date) => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, "0");
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const year = d.getFullYear();
        return `${year}-${month}-${day}`;
      };
      const params = {
        location: newDestination,
        from_date: formatDate(newstartDate),
        to_date: formatDate(newendDate),
      };

      axios
        .get(apiUrl, { params })
        .then((response) => {
          // Handle the response data as needed
          console.log("Response data:", response.data);
          setSearchData(response.data);
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

  const handleLabelClick = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setNewStartDate(start);
    setNewEndDate(end);
    setDate(start);
    setDate2(end)
    setStartDate(start);
    setEndDate(end);
    formatDate();
    console.log(newstartDate + " Dates " + newendDate);
  };

  console.log("st " + startDate + " " + endDate);

  //   useEffect(() => {
  //     if(showDatePicker){

  //     }
  //   }, [showDatePicker]);

  const handleClick = () => {
    setShowDatePicker(false);
  };

  return (
    <>
      {isMobile ? (
        <div className="container">
          <div
            className="row justify-content-center align-items-center mt-5"
            style={{ padding: "1%" }}
          >
            <div className="col-10 border d-flex align-items-center m-3">
              <div className="col-1">
                <img src={leftarrow} alt="" />
              </div>
              <div className="col-10">
                <div>
                  <span
                    className="input-group-text border-0 bg-transparent p-0"
                    onClick={handleClickDestination}
                    style={{ cursor: "pointer" }}
                  >
                    {isEditing ? (
                      <input
                        id="searchplaceid"
                        type="text"
                        value={newDestination}
                        onChange={(e) => setNewDestination(e.target.value)}
                        onBlur={handleConfirmDestination}
                        autoFocus
                      />
                    ) : (
                      <label style={label}></label>
                    )}
                  </span>
                  {destination && (
                    <span
                      id="destinationText"
                      onClick={handleClickDestination}
                      style={{
                        color: "#00BFFF",
                        fontFamily: "Open Sans",
                        fontWeight: "700",
                        marginLeft: "4%",
                      }}
                    >
                      {destination}
                    </span>
                  )}
                  {destination && (
                    <button
                      style={{ float: "right" }}
                      className="btn btn-outline-secondary border-0 bg-transparent p-0"
                      type="button"
                      onClick={clearDestination}
                    >
                      <BiX className="border-0" style={{ color: "#666666" }} />
                    </button>
                  )}
                </div>
                <div>
                  <span
                    onClick={handleLabelClick}
                    style={{ cursor: "pointer" }}
                  ></span>

                  {showDatePicker ? (
                    <DatePicker
                      selected={newstartDate}
                      onChange={handleDateChange}
                      startDate={newstartDate}
                      endDate={newendDate}
                      selectsRange
                      showPopperArrow={false}
                      className="form-control date-picker-input"
                      placeholderText="Pick your Dates"
                      aria-label="Select a date range"
                      aria-describedby="date-icon"
                      required
                      onClose={handleClick}
                    />
                  ) : (
                    <label onClick={handleLabelClick} style={label}></label>
                  )}
                  {formattedStartDate && formattedEndDate && (
                    <div>
                      <span
                        style={{
                          color: "#00BFFF",
                          fontFamily: "Open Sans",
                          fontWeight: "700",
                          marginLeft: "4%",
                        }}
                      >
                        {newendDate === null ? (
                          <div
                            style={{ display: "inline-block" }}
                            onClick={handleLabelClick}
                          >
                            {formattedStartDate}{" "}
                            {formattedEndDate && (
                              <CgArrowLongRight style={{ color: "#666666" }} />
                            )}{" "}
                            {formattedEndDate}
                          </div>
                        ) : (
                          <div style={{ display: "inline-block" }}>
                            {formatDate(newstartDate)}{" "}
                            {newstartDate && (
                              <CgArrowLongRight style={{ color: "#666666" }} />
                            )}{" "}
                            {formatDate(newendDate)}
                          </div>
                        )}
                      </span>

                      <button
                        style={{ float: "right" }}
                        className="btn btn-outline-secondary border-0 bg-transparent p-0"
                        type="button"
                        onClick={clearDate}
                      >
                        <BiX
                          className="border-0"
                          style={{ color: "#666666" }}
                        />
                      </button>
                    </div>
                  )}
                </div>
                <div className=" mt-3">
                  <div className="d-flex align-items-center">
                    <span
                      className="ms-2 "
                      style={{
                        color: "#666666",
                        fontFamily: "Open Sans",
                        fontWeight: "400",
                      }}
                    >
                      Capacity
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          {" "}
          <div className="row justify-content-center">
            <div
              className="col-md-10 mt-5 shadow-sm d-flex p-0"
              style={{
                borderRadius: "5px 0px 0px 5px",
                borderStyle: "none",
                borderColor: "#CCCCCC",
              }}
            >
              <div className="col-5 border" style={{ padding: "1%" }}>
                <span
                  className="input-group-text border-0 bg-transparent p-0"
                  onClick={handleClickDestination}
                  style={{ cursor: "pointer" }}
                >
                  <BiSearch
                    className="border-0"
                    style={{ marginRight: "1%" }}
                  />{" "}
                  {isEditing ? (
                    <input
                      id="searchplaceid"
                      type="text"
                      value={newDestination}
                      onChange={(e) => setNewDestination(e.target.value)}
                      onBlur={handleConfirmDestination}
                      autoFocus
                    />
                  ) : (
                    <label style={label}>DESTINATION</label>
                  )}
                </span>
                {destination && (
                  <span
                    id="destinationText"
                    style={{
                      color: "#00BFFF",
                      fontFamily: "Open Sans",
                      fontWeight: "700",
                      marginLeft: "4%",
                    }}
                  >
                    {destination}
                  </span>
                )}
                {destination && (
                  <button
                    style={{ float: "right" }}
                    className="btn btn-outline-secondary border-0 bg-transparent p-0"
                    type="button"
                    onClick={clearDestination}
                  >
                    <BiX className="border-0" style={{ color: "#666666" }} />
                  </button>
                )}
              </div>
              <div className="col-5 border" style={{ padding: "1%" }}>
                <span onClick={handleLabelClick} style={{ cursor: "pointer" }}>
                  <HiCalendar
                    className="border-0"
                    style={{ color: "#666666", marginRight: "1%" }}
                  />
                </span>

                {showDatePicker ? (
                  <DatePicker
                    selected={newstartDate}
                    onChange={handleDateChange}
                    startDate={newstartDate}
                    endDate={newendDate}
                    selectsRange
                    showPopperArrow={false}
                    className="form-control date-picker-input"
                    placeholderText="Pick your Dates"
                    aria-label="Select a date range"
                    aria-describedby="date-icon"
                    required
                    onClose={handleClick}
                  />
                ) : (
                  <label onClick={handleLabelClick} style={label}>
                    DATES
                  </label>
                )}
                {formattedStartDate && formattedEndDate && (
                  <div>
                    <span
                      style={{
                        color: "#00BFFF",
                        fontFamily: "Open Sans",
                        fontWeight: "700",
                        marginLeft: "4%",
                      }}
                    >
                      {newendDate === null ? (
                        <div style={{ display: "inline-block" }}>
                          {formattedStartDate}{" "}
                          {formattedEndDate && (
                            <CgArrowLongRight style={{ color: "#666666" }} />
                          )}{" "}
                          {formattedEndDate}
                        </div>
                      ) : (
                        <div style={{ display: "inline-block" }}>
                          {formatDate(newstartDate)}{" "}
                          {newstartDate && (
                            <CgArrowLongRight style={{ color: "#666666" }} />
                          )}{" "}
                          {formatDate(newendDate)}
                        </div>
                      )}
                    </span>

                    <button
                      style={{ float: "right" }}
                      className="btn btn-outline-secondary border-0 bg-transparent p-0"
                      type="button"
                      onClick={clearDate}
                    >
                      <BiX className="border-0" style={{ color: "#666666" }} />
                    </button>
                  </div>
                )}
              </div>
              <div className="col-2 border " style={{ padding: "1%" }}>
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <div className="d-flex align-items-center">
                    <MdPeopleAlt size={20} style={{ color: "#666666" }} />
                    <span
                      className="ms-2 "
                      style={{
                        color: "#666666",
                        fontFamily: "Open Sans",
                        fontWeight: "400",
                      }}
                    >
                      Capacity
                    </span>
                  </div>
                  <BiPlus size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col"
              style={{
                paddingLeft: isMobile ? "40%" : "50%",
                marginTop: "2%",
                width: isMobile ? "" : "300px",
              }}
            >
              {" "}
              <button
                className="btn btn-primary mb-1  rounded-pill"
                style={{ borderStyle: "none", backgroundColor: "#00BFFF" }}
                onClick={handleSearchClick}
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderCard