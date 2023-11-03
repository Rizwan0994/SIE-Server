import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Competitor from "./icons/competitor.svg";
import Revenue from "./icons/revenue.svg";
import Vessel from "./icons/vessel.svg";
import Visitor from "./icons/visitor.svg";
import Machine from "./icons/machine.svg";
import Sustainability from "./icons/sustainable.svg";
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import "./whatweoffer.css"
import { borderColor } from '@mui/icons-material';

function Whatweoffer() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [revenueisOpen, setrevenueIsOpen] = useState(false);
    const togglerevenue = () => {
        setrevenueIsOpen(!revenueisOpen);
    };

    const [vesselisOpen, setvesselIsOpen] = useState(false);
    const togglevessel = () => {
        setvesselIsOpen(!vesselisOpen);
    };

    const [visitorisOpen, setvisitorIsOpen] = useState(false);
    const togglevisitor = () => {
        setvisitorIsOpen(!visitorisOpen);
    };

    const [appisOpen, setappIsOpen] = useState(false);
    const toggleapp = () => {
        setappIsOpen(!appisOpen);
    };

    const [susisOpen, setsusIsOpen] = useState(false);
    const togglesus = () => {
        setsusIsOpen(!susisOpen);
    };


    return (
        <div>
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="row d-flex justify-content-center">
                        {/* Row 1 */}
                        <div className="row mt-4 mb-3">
                            <div className="col text-center">
                                <h1 style={{
                                    fontFamily: "Playfair Display",
                                    fontWeight: "700",
                                    fontSize: "28px",

                                }}>What we offer</h1>
                            </div>
                        </div>

                        {/* Row 2 */}

                        <div className='row d-flex justify-content-center'>
                            <div className="col-lg-6" style={{
                                borderBottom: "1px solid",
                                borderColor: "#CCCCCC",
                                paddingBottom: "1%",
                                color: "#333333",
                                fontWeight: "600",
                                fontSize: "20px",
                                fontFamily: "Open Sans",

                            }}>
                                <Dropdown className="dropdownText Offers">
                                    <div className="OffersDropdown d-flex align-items-center" onClick={toggleDropdown}>
                                        <div className="d-flex align-items-center">
                                            <img src={Competitor} className="dropdownimg mr-1" style={{ marginRight: "1rem" }} />
                                            Competitor's Comparison
                                        </div>
                                        <BsChevronDown className="dropdown-icon" style={{
                                            marginLeft: "auto"
                                        }} />

                                        <Dropdown.Menu show={isOpen}>
                                            <Dropdown.Item>abc</Dropdown.Item>
                                            <Dropdown.Item>cfs</Dropdown.Item>
                                            <Dropdown.Item>fdljf</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </div>
                                </Dropdown>
                            </div>

                        </div>

                        {/* Row 3 */}
                        <div className='row d-flex justify-content-center'>
                            <div className="col-lg-6 mt-4" style={{
                                borderBottom: "1px solid",
                                borderColor: "#CCCCCC",
                                paddingBottom: "1%",
                                color: "#333333",
                                fontWeight: "600",
                                fontSize: "20px",
                                fontFamily: "Open Sans",

                            }}>
                                <Dropdown className="dropdownText Offers">
                                    <div className="OffersDropdown d-flex align-items-center" onClick={togglerevenue}>
                                        <div className="d-flex align-items-center">
                                            <img src={Revenue} className="dropdownimg mr-1" style={{ marginRight: "1rem" }} />
                                            Revenue and Expenditure
                                        </div>
                                        <BsChevronDown className="dropdown-icon" style={{
                                            marginLeft: "auto"
                                        }} />

                                        <Dropdown.Menu show={revenueisOpen}>
                                            <Dropdown.Item>abc</Dropdown.Item>
                                            <Dropdown.Item>cfs</Dropdown.Item>
                                            <Dropdown.Item>fdljf</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </div>
                                </Dropdown>
                            </div>
                        </div>


                        {/* Row 4 */}

                        <div className='row d-flex justify-content-center'>
                            <div className="col-lg-6 mt-4" style={{
                                borderBottom: "1px solid",
                                borderColor: "#CCCCCC",
                                paddingBottom: "1%",
                                color: "#333333",
                                fontWeight: "600",
                                fontSize: "20px",
                                fontFamily: "Open Sans",

                            }}>
                                <Dropdown className="dropdownText Offers">
                                    <div className="OffersDropdown d-flex align-items-center" onClick={togglevessel}>
                                        <div className="d-flex align-items-center">
                                            <img src={Vessel} className="dropdownimg mr-1" style={{ marginRight: "1rem" }} />
                                            Vessel Maintinence & Upkeeps
                                        </div>
                                        <BsChevronDown className="dropdown-icon" style={{
                                            marginLeft: "auto"
                                        }} />

                                        <Dropdown.Menu show={vesselisOpen}>
                                            <Dropdown.Item>abc</Dropdown.Item>
                                            <Dropdown.Item>cfs</Dropdown.Item>
                                            <Dropdown.Item>fdljf</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </div>
                                </Dropdown>
                            </div>
                        </div>



                        {/* Row 5 */}

                        <div className='row d-flex justify-content-center'>
                            <div className="col-lg-6 mt-4" style={{
                                borderBottom: "1px solid",
                                borderColor: "#CCCCCC",
                                paddingBottom: "1%",
                                color: "#333333",
                                fontWeight: "600",
                                fontSize: "20px",
                                fontFamily: "Open Sans",

                            }}>
                                <Dropdown className="dropdownText Offers">
                                    <div className="OffersDropdown d-flex align-items-center" onClick={togglevisitor}>
                                        <div className="d-flex align-items-center">
                                            <img src={Visitor} className="dropdownimg mr-1" style={{ marginRight: "1rem" }} />
                                            Visitor's Preferences
                                        </div>
                                        <BsChevronDown className="dropdown-icon" style={{
                                            marginLeft: "auto"
                                        }} />

                                        <Dropdown.Menu show={visitorisOpen}>
                                            <Dropdown.Item>abc</Dropdown.Item>
                                            <Dropdown.Item>cfs</Dropdown.Item>
                                            <Dropdown.Item>fdljf</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </div>
                                </Dropdown>
                            </div>
                        </div>



                        {/* Row 6 */}
                        <div className='row d-flex justify-content-center'>
                            <div className="col-lg-6 mt-4" style={{
                                borderBottom: "1px solid",
                                borderColor: "#CCCCCC",
                                paddingBottom: "1%",
                                color: "#333333",
                                fontWeight: "600",
                                fontSize: "20px",
                                fontFamily: "Open Sans",

                            }}>
                                <Dropdown className="dropdownText Offers">
                                    <div className="OffersDropdown d-flex align-items-center" onClick={toggleapp}>
                                        <div className="d-flex align-items-center">
                                            <img src={Machine} className="dropdownimg mr-1" style={{ marginRight: "1rem" }} />
                                            Machine Learning Features
                                        </div>
                                        <BsChevronDown className="dropdown-icon" style={{
                                            marginLeft: "auto"
                                        }} />

                                        <Dropdown.Menu show={appisOpen}>
                                            <Dropdown.Item>abc</Dropdown.Item>
                                            <Dropdown.Item>cfs</Dropdown.Item>
                                            <Dropdown.Item>fdljf</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </div>
                                </Dropdown>
                            </div>
                        </div>



                        {/* Row 7 */}

                        <div className='row d-flex justify-content-center'>
                            <div className="col-lg-6 mt-4 mb-5" style={{
                                borderBottom: "1px solid",
                                borderColor: "#CCCCCC",
                                paddingBottom: "1%",
                                color: "#333333",
                                fontWeight: "600",
                                fontSize: "20px",
                                fontFamily: "Open Sans",

                            }}>
                                <Dropdown className="dropdownText Offers">
                                    <div className="OffersDropdown d-flex align-items-center" onClick={togglesus}>
                                        <div className="d-flex align-items-center">
                                            <img src={Sustainability} className="dropdownimg mr-1" style={{ marginRight: "1rem" }} />
                                            Sustainability Tips
                                        </div>
                                        <BsChevronDown className="dropdown-icon" style={{
                                            marginLeft: "auto"
                                        }} />

                                        <Dropdown.Menu show={susisOpen}>
                                            <Dropdown.Item>abc</Dropdown.Item>
                                            <Dropdown.Item>cfs</Dropdown.Item>
                                            <Dropdown.Item>fdljf</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </div>
                                </Dropdown>
                            </div>
                        </div>



                        {/* Row 8 */}
                        <div className="row mt-5" style={{ marginTop: "25px" }}>
                            <div
                                className="col text-center dropdown"
                                style={{ fontSize: "20px",
                            fontFamily: "Open Sans",
                        fontWeight: "600", }}
                            >
                             Lets get started
                            </div>
                        </div>

                        {/* Row 9 */}
                        <div className="row mt-4">
                            <div className="col text-center dropdown">
                                <Button style={{
                                    borderRadius: "10px",
                                    backgroundColor: "#00BFFF",
                                    // width: "30%",
                                    fontWeight: "700",
                                    color: "#FFFFFF",
                                    borderStyle: "none",

                                }} variant="primary">Create a listing</Button>
                            </div>
                        </div>

                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whatweoffer