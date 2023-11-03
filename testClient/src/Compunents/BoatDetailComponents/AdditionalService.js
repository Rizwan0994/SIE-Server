import React from 'react'
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState, useEffect } from "react";

function AdditionalService({ boatData, handleCheckboxChange, amenities }) {
  const [showAmenities2, setShowAmenities2] = useState(false);

  const toggleAmenities2 = () => {
    setShowAmenities2(!showAmenities2);
  };

  // const [amenities, setAmenities] = useState({
  //   captain: false,
  //   kayak: false,
  //   "safety-net": false,
  //   "extra-bedding": false,
  // });

  return (
    <div>
      <div>
        <div className="d-flex " onClick={toggleAmenities2}>
          <h5
            style={{
              fontFamily: "Open Sans",
              fontWeight: "600",
              fontSize: "18px",
              color: "#333333",
            }}
          >
            Additional services
          </h5>

          <div className="flex-grow-1"></div>

          <span className="">
            {showAmenities2 ? (
              <BsChevronUp className="" />
            ) : (
              <BsChevronDown className="" />
            )}
          </span>
        </div>
        <span>
          <p>
            Text about select any extra services and the amount will be added to
            the total cost
          </p>
        </span>

        {showAmenities2 && (
          <div className="">
            <div className="">
              {boatData.additionalServices.captain.checked && (
                <div className="amenity">
                  <input
                    type="checkbox"
                    id="captain"
                    checked={amenities.captain}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="captain">
                    <span>Captain</span>
                  </label>
                  <div className="price-container">
                    <span className="price">
                      ${boatData.additionalServices.captain.price} per day
                    </span>
                  </div>
                </div>
              )}
              {boatData.additionalServices.kayak.checked && (
                <div className="amenity">
                  <input
                    type="checkbox"
                    id="kayak"
                    checked={amenities.kayak}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="kayak">
                    <span>Kayak</span>
                  </label>
                  <div className="price-container">
                    <span className="price">
                      ${boatData.additionalServices.kayak.price} per day
                    </span>
                  </div>
                </div>
              )}
              {boatData.additionalServices.safetyNet.checked && (
                <div className="amenity">
                  <input
                    type="checkbox"
                    id="safety-net"
                    checked={amenities["safety-net"]}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="safety-net">
                    <span>Safety Net</span>
                  </label>
                  <div className="price-container">
                    <span className="price">
                      ${boatData.additionalServices.safetyNet.price} per booking
                    </span>
                  </div>
                </div>
              )}

              {boatData.additionalServices.extraBedding.checked && (
                <div className="amenity">
                  <input
                    type="checkbox"
                    id="extra-bedding"
                    checked={amenities["extra-bedding"]}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="extra-bedding">
                    <span>Extra Bedding</span>
                  </label>
                  <div className="price-container">
                    <span className="price">
                      ${boatData.additionalServices.extraBedding.price} per
                      person
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div
              className="d-flex align-items-center"
              style={{
                fontSize: "12px",
                fontWeight: "700",
                fontFamily: "Open sans",
              }}
            >
              <span>Show all amenities</span>
              <BsChevronDown className="ms-2" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdditionalService