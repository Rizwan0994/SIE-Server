import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeart, FaStar, FaUserFriends, FaDollarSign } from "react-icons/fa";
import { GrSettingsOption } from "react-icons/gr";
import { PiArrowsHorizontalLight } from "react-icons/pi";
import { RiSpeedUpFill } from "react-icons/ri";
import { GoArrowBoth } from "react-icons/go";
import axios from "axios";
import { FaTachometerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Boat = ({ data, fromdate, todate }) => {
  // console.log(data[0].images[0].image);
  console.log(fromdate + " sadasas  " + todate);
  const [favorites, setFavorites] = useState([]);

  let user = localStorage.getItem("owner");
  let boat;
  // console.log(favorite);
  console.log(fromdate + " " + todate);

  const handleCard = (boatid) => {
    console.log(boatid);
    const searchParams = new URLSearchParams();
    searchParams.append("boatid", JSON.stringify(boatid));
    window.location.href = `/reviews?${searchParams.toString()}`;
  };


  // get_fav
  let accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/boats/getfavorites/",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const updatedFavorites = response.data.map((fav) => ({
          boatid: fav.boat,
          fav: fav.fav,
        }));

        setFavorites(updatedFavorites);
        console.log(updatedFavorites);
      } catch (error) {
        console.error("Error fetching favorite status:", error);
      }
    };

    fetchFavoriteStatus();
  }, []);

  //get fav
  const handleFavoriteToggle = async (boatId) => {
    try {
      const updatedFavorites = [...favorites];
      const boatIndex = updatedFavorites.findIndex(
        (fav) => fav.boatid === boatId
      );

      if (boatIndex !== -1) {
        updatedFavorites[boatIndex].fav = !updatedFavorites[boatIndex].fav;
      } else {
        updatedFavorites.push({ boatid: boatId, fav: true });
      }

      setFavorites(updatedFavorites);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/boats/favorite/",
        {
          user: parseFloat(user),
          boat: boatId,
          fav: updatedFavorites[boatIndex].fav,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  return (
    <Container>
      <div className="p-3 m-2">
        <Row style={{ display: "flex" }}>
          {data.map((boat, index) => (
            <Col md={4} key={index}>
              <div
                className="card m-1 shadow"
                style={{
                  width: "100%",

                  borderRadius: "30px",
                  overflow: "hidden",
                  borderStyle: "none",
                }}
              >
                <Carousel controls={false}>
                  <Carousel.Item>
                    <img
                      style={{ height: "300px" }}
                      src={boat.images[0].image}
                      className="d-block w-100"
                      alt={`Image ${index + 1}`}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ height: "300px" }}
                      src={boat.images[1].image}
                      className="d-block w-100"
                      alt={`Image ${index + 2}`}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ height: "300px" }}
                      src={boat.images[2].image}
                      className="d-block w-100"
                      alt={`Image ${index + 3}`}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ height: "300px" }}
                      src={boat.images[3].image}
                      className="d-block w-100"
                      alt={`Image ${index + 3}`}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ height: "300px" }}
                      src={boat.images[4].image}
                      className="d-block w-100"
                      alt={`Image ${index + 3}`}
                    />
                  </Carousel.Item>
                </Carousel>
                {/* <Link to={{ pathname: "/detail", state: { boatData: boat } }}> */}

                <div className="card-body">
                  <div>
                    <span
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "25px",
                        cursor: "pointer",
                        color: favorites.find((fav) => fav.boatid === boat.id)
                          ?.fav
                          ? "red"
                          : "#F5F5F5",
                      }}
                      onClick={() => handleFavoriteToggle(boat.id)}
                    >
                      <FaHeart />
                    </span>
                  </div>

                  <div
                    className="d-flex justify-content-between"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleCard(boat.id)}
                  >
                    <p className="card-text">{boat.typeOfUse}, Pontoons</p>
                    <p className="card-text">
                      <FaStar
                        style={{
                          color: "#00AEEF",
                          fontSize: "15px",
                          marginTop: "-5px",
                        }}
                      />{" "}
                      <span style={{ padding: "0px 10px 0px 10px " }}>
                        {boat.average_boat_rating} (32)
                      </span>{" "}
                    </p>
                  </div>
                  <h5 className="card-title">Boat</h5>
                  <p className="card-text"> {boat.location} , PAROS ,GREECE</p>

                  <div className="d-flex justify-content-start">
                    <p className="card-text">
                      <FaUserFriends style={{ color: "#858C94" }} />{" "}
                      <span
                        style={{ paddingLeft: "10px", paddingRight: "10px" }}
                      >
                        {boat.capacity} Guests
                      </span>
                    </p>
                    <p className="card-text">
                      <GoArrowBoth style={{ color: "#858C94" }} />{" "}
                      <span
                        style={{ paddingLeft: "10px", paddingRight: "10px" }}
                      >
                        {boat.size}m{" "}
                      </span>
                    </p>
                    <p className="card-text">
                      <FaTachometerAlt style={{ color: "#858C94" }} />
                      <span
                        style={{ paddingLeft: "10px", paddingRight: "10px" }}
                      >
                        {boat.speed} 150hp
                      </span>
                    </p>
                  </div>
                  <div className="mb-2">
                    <p className="card-text">
                      <GrSettingsOption style={{ color: "#858C94" }} />{" "}
                      <span
                        style={{ paddingLeft: "10px", paddingRight: "10px" }}
                      >
                        With or Without crew
                      </span>
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="card-text">
                      <FaDollarSign style={{ color: "#858C94" }} />{" "}
                      <span
                        style={{ paddingLeft: "10px", paddingRight: "10px" }}
                      >
                        Estimated Price: <b>{boat.price}</b> /per day
                      </span>
                    </p>
                  </div>
                </div>

                {/* <Link/> */}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Boat;
