import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import CustomSelect from "../Custom/Step8Select";
import CustomTimePicker from "../Custom/TimePicker";
import useNumberInput from "../Custom/InputNumber";
import step8 from "../svgs/step8.svg";
import Step8mb from "../svgs/step8mb.svg";
import "../Custom/style.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const container = {
  height: "85vh",
};

const HeadingStyle = {
  fontSize: "20px",
  fontWeight: "600",
  fontFamily: "Open Sans",
};

const SetStyle = {
  fontSize: "16px",
  fontWeight: "400",
  fontFamily: "Open Sans",
};

export default function Step9({ formData, setFormData }) {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isExtended = useMediaQuery({ minWidth: 1600 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 990 });
  const islaptop_isTablet = useMediaQuery({ minWidth: 577, maxWidth: 990 });
  const isDesktop = useMediaQuery({ minWidth: 990, maxWidth: 1230 });
  const isXL = useMediaQuery({ minWidth: 990, maxWidth: 1230 });

  const labelStyle = {
    fontSize: "18px",
    fontWeight: "400",
    fontFamily: "Open Sans",
    marginLeft: isMobile ? "" : "3%",
    // marginRight:isMobile?"4%":""
  };

  const FromDateStyle = {
    width: isMobile ? "50%" : isTablet ? "160px" : "160px",
    marginRight: isTablet ? "3%" : "",
  };

  const checkinStyle = { marginRight: "4%", width: isMobile ? "50%" : "" };
  const timeContStyle = {
    // display: "flex",
    borderRadius: "8px",
    alignItems: "center",
    border: "rgb(186 185 185) solid 1px",
    width: isMobile ? "" : isTablet ? "" : "",
    padding: isMobile ? "2%" : isTablet ? "2%" : "4%",
    marginBottom: isMobile ? "2%" : "",
  };
  const preperationContStyle = {
    // display: "flex",
    borderRadius: "8px",
    alignItems: "center",
    border: "rgb(186 185 185) solid 1px",
    width: isMobile ? "" : isTablet ? "" : "",
    padding: "2%",
    marginBottom: isMobile ? "2%" : "",
  };

  const timeStyle = {
    // display: "flex",
    borderRadius: "8px",
    alignItems: "center",
    border: "rgb(186 185 185) solid 1px",
    width: isMobile ? "" : isTablet ? "" : "",
    padding: isMobile ? "2%" : isTablet ? "2%" : "6%",
    marginBottom: isMobile ? "2%" : "",
  };

  const hrStyle = {
    backgroundColor: "#CCCCCC",
    marginLeft: isMobile ? "" : "10%",
    margin: isMobile ? "5% 2%" : "5% 0%",
    width: isMobile ? "96%" : "",
  };
  const numdivStyle = {
    display: "flex",
    borderRadius: "8px",
    alignItems: "center",
    border: "rgb(186 185 185) solid 1px",
    width: isMobile ? "" : "fit-content",
    padding: isMobile ? "2% 4%" : isTablet ? "2% 4%" : "2%",
    color: "",
    marginRight: isMobile ? "3%" : "4%",
  };
  const numberContStyle = {
    width: isMobile ? "100%" : "60px",
    borderStyle: "none",
    color: "#00BFFF",
    fontWeight: "600",
    borderRight: "1px solid #666666", // Border on the right side
    // borderLeft: "1px solid #666666", // Border on the left side
    paddingLeft: isTablet ? "10%" : "10%",
    margin: "0% 2%",
  };

  const dateContStyle = {
    // display: "flex",
    marginRight: isMobile ? "4%" : isTablet ? "" : "4%",
    borderRadius: "8px",
    alignItems: "center",
    border: "rgb(186 185 185) solid 1px",
    width: isMobile ? "" : isTablet ? "" : "",
    padding: isMobile ? "7%" : isTablet ? "8%" : "8%",
    marginBottom: isMobile ? "2%" : "",
  };

  const [selectedTime, setSelectedTime] = useState("");
  const [selectedValue, setSelectedValue] = useState("10%");
  const [selectedOption, setSelectedOption] = useState("option1"); // Initialize with one of the options

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection", // Make sure to include the 'key' property
    },
  ]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);

    if (e.target.value === "available") {
      setFormData((prevData) => ({
        ...prevData,
        calendar: {
          ...prevData.calendar,
          available: true,
        },
      }));
    } else if (e.target.value === "unavailable") {
      setFormData((prevData) => ({
        ...prevData,
        calendar: {
          ...prevData.calendar,

          available: false,
        },
      }));
    }
  };
  const handleTimeChange = (value, field) => {
    setFormData((prevData) => ({
      ...prevData,
      calendar: {
        ...prevData.calendar,
        [field]: value,
      },
      // other form data fields if necessary
    }));
  };

  const handleSelectChange = (value, field) => {
    setFormData((prevData) => ({
      ...prevData,
      calendar: {
        ...prevData.calendar,
        [field]: value,
      },
      // other form data fields if necessary
    }));
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleDateChange = (ranges) => {
    setDateRange([ranges.selection]); // Update the local state of dateRange
    setFormData((prevData) => ({
      ...prevData,
      calendar: {
        ...prevData.calendar,
        date_from: ranges.selection.startDate,
        date_to: ranges.selection.endDate,
      },
      // Other fields in the form data
    }));
  };

  const formatSelectedDate = (date) => {
    if (date) {
      const options = { day: "numeric", month: "short", year: "numeric" };
      return date.toLocaleDateString("en-US", options);
    }
    return "Date";
  };

  const { price } = formData.calendar;

  const handleDurationChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      calendar: {
        ...prevData.calendar,
        price: {
          ...prevData.calendar.price,
          duration: value,
        },
      },
    }));
  };

  // This function updates the formData when the amount field changes
  const handleAmountChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      calendar: {
        ...prevData.calendar,
        price: {
          ...prevData.calendar.price,
          amount: value,
        },
      },
    }));
  };

  // This function updates the formData when the currency field changes
  const handleCurrencyChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      calendar: {
        ...prevData.calendar,
        price: {
          ...prevData.calendar.price,
          currency: value,
        },
      },
    }));
  };
  console.log(formData);

  return (
    // className={"container-fluid"}
    <div className="container-fluid" style={container}>
      <div
        className="row justify-content-center"
        style={{ marginBottom: "2%" }}
      >
        <div
          className="col-12 col-sm-11 col-md-10 col-lg-9"
          style={{ marginTop: "3%" }}
        >
          <img src={isMobile ? Step8mb : step8} width="100%" alt="" />
        </div>
      </div>
      {/* row 1 col 1  */}
      <div className="row justify-content-center d-sm-flex">
        <div className=" col-12 col-sm-4 col-xl-3">
          <h4 className="pb-2" style={HeadingStyle}>
            Check in
          </h4>

          <div className="d-flex">
            <div style={checkinStyle}>
              <span style={{}}> From</span>
              <div className="d-grid" style={timeContStyle}>
                <input
                  style={{ borderStyle: "none" }}
                  class="form-control"
                  id="kt_timepicker_1"
                  readonly
                  placeholder="Select time"
                  onChange={(e) =>
                    handleTimeChange(e.target.value, "checkin_from")
                  }
                  type="time"
                />
              </div>
            </div>

            <div style={{ width: isMobile ? "50%" : "" }}>
              <span style={{}}>To</span>
              <div className="d-grid" style={timeContStyle}>
                <input
                  style={{ borderStyle: "none" }}
                  class="form-control"
                  id="kt_timepicker_1"
                  readonly
                  placeholder="Select time"
                  onChange={(e) =>
                    handleTimeChange(e.target.value, "checkin_to")
                  }
                  type="time"
                />
              </div>
            </div>
          </div>
          <hr />
          {/* row 2 col 1  */}
          <h4 className="pb-2" style={HeadingStyle}>
            Check out
          </h4>

          <div className="d-flex">
            <div style={{ width: "50%", marginRight: "4%" }}>
              <span style={{}}> Regular</span>
              <div className="d-grid" style={timeContStyle}>
                <select
                  className="form-select"
                  style={{ borderStyle: "none" }}
                  aria-label="Default select example"
                  onChange={(e) =>
                    handleSelectChange(e.target.value, "checkout_regular")
                  }
                >
                  <option value="flexible">Flexible</option>
                  <option value="not_flexible">Not Flexible</option>
                </select>
              </div>
            </div>

            <div style={{ width: isMobile ? "50%" : "" }}>
              <span style={{}}>For day use</span>
              <div className="d-grid" style={timeStyle}>
                <select
                  className="form-select"
                  style={{ borderStyle: "none" }}
                  aria-label="Default select example"
                  onChange={(e) =>
                    handleSelectChange(e.target.value, "checkout_fordayuse")
                  }
                >
                  <option value="flexible">Flexible</option>
                  <option value="not_flexible">Not Flexible</option>
                </select>
              </div>
            </div>
          </div>

          <hr />
          {/* row 3 col 1  */}
          <h4 className="pb-2" style={HeadingStyle}>
            Minimum stay
          </h4>
          <div className="d-flex">
            <div style={checkinStyle}>
              <span style={{}}> From</span>
              <div className="d-grid" style={timeContStyle}>
                <select
                  className="form-select"
                  style={{ borderStyle: "none" }}
                  aria-label="Default select example"
                  onChange={(e) =>
                    handleSelectChange(e.target.value, "minimum_stay_from")
                  }
                >
                  <option value="day">Day</option>
                  <option value="2days">2 days</option>
                </select>
              </div>
            </div>

            <div style={{ width: isMobile ? "50%" : "" }}>
              <span style={{}}>To</span>
              <div className="d-grid" style={timeContStyle}>
                <select
                  className="form-select"
                  style={{ borderStyle: "none" }}
                  aria-label="Default select example"
                  onChange={(e) =>
                    handleSelectChange(e.target.value, "minimum_stay_to")
                  }
                >
                  <option value="no_limit">No limit</option>
                  <option value="limit">limit</option>
                </select>
              </div>
            </div>
          </div>

          <hr />
          {/* row 4 col 1  */}
          <h4 className="pb-2" style={HeadingStyle}>
            Preperation time
          </h4>
          <div className="" style={preperationContStyle}>
            <select
              className="form-select"
              style={{ borderStyle: "none" }}
              aria-label="Default select example"
              onChange={(e) =>
                handleSelectChange(e.target.value, "preperation_time")
              }
            >
              <option value="none">None</option>
              <option value="other">Other</option>
            </select>
          </div>

          <hr />
          <h4 className="pb-2" style={HeadingStyle}>
            Booking window
          </h4>
          <div className="" style={preperationContStyle}>
            <select
              className="form-select"
              style={{ borderStyle: "none" }}
              aria-label="Default select example"
              onChange={(e) =>
                handleSelectChange(e.target.value, "booking_window")
              }
            >
              <option value="always_available">Always available</option>
              <option value="not_sure">Not sure</option>
            </select>
          </div>
        </div>
        {/* align-items-center */}
        <div className="col-sm-7 d-lg-flex justify-content-xl-evenly">
          <div className=" col-sm-12 col-lg-6   ">
            <p style={SetStyle}>
              Set your availability by selecting the days you want to modify
            </p>
            {/* style={{width:isMobile?"-webkit-fill-available":""}} */}
            <DateRange
              ranges={dateRange} // Pass the array with the date range object(s)
              onChange={handleDateChange}
            />
            <div className="text-center">
              <span
                href="#"
                style={{
                  fontWeight: "400",
                  fontFamily: "Open Sans",
                  color: "#00BFFF",
                  textDecoration: "none",
                }}
              >
                Auto sync calendar
              </span>
            </div>
          </div>
          <div className="col-lg-6" style={{ marginTop: "7%" }}>
            <div className="d-grid">
              {isMobile ? (
                <div className="d-flex">
                  <label style={labelStyle}>Available</label>
                  <input
                    style={{ marginLeft: "auto", marginRight: "2%" }}
                    type="radio"
                    name="options"
                    value="available"
                    checked={selectedOption === "available"}
                    onChange={handleOptionChange}
                  />
                </div>
              ) : (
                <div>
                  <input
                    type="radio"
                    name="options"
                    value="available"
                    checked={selectedOption === "available"}
                    onChange={handleOptionChange}
                  />
                  <label style={labelStyle}>Available</label>
                </div>
              )}

              {isMobile ? (
                <div className="d-flex">
                  <label style={labelStyle}>Unavailable</label>
                  <input
                    style={{ marginLeft: "auto", marginRight: "2%" }}
                    type="radio"
                    name="options"
                    value="unavailable"
                    checked={selectedOption === "unavailable"}
                    onChange={handleOptionChange}
                  />
                </div>
              ) : (
                <div>
                  <input
                    type="radio"
                    name="options"
                    value="unavailable"
                    checked={selectedOption === "unavailable"}
                    onChange={handleOptionChange}
                  />
                  <label style={labelStyle}>Unavailable</label>
                </div>
              )}

              {/* <p>Selected Option: {selectedOption}</p> */}

              <div
                className="d-flex"
                style={{ marginTop: isMobile ? "4%" : isTablet ? "4%" : "" }}
              >
                <div style={FromDateStyle}>
                  <span style={{}}> From</span>
                  <div className="d-grid" style={dateContStyle}>
                    {dateRange[0].startDate ? (
                      <>{formatSelectedDate(dateRange[0].startDate)}</>
                    ) : (
                      <>From date</>
                    )}
                  </div>
                </div>

                <div
                  style={{
                    width: isMobile ? "50%" : isTablet ? "160px" : "160px",
                  }}
                >
                  <span style={{ width: isMobile ? "50%" : "" }}>To</span>
                  <div className="d-grid" style={dateContStyle}>
                    {dateRange[0].endDate ? (
                      <>{formatSelectedDate(dateRange[0].endDate)}</>
                    ) : (
                      <>To date</>
                    )}
                  </div>
                </div>
              </div>

              <span style={{ marginTop: isMobile ? "4%" : "" }}> Price </span>
              <div className="d-flex">
                <div style={numdivStyle}>
                  <select
                    className="form-select"
                    style={{
                      borderStyle: "none",
                      width: isMobile ? "100%" : "auto",
                    }}
                    aria-label="Default select example"
                    onChange={handleDurationChange}
                    value={formData.calendar.price.duration}
                  >
                    <option value="per_night">Per night</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={numdivStyle}>
                  <input
                    type="number"
                    style={numberContStyle}
                    onChange={handleAmountChange}
                    value={formData.calendar.price.amount}
                  />

                  <select
                    className="form-select"
                    style={{ borderStyle: "none" }}
                    aria-label="Default select example"
                    onChange={handleCurrencyChange}
                    value={formData.calendar.price.currency}
                  >
                    <option value="eur">EUR</option>
                    <option value="usd">USD</option>
                  </select>
                </div>
              </div>
              <button
                // onClick={ButtonClick}
                type="button"
                className="btn btn"
                style={{
                  backgroundColor: "#00BFFF",
                  color: "white",
                  marginRight: "1%",
                  marginLeft: isMobile ? "auto" : "",
                  width: isMobile ? "90%" : "75%",
                  borderRadius: isMobile ? "30px" : "30px",
                  padding: isMobile ? "2%" : "",
                  marginTop: "5%",
                }}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-3"></div> */}
      </div>
    </div>
  );
}
