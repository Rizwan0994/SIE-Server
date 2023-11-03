import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const CustomTimePicker = () => {
  return (
    <div className="input-group">
      <input type="time" className="form-control" placeholder="Select time" />
      <button className="btn btn-outline-secondary" type="button">
        <i className="fas fa-caret-down"></i> {/* Replace with your icon */}
      </button>
    </div>
  );
};

export default CustomTimePicker;
