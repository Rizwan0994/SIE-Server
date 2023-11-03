import React, { useEffect } from "react";
import arrow from "../../images/datearrow.svg";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
import dateicon from "../../images/datesicon.svg";
import dropicon from "../../images/dropdown.svg";

export default function Dataselector({
  fromdd,
  todd,
  setNewFromDate,
  setNewToDate,
  setDaysDifference,
}) {
  console.log(fromdd + "  " + todd);
  const [defaultdate, setdefaultdate] = useState({
    startDate: "",
    arrowIcon: "",
    endDate: "",
  });

  useEffect(() => {
    // Set the initial values for startDate and endDate
    setdefaultdate({
      startDate: fromdd,
      arrowIcon: arrow, // Replace with your actual arrow icon value
      endDate: todd,
    });
  }, []);

  console.log(defaultdate.startDate + "  " + defaultdate.endDate);

  const [selectedDateRange, setSelectedDateRange] = useState("");
  const handleDateRangeChange = (event, picker) => {
    const startDate = picker.startDate.format("DD/MM/YYYY");
    const endDate = picker.endDate.format("DD/MM/YYYY");

    setNewFromDate(startDate);
    setNewToDate(endDate);

     const fromDateObj = new Date(picker.startDate);
     const toDateObj = new Date(picker.endDate);

     const timeDifference = toDateObj.getTime() - fromDateObj.getTime();
     const daysDifference = timeDifference / (1000 * 3600 * 24);
    const roundedDays = Math.floor(daysDifference);

    setDaysDifference(roundedDays);
    const dateRange = (
      <div>
        {startDate} <img src={arrow} alt="Arrow" /> {endDate}
      </div>
    );
    setSelectedDateRange(dateRange);
  };

  return (
    <div className="input-group">
      <DateRangePicker
        id="date"
        onApply={handleDateRangeChange}
        style={{
          border: "0",
        }}

        // initialSettings={{ startDate: '1/1/2023', endDate: '3/1/2023' }}
      >
        <div
          className="container d-flex
                align-items-center"
          style={{
            border: "1px solid",
            borderRadius: "5px",
            borderColor: "#666666",
            padding: "2%",
            // width: "fit-content",
            height: "3rem",
          }}
        >
          <img
            style={{
              width: "15px",
              height: "15px",
            }}
            src={dateicon}
            alt=""
          />
          <p
            className="d-flex align-items-center"
            style={{
              marginRight: "auto",
              marginLeft: "0.8rem",
              marginTop: "0.8rem",
              fontWeight: "600",
              fontSize: "16px",
              color: "#00BFFF",
            }}
          >
            {" "}
            {selectedDateRange || (
              <div>
                {defaultdate.startDate}{" "}
                <img src={defaultdate.arrowIcon} alt="Arrow" />{" "}
                {defaultdate.endDate}
              </div>
            )}{" "}
          </p>
          <img src={dropicon} alt="" />
        </div>
      </DateRangePicker>
    </div>
  );
}
