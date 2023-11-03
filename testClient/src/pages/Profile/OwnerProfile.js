import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "../../Compunents/Header/Header";
import Footer from "../../Compunents/HomeSections/Footer/Footer";
import { Link } from "react-router-dom";
import "./profile.css";
import { useEffect, useState } from "react";
import bg from "../../images/bg.svg";
import axios from "axios";
import account from "../../images/account.svg";
import message from "../../images/message.svg";
import trips from "../../images/trips.svg";
import fav from "../../images/fav.svg";
import help from "../../images/help.svg";


import { useMediaQuery } from "react-responsive";


const UserProfile = () => {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const contStyle = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "73% 59%",
    minWidth: isMobile ? "435px " : isTablet ? "700px " : "1200px ",
  };
  const username = localStorage.getItem("username");
  let profile_pic = localStorage.getItem("pro_pic");
  profile_pic =  profile_pic;

  const [user, setUsers] = useState({});
  console.log(profile_pic);

  const id = localStorage.getItem("id");
  console.log(id);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`http://127.0.0.1:8080/show/${id}`);

  //       setUsers(response.data);
  //       console.log(user);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const userId = localStorage.getItem("id");
  console.log(user.name);
  return (
    <div style={contStyle}>
      <div>
        <Header />
        <div>
          <Container
            className=" pt-3 pb-3"
            style={{ padding: isMobile ? "10%" : " " }}
          >
            <Row className="pb-">
              <Col md={6}>
                {/* Avatar and Username */}
                <div className="d-flex align-items-center">
                  <div
                    className="avatar-circle"
                    style={{ width: "120px", height: "120px" }}
                  >
                    <img src={profile_pic} alt="User Avatar" />
                  </div>
                  <div className="ml-3 pl-2">
                    <h4 style={{ margin: "10px" }}> Hi {username}!</h4>
                  </div>
                </div>
              </Col>
              <Col md={1}>{/* Username */}</Col>
            </Row>
            <Row className="pt-5">
              <Col sm={6} md={6} lg={3} className="mt-2">
                {/* First column */}
                <Card style={{height:"100%"}}>
                  <Card.Body>
                    <Link
                      to="/account"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Card.Title
                        className="text-center py-4"
                        style={{
                          fontFamily: "Open Sans",
                          fontSize: "20px",
                          fontWeight: "400",
                          color: "#666666",
                        }}
                      >
                        <img src={account} alt="" />{" "}
                        <span
                          style={{
                            fontFamily: "Open Sans",
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#333333",
                            paddingLeft: "10%",
                          }}
                        >
                          My account
                        </span>
                      </Card.Title>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col  sm={6} md={6} lg={3} className="mt-2">
                {/* Second column */}
                <Card style={{height:"100%"}}>
                  <Card.Body>
                    <Link
                      to={`/listing`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Card.Title
                        className="text-center py-4"
                        style={{
                          fontFamily: "Open Sans",
                          fontSize: "20px",
                          fontWeight: "400",
                          color: "#666666",
                        }}
                      >
                        <img src={help} alt="" height="31px" />{" "}
                        <span
                          style={{
                            fontFamily: "Open Sans",
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#333333",
                            paddingLeft: "10%",
                          }}
                        >
                          My Listings
                        </span>
                      </Card.Title>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={6} lg={3} className="mt-2">
                {/* Third column */}
                <Card style={{height:"100%"}}>
                  <Card.Body>
                    <Link
                      to="/chat"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Card.Title
                        className="text-center py-4"
                        style={{
                          fontFamily: "Open Sans",
                          fontSize: "20px",
                          fontWeight: "400",
                          color: "#666666",
                        }}
                      >
                        <img src={message} alt="" />{" "}
                        <span
                          style={{
                            fontFamily: "Open Sans",
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#333333",
                            paddingLeft: "10%",
                          }}
                        >
                          Messages
                        </span>
                      </Card.Title>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              {isTablet ? (
                <Col sm={6} md={6} lg={3} className="mt-2">
                  {/* Third column */}
                  <Card style={{height:"100%"}}>
                    <Card.Body>
                      <Link
                        to="/help"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Card.Title
                          className="text-center py-4"
                          style={{
                            fontFamily: "Open Sans",
                            fontSize: "20px",
                            fontWeight: "400",
                            color: "#666666",
                          }}
                        >
                          <img src={help} alt="" height="31px" />{" "}
                          <span
                            style={{
                              fontFamily: "Open Sans",
                              fontSize: "20px",
                              fontWeight: "600",
                              color: "#333333",
                              paddingLeft: "10%",
                            }}
                          >
                            Help
                          </span>
                        </Card.Title>
                      </Link>

                      {/* <Card.Title className="text-center py-4">Help</Card.Title> */}
                    </Card.Body>
                  </Card>
                </Col>
              ) : (
                <></>
              )}
            </Row>
            <Row className="my-2">
              <Col sm={6} md={6} lg={3} className="mt-2">
                {/* First column */}
                <Card style={{height:"100%"}}>
                  <Card.Body>
                    <Link
                      to="/trips"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Card.Title
                        className="text-center py-4"
                        style={{
                          fontFamily: "Open Sans",
                          fontSize: "20px",
                          fontWeight: "400",
                          color: "#666666",
                        }}
                      >
                        <img src={trips} alt="" />{" "}
                        <span
                          style={{
                            fontFamily: "Open Sans",
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#333333",
                            paddingLeft: "10%",
                          }}
                        >
                          Trips
                        </span>
                      </Card.Title>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={6} lg={3} className="mt-2">
                {/* Second column */}
                <Card style={{height:"100%"}}>
                  <Card.Body>
                    <Link
                      to="/fav"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Card.Title
                        className="text-center py-4"
                        style={{
                          fontFamily: "Open Sans",
                          fontSize: "20px",
                          fontWeight: "400",
                          color: "#666666",
                        }}
                      >
                        <img src={fav} alt="" />{" "}
                        <span
                          style={{
                            fontFamily: "Open Sans",
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#333333",
                            paddingLeft: "10%",
                          }}
                        >
                          Favourite
                        </span>
                      </Card.Title>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              {isTablet ? (
                <></>
              ) : (
                <Col sm={6} md={6} lg={3} className="mt-2">
                  <Card style={{height:"100%"}}>
                    <Card.Body>
                      <Link
                        to="/help"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Card.Title
                          className="text-center py-4"
                          style={{
                            fontFamily: "Open Sans",
                            fontSize: "20px",
                            fontWeight: "400",
                            color: "#666666",
                          }}
                        >
                          <img src={help} alt="" height="31px" />{" "}
                          <span
                            style={{
                              fontFamily: "Open Sans",
                              fontSize: "20px",
                              fontWeight: "600",
                              color: "#333333",
                              paddingLeft: "10%",
                            }}
                          >
                            Help
                          </span>
                        </Card.Title>
                      </Link>

                      {/* <Card.Title className="text-center py-4">Help</Card.Title> */}
                    </Card.Body>
                  </Card>
                </Col>
              )}
            </Row>
          </Container>
        </div>
        <div style={{ paddingTop: "10%" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
