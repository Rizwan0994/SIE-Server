

import React from 'react'
import { BiSearch } from "react-icons/bi";
import "./SearchInput.css";

function SearchInputField(props) {

  const handleInputChange = (event) => {
    // Call the prop function to update the parent component's state
    props.onDestinationChange(event.target.value);
  };

  return (
    <div>
      <div className="search-input-wrapper">
        <div className="input-group custom-input-group">
          <span className="input-group-text" id="search-icon">
            <BiSearch
              style={{
                fontSize: "1em",
                color: "#666666",
              }}
            />
          </span>
          <input
            type="text"
            id="searchplaceid"
            className="form-control"
            placeholder="Search for a destination"
            aria-label="Search for destination"
            aria-describedby="search-icon"
            value={props.destination}
            required
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchInputField