
import React from 'react'
import { MdDateRange } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsChevronDown } from "react-icons/bs";

function DatePickerField(props) {
  return (
    <div>
      <div className="date-picker-wrapper">
        <div className="custom-input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <MdDateRange
                style={{
                  fontSize: "1em",
                  color: "#666666",
                }}
              />
            </span>
          </div>
          <DatePicker
            selected={props.startDate}
            startDate={props.startDate}
            endDate={props.endDate}
            onChange={props.onDateChange}
            selectsRange
            showPopperArrow={false}
            className="form-control date-picker-input"
            placeholderText="Pick your Dates"
            aria-label="Select a date range"
            required
            wrapperClassName="datepicker"
            id="dateplaceid"
          />
          <div style={{ marginLeft: "auto" }}>
            <span className="input-group-text">
              <BsChevronDown
                style={{
                  fontSize: "1em",
                  color: "#666666",
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatePickerField;