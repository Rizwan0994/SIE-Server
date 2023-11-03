import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import { BiFilter } from "react-icons/bi";
import Boat1 from "../../images/sailing.svg";
import Boat2 from "../../images/motor.svg";
import Boat3 from "../../images/catamaran.svg";
import Boat4 from "../../images/other.svg";
import { useMediaQuery } from "react-responsive";
import './filter.css'

const fontStyle = {
  fontSize: "16px",
  fontWeight:"600",
  fontFamily:"open sans"
};

function Filters({ setFilteredBoats }) {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const contStyle = {
  
    minHeight: isMobile ? "550px" : isTablet ? "800px" : "750px",
    // Apply minWidth only if not in mobile view
    minWidth: isMobile ? "435px " : isTablet ? "700px " : "1200px ",
  };
  // const [FilteredBoats, setFilteredBoats] = useState([]);
  const [PriceRangeIsOpen, setPriceRangeIsOpen] = useState(false);
  const [selectedBoat, setSelectedBoat] = useState("");
  const [BoatTypeDropdown, setBoatTypeDropdown] = useState(false);
  const [GuestDropdown, setGuestDropdown] = useState(false);
  const [CrewDropdown, setCrewDropdown] = useState(false);
  const [LengthDropdown, setLengthDropdown] = useState(false);
  const [EquipmentDropdown, setEquipmentDropdown] = useState(false);
  const [UseTypeDropdown, setUseTypeDropdown] = useState(false);
  const [additionalServiceDropdown, setAdditionalServiceDropdown] =
    useState(false);
  const [selectedLength, setSelectedLength] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedServices, setSelectedServices] = useState({
    captain: false,
    chef: false,
    kayak: false,
    "safety Net": false,
    "extra Bedding": false,
  });
  const [selectedEquipments, setSelectedEquipments] = useState({
    shower: false,
    bed: false,
    airConditioning: false,
    soundDeck: false,
    swimLadder: false,
    wakeboard: false,
    lifeJacket: false,
    galleyStoveOven: false,
    stereo: false,
  });

  const [selectedPrice, setSelectedPrice] = useState({
    "100-1000": false,
    "1000-2000": false,
    "2000-3000": false,
    "greater than 3000": false,
  });

  const handlePriceChange = (priceRange) => {
    setSelectedPrice((prevPrices) => ({
      ...prevPrices,
      [priceRange]: !prevPrices[priceRange],
    }));
  };

  const handleEquipmentChange = (equipment) => {
    setSelectedEquipments((prevEquipments) => ({
      ...prevEquipments,
      [equipment]: !prevEquipments[equipment],
    }));
  };

  const [selectedGuestCabin, setSelectedGuestCabin] = useState("");

  const handleGuestCabinChange = (option) => {
    setSelectedGuestCabin(option);
  };

  const guestCabinOptions = ["2-4", "4-8", "8-10", "Other"];

  const handleLengthChange = (length) => {
    setSelectedLength(length);
  };
  const brands = ["Honda", "Yamaha", "Suzuki", "Other"];
  const lengthRanges = ["10 to 20", "20 to 30", "30 to 40", "Other"];
  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  console.log(
    "additional service :" + selectedServices + " " + selectedEquipments
  );
  const [BrandsDropdown, setBrandsDropdown] = useState(false);

  const togglePriceRange = () => {
    setPriceRangeIsOpen(!PriceRangeIsOpen);
  };

  const toggleBoatType = () => {
    setBoatTypeDropdown((prevState) => !prevState);
  };

  const toggleGuest = () => {
    setGuestDropdown(!GuestDropdown);
  };

  const toggleCrew = () => {
    setCrewDropdown(!CrewDropdown);
  };

  const toggleLength = () => {
    setLengthDropdown(!LengthDropdown);
  };

  const toggleEquipment = () => {
    setEquipmentDropdown(!EquipmentDropdown);
  };

  const toggleUseType = () => {
    setUseTypeDropdown(!UseTypeDropdown);
  };

  const toggleBrands = () => {
    setBrandsDropdown(!BrandsDropdown);
  };

  const handleCombinedClick = () => {
    togglePriceRange();
  };

  //
  const handleApplyFilters = () => {
    const queryParams = [];

    // Add selected boat types
    if (selectedBoatType) {
      queryParams.push(`name=${selectedBoatType}`);
    }

    // Add selected price ranges
    const selectedPrices = Object.keys(selectedPrice).filter(
      (priceRange) => selectedPrice[priceRange]
    );
    if (selectedPrices.length > 0) {
      queryParams.push(`price_range=${selectedPrices.join(",")}`);
    }

    // Add selected services
    Object.keys(selectedServices).forEach((service) => {
      if (selectedServices[service]) {
        queryParams.push(`${service}_checked=true`);
      }
    });

    // Add selected equipments with "_checked=true"
    Object.keys(selectedEquipments).forEach((equipment) => {
      if (selectedEquipments[equipment]) {
        queryParams.push(`${equipment}_checked=true`);
      }
    });

    // Add selected length ranges
    if (selectedLength) {
      queryParams.push(`size=${selectedLength}`);
    }
    if (selectedGuestCabin) {
      queryParams.push(`capacity=${selectedGuestCabin}`);
    }
    // Construct the final query string
    const queryString = queryParams.join("&");
    axios
      .get(`http://127.0.0.1:8000/api/boats/filter/?${queryString}`)
      .then((response) => {
        console.log("GET request successful:", response.data);
        setFilteredBoats(response.data);
      })
      .catch((error) => {
        console.error("GET request failed:", error);
      });
  };
  //

  const [selectedBoatType, setSelectedBoatType] = useState("");

  const handleBoatTypeSelection = (value) => {
    setSelectedBoatType(value);
    console.log(selectedBoatType);
  };

  const toggleAdditionalService = () => {
    setAdditionalServiceDropdown(!additionalServiceDropdown);
  };

  const handleServiceChange = (service) => {
    setSelectedServices((prevServices) => ({
      ...prevServices,
      [service]: !prevServices[service],
    }));
  };


  return (
    <>
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Filters
      </button> */}

      <div>
        <div
          style={contStyle}
          className="modal"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <BiFilter style={{ height: "50px", width: "50px" }} />
                <h5 className="modal-title" id="exampleModalLabel">
                  Filters
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div
                className="modal-body"
                style={{ overflowY: "auto", maxHeight: "70vh" }}
              >
                <div className="container">
                  <div className="filtersDiv">
                    <div className="row ">
                      <div
                        className="col-sm-5 filters"
                        style={{ marginRight: "auto" }}
                      >
                        <p style={fontStyle}> Price Range</p>
                        {PriceRangeIsOpen ? (
                          <>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              {Object.keys(selectedPrice).map((priceRange) => (
                                <label key={priceRange}>
                                  <input
                                    type="checkbox"
                                    checked={selectedPrice[priceRange]}
                                    onChange={() =>
                                      handlePriceChange(priceRange)
                                    }
                                  />
                                  {priceRange}
                                </label>
                              ))}
                            </div>
                          </>
                        ) : (
                          <p></p>
                        )}
                      </div>
                      <div
                        className="col-sm-5 filters"
                        onClick={handleCombinedClick}
                      >
                        {PriceRangeIsOpen ? (
                          <BsChevronUp style={{ float: "right" }} />
                        ) : (
                          <BsChevronDown style={{ float: "right" }} />
                        )}
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className="filtersDiv">
                    <div className="row justify-content-center">
                      <div
                        className="col-sm-5 filters"
                        style={{ marginRight: "auto" }}
                      >
                        <p style={fontStyle}>Boat Type</p>
                      </div>
                      <div
                        className="col-sm-5 filters"
                        onClick={toggleBoatType}
                      >
                        {BoatTypeDropdown ? (
                          <BsChevronUp style={{ float: "right" }} />
                        ) : (
                          <BsChevronDown style={{ float: "right" }} />
                        )}
                      </div>
                    </div>
                    {BoatTypeDropdown && (
                      <div className="row">
                        <div className="col-8 mt-2">
                          <div className="d-inline-flex align-items-center">
                            <div
                              onClick={() => handleBoatTypeSelection("sailing")}
                              className="rounded boat-type"
                              style={{
                                cursor: "pointer",
                              }}
                            >
                              <img
                                width="100%"
                                height="auto"
                                src={Boat1}
                                alt="Boat Type 1"
                              />
                            </div>

                            <div
                              onClick={() => handleBoatTypeSelection("motor")}
                              className="rounded boat-type"
                              style={{
                                cursor: "pointer",
                              }}
                            >
                              <img
                                width="100%"
                                height="%"
                                src={Boat2}
                                alt="Boat Type 2"
                              />
                            </div>
                            <div
                              onClick={() =>
                                handleBoatTypeSelection("catamaran")
                              }
                              className="rounded boat-type"
                              style={{
                                cursor: "pointer",
                              }}
                            >
                              <img
                                src={Boat3}
                                alt="Boat Type 3"
                                width="100%"
                                height="%"
                              />
                            </div>
                            <div
                              onClick={() => handleBoatTypeSelection("other")}
                              className="rounded boat-type"
                              style={{
                                cursor: "pointer",
                              }}
                            >
                              <img
                                src={Boat4}
                                alt="Boat Type 4"
                                width="100%"
                                height="%"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <hr />

                  <div className="filtersDiv">
                    <div className="row justify-content-center">
                      <div
                        className="col-sm-5 filters"
                        style={{ marginRight: "auto" }}
                      >
                        <p style={fontStyle}> Guests and Cabins</p>
                        {GuestDropdown ? (
                          <>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              {guestCabinOptions.map((option) => (
                                <label key={option}>
                                  <input
                                    type="radio"
                                    checked={selectedGuestCabin === option}
                                    onChange={() =>
                                      handleGuestCabinChange(option)
                                    }
                                  />
                                  {option}
                                </label>
                              ))}
                            </div>
                          </>
                        ) : (
                          <p></p>
                        )}
                      </div>
                      <div className="col-sm-5 filters" onClick={toggleGuest}>
                        {GuestDropdown ? (
                          <BsChevronUp style={{ float: "right" }} />
                        ) : (
                          <BsChevronDown style={{ float: "right" }} />
                        )}
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className="filtersDiv">
                    <div className="row justify-content-center">
                      <div
                        className="col-sm-5 filters"
                        style={{ marginRight: "auto" }}
                      >
                        <p style={fontStyle}>Crew</p>
                        {CrewDropdown ? (
                          <>
                            <p>yes</p>
                            <p>no</p>
                          </>
                        ) : (
                          <p></p>
                        )}
                      </div>
                      <div className="col-sm-5 filters" onClick={toggleCrew}>
                        {CrewDropdown ? (
                          <BsChevronUp style={{ float: "right" }} />
                        ) : (
                          <BsChevronDown style={{ float: "right" }} />
                        )}
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className="filtersDiv">
                    <div className="row justify-content-center">
                      <div
                        className="col-sm-5 filters"
                        style={{ marginRight: "auto" }}
                      >
                        <p style={fontStyle}>Length</p>
                        {LengthDropdown ? (
                          <>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              {lengthRanges.map((length) => (
                                <label key={length}>
                                  <input
                                    type="radio"
                                    checked={selectedLength === length}
                                    onChange={() => handleLengthChange(length)}
                                  />
                                  {length}
                                </label>
                              ))}
                            </div>
                          </>
                        ) : (
                          <p></p>
                        )}
                      </div>
                      <div className="col-sm-5 filters" onClick={toggleLength}>
                        {LengthDropdown ? (
                          <BsChevronUp style={{ float: "right" }} />
                        ) : (
                          <BsChevronDown style={{ float: "right" }} />
                        )}
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className="filtersDiv">
                    <div className="row">
                      <div
                        className="col-sm-5 filters"
                        style={{ marginRight: "auto" }}
                      >
                        <p style={fontStyle}>Equipment</p>
                        {EquipmentDropdown ? (
                          <>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              {Object.keys(selectedEquipments).map(
                                (equipment) => (
                                  <label key={equipment}>
                                    <input
                                      type="checkbox"
                                      checked={selectedEquipments[equipment]}
                                      onChange={() =>
                                        handleEquipmentChange(equipment)
                                      }
                                    />
                                    {equipment}
                                  </label>
                                )
                              )}
                            </div>
                          </>
                        ) : (
                          <p></p>
                        )}
                      </div>
                      <div
                        className="col-sm-5 filters"
                        onClick={toggleEquipment}
                      >
                        {EquipmentDropdown ? (
                          <BsChevronUp style={{ float: "right" }} />
                        ) : (
                          <BsChevronDown style={{ float: "right" }} />
                        )}
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className="filtersDiv" onClick={toggleUseType}>
                    <div className="row justify-content-center">
                      <div
                        className="col-sm-5 filters"
                        style={{ marginRight: "auto" }}
                      >
                        <p style={fontStyle}>Type of Use</p>
                        {UseTypeDropdown ? (
                          <>
                            <p></p>
                          </>
                        ) : (
                          <p></p>
                        )}
                      </div>
                      <div className="col-sm-5 filters">
                        {UseTypeDropdown ? (
                          <BsChevronUp style={{ float: "right" }} />
                        ) : (
                          <BsChevronDown style={{ float: "right" }} />
                        )}
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className="filtersDiv">
                    <div className="row justify-content-center">
                      <div
                        className="col-sm-5 filters"
                        style={{ marginRight: "auto" }}
                      >
                        <p style={fontStyle}>Additional Services</p>
                        {additionalServiceDropdown ? (
                          <>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              {Object.keys(selectedServices).map((service) => (
                                <label key={service}>
                                  <input
                                    type="checkbox"
                                    checked={selectedServices[service]}
                                    onChange={() =>
                                      handleServiceChange(service)
                                    }
                                  />
                                  {service}
                                </label>
                              ))}
                            </div>
                          </>
                        ) : (
                          <p></p>
                        )}
                      </div>
                      <div
                        className="col-sm-5 filters"
                        onClick={toggleAdditionalService}
                      >
                        {additionalServiceDropdown ? (
                          <BsChevronUp style={{ float: "right" }} />
                        ) : (
                          <BsChevronDown style={{ float: "right" }} />
                        )}
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className="filtersDiv">
                    <div className="row justify-content-center">
                      <div
                        className="col-sm-5 filters"
                        style={{ marginRight: "auto" }}
                      >
                        <p style={fontStyle}>Brand</p>
                        {BrandsDropdown ? (
                          <>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              {brands.map((brand) => (
                                <label key={brand}>
                                  <input
                                    type="radio"
                                    checked={selectedBrand === brand}
                                    onChange={() => handleBrandChange(brand)}
                                  />
                                  {brand}
                                </label>
                              ))}
                            </div>
                          </>
                        ) : (
                          <p></p>
                        )}
                      </div>
                      <div className="col-sm-5 filters" onClick={toggleBrands}>
                        {BrandsDropdown ? (
                          <BsChevronUp style={{ float: "right" }} />
                        ) : (
                          <BsChevronDown style={{ float: "right" }} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary rounded-pill"
                  data-bs-dismiss="modal"
                >
                  Clear All
                </button>
                <button
                  type="button"
                  className="btn btn-primary rounded-pill"
                  // data-bs-dismiss="modal"
                  onClick={handleApplyFilters}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filters;
