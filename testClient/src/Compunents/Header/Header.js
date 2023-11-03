import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import mobilelogo from "../../images/mobilelogo.svg";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import ProfileIcon from "../../images/profileicon.svg";
import BorderRadiusButton from "../UI/BorderRadiusButton/BorderRadiusButton";
import { useMediaQuery } from "react-responsive";
import {useNavigate} from "react-router-dom"

const btnStyle = {
  paddingRight: "2%",
};

const Header = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 576 });
     const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState({
      name: "EUR",
      symbol: "€",
    });
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    const handleCurrencyChange = (currency) => {
      setSelectedCurrency(currency);
      setIsDropdownOpen2(false); 
    };

  const handleLanguageChange = (language) => {

    console.log(language)
    setSelectedLanguage(language);
    setIsDropdownOpen(false); 
  };




  const handleLogout = () => {
   
    // localStorage.removeItem("accessToken");
    // localStorage.removeItem("id");
    // localStorage.removeItem("user");
    // localStorage.removeItem("pro_pic");
    // localStorage.removeItem("owner");
    localStorage.clear();


    navigate('/')
  };

  const handleProfileClick = () => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      // Handle the case where there's no accessToken (user is not authenticated)
      // alert("Please log in to view your profile.");
      // You can also redirect the user to the login page if needed

   navigate('/login')
    } else {
 
      navigate('/profile')
    }
  };

  const user = localStorage.getItem("user");
  return (
    <div
      style={{
        width: "100%",
        minWidth: isMobile ? " 435px" : isTablet ? "700px " : "1200px",
      }}
    >
      <Navbar
        bg="white shadow-sm"
        expand="lg"
        className="header"
        style={{ paddingRight: "1.5%" }}
      >
        <Container fluid style={{height:"65px"}}>
          <Navbar.Brand href="#" className="logo" style={{ marginLeft:isMobile ?"34%":"" }}>
          <Link   to="/" style={{ textDecoration: "none", color: "#333333" , marginLeft:isMobile ?"":"10%" }}>  <img src={isMobile?mobilelogo:logo} alt="Logo" height="30" />
             </Link>
            
          </Navbar.Brand>

          <div style={{height:"65px"}}>
            <Navbar
              id="basic-navbar-nav"
              className="float-start"
              style={{ marginTop: "1%", marginBottom: "1%" ,padding:"0px"}}
            >
              <Nav className=" d-none d-sm-flex" style={{ marginRight: "2%" }}>
                {user === "boatowner" && (
                  <Link to="/addboat">
                    <Button
                      variant=" rounded-pill"
                      className="bg-white "
                      style={{
                        color: "#00BFFF",
                        borderColor: "#00BFFF",
                        width: "150px",
                      }}
                    >
                      Create a Listing
                    </Button>
                  </Link>
                )}
              </Nav>
              <Nav className=" d-none d-sm-flex">
                {user ? (
                  <Button
                    variant=" rounded-pill"
                    className="bg-white"
                    style={{ color: "#00BFFF", borderColor: "#00BFFF" }}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                ) : (
                  // If 'user' is not available, show the Login button
                  <Link to="/login" style={{ color: "#00BFFF" }}>
                    <BorderRadiusButton name="Login" />
                  </Link>
                )}
              </Nav>
              <Nav className="  d-none d-sm-flex">
                <Dropdown
                  show={isDropdownOpen}
                  onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <Dropdown.Toggle
                    variant=""
                    id="language-dropdown"
                    style={{
                      color: "#666666",
                      paddingRight: "2%",
                      paddingTop: "9%",
                      cursor: "pointer",
                    }}
                  >
                    <span onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                      {selectedLanguage}{" "}
                      <BsChevronDown style={{ fontSize: "15px" }} />
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => handleLanguageChange("English")}
                    >
                      English
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleLanguageChange("Spanish")}
                    >
                      Spanish
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleLanguageChange("French")}
                    >
                      French
                    </Dropdown.Item>
                    {/* Add more language options as needed */}
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown
                  show={isDropdownOpen2}
                  onToggle={() => setIsDropdownOpen2(!isDropdownOpen2)}
                >
                  <Dropdown.Toggle
                    variant=""
                    id="currency-dropdown"
                    style={{
                      color: "#666666",
                      paddingRight: "2%",
                      paddingTop: "10%",
                      cursor: "pointer",
                    }}
                  >
                    <span onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}>
                    {selectedCurrency.symbol} {selectedCurrency.name}{" "}
                      <BsChevronDown style={{ fontSize: "15px" }} />
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() =>
                        handleCurrencyChange({ name: "EUR", symbol: " €" })
                      }
                    >
                       (€)EUR
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        handleCurrencyChange({ name: "USD", symbol: "$" })
                      }
                    >
                       ($)USD
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        handleCurrencyChange({ name: "GBP", symbol: "£" })
                      }
                    >
                      (£)GBR
                    </Dropdown.Item>
                    {/* Add more currency options as needed */}
                  </Dropdown.Menu>
                </Dropdown>

                {/*  */}
              </Nav>

              <Navbar.Brand href="#" className=" ">
                {/* <Link  > */}
                  <span style={{ color: "gray" }} onClick={handleProfileClick}>
                    <img src={ProfileIcon} alt="" />
                  </span>
                {/* </Link> */}
              </Navbar.Brand>
            </Navbar>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
