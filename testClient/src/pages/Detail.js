import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineShareAlt, AiOutlineHeart } from "react-icons/ai";
// import img1 from "../../images/detailimg1.svg";
// import img2 from "../../images/detailimg2.svg";
// import img3 from "../../images/detailimg3.svg";
// import img4 from "../../images/detailimg4.svg";
// import img5 from "../../images/detailimg5.svg";
import boatCap from "../images/boatCap.svg";
import cap from "../images/cap.svg";
import sha from "../images/sha.svg";
import bed from "../images/bed.svg";
import people from "../images/people.svg";
import doublearrow from "../images/doublearrow.svg";

import flag from "../images/flag.svg";
import { useAlert } from "react-alert";
import { AiFillHeart } from "react-icons/ai";
import bookicon from '../images/bookingconditionicon.svg'
import cancellation from '../images/cancellation.svg'
import captain from '../images/captain.svg'
import Footer from '../Compunents/HomeSections/Footer/Footer'
import owner1 from '../images/owner1.svg'
import scan from "../images/scan.svg";
import owner from "../images/owner.svg";
import user from "../images/user.svg";
import tfa from "../images/tfa.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import time from '../images/time.svg'
import { GoArrowBoth } from "react-icons/go";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import { Io5CiCirclePlus } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import { BsCalendar } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FcCancel } from "react-icons/fc";
import { TiTickOutline } from "react-icons/ti";
import Boats from "../Compunents/BoatCard/BoatCard";
import DateRangePicker from '../Compunents/BoatDetailComponents/DateRangePicker' 
import axios from "axios";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './detail.css'
import Header from "../Compunents/Header/Header";
import { TextField, IconButton } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { RiCloseLine } from "react-icons/ri";
import Features from '../Compunents/BoatDetailComponents/Features'
import location from '../images/location.svg'
import { FaHeart, FaStar, FaUserFriends, FaDollarSign } from "react-icons/fa";
import {
  GrUserPolice,

  GrUserSettings,
} from "react-icons/gr";


import { Card } from "react-bootstrap";
// import "./boat.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
// import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import imgchat from "../images/chaticon.svg";
import Map from "../Compunents/Map/MapLoader";
import BannerImages from '../Compunents/BoatDetailComponents/BannerImages'
import OtherFeatures from "../Compunents/BoatDetailComponents/OtherFeatures";
import OwnerProfileCard from "../Compunents/BoatDetailComponents/OwnerProfileCard";
import AdditionalService from "../Compunents/BoatDetailComponents/AdditionalService";
import BorderRadiusButton from "../Compunents/UI/BorderRadiusButton/BorderRadiusButton";
import Comments from "../Compunents/BoatDetailComponents/Comments";
import { useMediaQuery } from "react-responsive";


const iconStyle = {
    fontSize:"30px",
    padding:"4px",
    backgroundColor:"#00BFFF",
    borderRadius:"50%",
    color:"white",

}

const MyComponent = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 576 });
const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
const isMdScreen = useMediaQuery({ minWidth: 577, maxWidth: 991 });

const reviewsStyle={
  width: isMobile ?  "100%" : isTablet ?"100% " : "50%",
}
const contain = {
  minWidth: isMobile ? "435px " : isTablet ? "700px " : "1200px ",
};

   const searchParams = new URLSearchParams(window.location.search);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showCaptainCrew, setShowCaptainCrew] = useState(false);
  const [showBookingConditions, setShowBookingConditions] = useState(false);
  const [showCancellationPolicy, setShowCancellationPolicy] = useState(false);

  const [new_fromdd, setNewFromDate] = useState(
    JSON.parse(searchParams.get("fromdate"))
  ); 
  
  const [new_todd, setNewToDate] = useState(
    JSON.parse(searchParams.get("todate"))
  );

    const handleFromDateChange = (newFromDate) => {
      console.log(newFromDate);
      setNewFromDate(newFromDate);
    };

    const handleToDateChange = (newToDate) => {
      console.log(newToDate);
      setNewToDate(newToDate);
    };
     const handleDaysChange = (day) => {
       setDays(day);
     };

  //booking
  const [destination, setDestination] = useState("");
  const [formattedStartDate, setFormattedStartDate] = useState("");
  const [formattedEndDate, setFormattedEndDate] = useState("");
  const [price, setPrice] = useState(0);
  const [daysprice, setDaysPrice] = useState(0);
  const [days, setDays] = useState(0);
  const [comments, setComments] = useState([]);
  const alert = useAlert();
  //
  const [ratings, setRatings] = useState([]);
  const [showAmenities2, setShowAmenities2] = useState(false);
  const [showAmenities3, setShowAmenities3] = useState(false);
  const [additionalServicesPrice, setAdditionalServicesPrice] = useState(0);
  const [total, setTotal] = useState(0);

  // get boats

 
  let boatData = JSON.parse(searchParams.get("boat"));
  let fromdd = new_fromdd;
  let todd = new_todd;
  const abcdate = fromdd;
  const xyzdate = todd;

console.log(new_fromdd + " new dates  " + new_todd+ " " + days);
  console.log(fromdd + "  detail  " + todd);

  const [minCapacity, maxCapacity] = boatData.capacity.split("-").map(Number);
  const [currentValue, setCurrentValue] = useState(minCapacity);

  const handleIncrement = () => {
    if (currentValue < maxCapacity) {
      setCurrentValue(currentValue + 1);
    }
  };

  const handleDecrement = () => {
    if (currentValue > minCapacity) {
      setCurrentValue(currentValue - 1);
    }
  };

  const [boats, setBoats] = useState([]);

  const from_field_Date = new Date(fromdd);
  const to_field_Date = new Date(todd);
  console.log(from_field_Date + " + " + to_field_Date);

  console.log(boatData.id + "  " + boatData.price);
  //

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const toggleCaptainCrew = () => {
    setShowCaptainCrew(!showCaptainCrew);
  };

  const toggleBookingConditions = () => {
    setShowBookingConditions(!showBookingConditions);
  };

  const toggleCancellationPolicy = () => {
    setShowCancellationPolicy(!showCancellationPolicy);
  };
  const [showAmenities, setShowAmenities] = useState(false);

  const toggleAmenities = () => {
    setShowAmenities(!showAmenities);
  };
  const toggleAmenities2 = () => {
    setShowAmenities2(!showAmenities2);
  };
  const toggleAmenities3 = () => {
    setShowAmenities3(!showAmenities3);
  };

  const [amenities, setAmenities] = useState({
    captain: false,
    kayak: false,
    "safety-net": false,
    "extra-bedding": false,
  });

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setAmenities((prevAmenities) => ({
      ...prevAmenities,
      [id]: checked,
    }));
  };

  const isChecked = (amenity) => {
    return amenities[amenity];
  };
const accessToken = localStorage.getItem("accessToken");
  // booking

function convertDateFormat(dateString) {
  const parts = dateString.split("/");
  if (parts.length === 3) {
    const month = parts[0];
    const day = parts[1];
    const year = parts[2];
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  } else {
    // Handle invalid input
    return formatDate2(fromdd);
  }
}

  const handleBookClick = () => {

    
    console.log("token" +accessToken);
      // if (!accessToken) {
      //   // Handle the case where there's no accessToken (user is not authenticated)
      //   alert.show("Please log in to book the boat.", {
      //     type: "info",
      //   });
      //   return;
      // }

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const boatid = boatData.id;
    const apiUrl = `http://127.0.0.1:8000/api/boats/${boatid}/book/`;

    const from_date = fromdd
    const to_date =todd
  
console.log(to_date)
    //
    const id = localStorage.getItem("id");
    const formData = new FormData();
    formData.append("user", id);
    formData.append("boat", boatid);
    formData.append("no_of_persons", currentValue);
    formData.append("from_date",convertDateFormat(from_date));
    formData.append("to_date", formatDate2(to_date));
    formData.append("commision_fees", 430);
    formData.append("total", parseInt(totalsum));


    axios
      .post(apiUrl, formData, config)
      .then((response) => {
        // Handle the response if needed
        alert.show("Boat successfully added!", {
          type: "success",
          timeout: 5000,
        });
        console.log("API Response:", response.data);
      })
      .catch((error) => {
        // Handle the error if needed
        console.error("API Error:", error.response.data.non_field_errors);
        alert.show(error.response.data.non_field_errors, {
          type: "error",
          timeout: 5000,
        });
      });
  };

  //
  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  // Format the start and end dates
  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatDate2 = (date) => {
    console.log(date);
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();

    console.log(`${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setFormattedStartDate(formatDate(start));
    setFormattedEndDate(formatDate(end));
    console.log(start + "  " + end);
  };

  const commissionFees = 430;

  useEffect(() => {
    setBoats(boatData);
    fetchBoats();
  }, []);

  const fetchBoats = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await axios.get(
        "http://127.0.0.1:8000/api/boats/",
        config
      );
      const boatid = 6;
      setBoats(response.data);
      console.log(response.data);
      const response2 = await axios.get(
        `http://127.0.0.1:8000/api/boats/${boatid}/reviews/`,
        config
      );
      console.log(response2);
    } catch (error) {
      console.error(error);
    }
  };
  //

  let daysDifference;

  useEffect(() => {
    const from_date = fromdd;
    const to_date = todd;
    const fromDateObj = new Date(from_date);
    const toDateObj = new Date(to_date);

    const timeDifference = toDateObj.getTime() - fromDateObj.getTime();
    daysDifference = timeDifference / (1000 * 3600 * 24);
    setDays(daysDifference);

    console.log("Number of days between the two dates:", daysDifference);
    // const daysprice1 = ;

    let val = 0;

    if (amenities.captain) {
      const captainPrice = parseFloat(
        boatData.additionalServices.captain.price
      );
      console.log("Captain Price:", captainPrice);
      val += captainPrice;
    }
    if (amenities.kayak) {
      const kayakPrice = parseFloat(boatData.additionalServices.kayak.price);
      val += kayakPrice;
    }
    if (amenities["safety-net"]) {
      const safetyNetPrice = parseFloat(
        boatData.additionalServices.safetyNet.price
      );
      val += safetyNetPrice;
    }
    if (amenities["extra-bedding"]) {
      const extraBeddingPrice = parseFloat(
        boatData.additionalServices.extraBedding.price
      );
      val += extraBeddingPrice;
    }

    console.log("Additional Services Price (val):", val);
    setAdditionalServicesPrice(val);
    // setDaysPrice(boats.price * days);
    let daysp = 0;
    daysp = boatData.price * days;
    const price = val + commissionFees;
    console.log("Total Price (val + commissionFees):", price);

    setTotal(price);
  }, [amenities, total, fromdd]);

  console.log(boatData.price);
  let totalsum = boatData.price * days;
  totalsum = totalsum + total;

  useEffect(() => {
    const fetchAverageRatings = () => {
      const boatId = boatData.id;
      const accessToken = localStorage.getItem("accessToken");
      axios
        .get(
          `http://127.0.0.1:8000/api/boats/average-ratings/?boat_id=${boatId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((response) => {
          const averageRatings = response.data;
          setRatings(averageRatings);
          console.log(averageRatings);
        })
        .catch((error) => {
          // Handle errors here
          console.error("Error fetching average ratings:", error);
        });
    };

    fetchAverageRatings();
  }, []);

  useEffect(() => {
    const fetchAverageRatings = () => {
      const boatId = boatData.id;
      const accessToken = localStorage.getItem("accessToken");
      axios
        .get(`http://127.0.0.1:8000/api/boats/${boatId}/reviews/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          // setRatings(averageRatings);
          setComments(response.data);
        })
        .catch((error) => {
          // Handle errors here
          console.error("Error fetching average ratings:", error);
        });
    };

    fetchAverageRatings();
  }, []);
  const [Boatowner, setOwner] = useState([]);

  useEffect(() => {
    const fetchAverageRatings = () => {
      const boatId = boatData.id;
      const accessToken = localStorage.getItem("accessToken");
      axios
        .get(`http://127.0.0.1:8000/api/boats/${boatData.id}/owner/ `, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          // setRatings(averageRatings);
          setOwner(response.data);
        })
        .catch((error) => {
          // Handle errors here
          console.error("Error fetching average ratings:", error);
        });
    };

    fetchAverageRatings();
  }, []);

  console.log(Boatowner);

  console.log(comments);

  const renderStars = (rating) => {
    const starCount = Math.round(rating); // Round the rating to the nearest integer to get the number of stars

    // Generate an array of star icons based on the starCount
    const stars = Array.from({ length: starCount }, (_, index) => (
      <span key={index}>&#9733;</span>
    ));

    return stars;
  };
console.log(boatData.location);

  return (
    <div style={contain}>
      <Container fluid style={{ paddingRight: "0px",paddingLeft:"0px" }}>
        <Header />
        <Container fluid={isTablet}>
          <Row
            className="align-items-center d-flex"
            style={{ marginTop: "7%", marginBottom: "3%" }}
          >
            <Col xs={9} sm={6} md={6} lg={4}>
              <div>
                <h3
                  style={{
                    fontFamily: "Playfair Display",
                    fontWeight: "700",
                    fontSize: "28px",
                  }}
                >
                  Into the Sea
                </h3>

                <p
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: "400",
                    fontSize: "20px",
                  }}
                >
                  CORFU, greece
                  <FaStar
                    style={{
                      marginLeft: "14%",
                      color: "#00AEEF",
                      fontSize: "15px",
                      marginTop: "-5px",
                    }}
                  />{" "}
                  <span style={{ padding: "0px 10px 0px 10px " }}>
                    {boatData.averageRatings} 4,72 (32)
                  </span>{" "}
                </p>
                <span className="card-text"></span>
              </div>
            </Col>
            <Col xs={3} sm={6} md={6}>
              <div className="d-flex justify-content-end">
                <Button
                  variant=" rounded"
                  className="bg-white shadow"
                  style={{
                    color: "#666666",
                    borderColor: "#CCCCCC",
                    fontWeight: "700",
                    marginRight: "2%",
                  }}
                >
                  <AiOutlineShareAlt
                    style={{ fontWeight: "700", color: "#666666" }}
                  />{" "}
                  {isMobile ? <></> : <> Share</>}
                </Button>

                <Button
                  variant=" rounded"
                  className="bg-white shadow"
                  style={{
                    color: "#666666",
                    borderColor: "#CCCCCC",
                    fontWeight: "700",
                  }}
                >
                  <AiFillHeart
                    style={{ fontWeight: "700", color: "#666666" }}
                  />{" "}
                  {isMobile ? <></> : <> Add to Favorite</>}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        <BannerImages boatData={boatData} />

        <div>
          <Link to={`/chat/${boatData.owner}`}>
            {/* <ChatRoundedIcon
            style={{
              position: "fixed",
              top: "px",
              bottom: "10px",
              right: "50px",
            }}
          /> */}
            <img
              style={{
                position: "fixed",
                top: "px",
                bottom: "10px",
                right: "50px",
                width: "3%",
              }}
              src={imgchat}
              alt="Image 1"
              width="px"
              className="img-fluid"
            />
          </Link>
        </div>

        {isMobile ? (
          <div
            className="container  align-items-center m-2 p-2 "
            style={{ justifyContent: "space-evenly", color: "#666666" }}
          >
            <div className="row d-flex justify-content-center ">
              <div className="col-12 d-flex justify-content-center">
                {" "}
                <span className="text-center border-end px-4">
                  <img src={boatCap} alt="" />
                  <p className="m-1">{boatData.power}</p>
                </span>
                <span className="text-center border-end px-4 ">
                  <img src={cap} alt="" />

                  <p className="m-1">Captain Optional</p>
                </span>
                <span className="text-center border-end px-4">
                  <img src={doublearrow} alt="" />
                  <p className="m-1">{boatData.size} m</p>
                </span>
              </div>
              <div className="col-10 d-flex justify-content-center pt-3">
                {" "}
                <span className="text-center border-end px-4">
                  <img src={people} alt="" />
                  <p className="m-1">{boatData.capacity}</p>
                </span>
                <span className="text-center border-end px-4">
                  <img src={sha} alt="" />
                  <p className="m-1">{boatData.amenities.shower.quantity}</p>
                </span>
                <span className="text-center px-4">
                  <img src={bed} alt="" />
                  <p className="m-1">{boatData.amenities.bed.quantity}</p>
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <Container fluid={isMdScreen}>
          <Row>
            <Col sm={6} xs={12} style={{ marginTop: "2%" }}>
              <OtherFeatures boatData={boatData} />
              <div className="mt-4 p-3">
                {showFullDescription ? (
                  <div>
                    <p
                      style={{
                        fontFamily: "Open Sans",
                        fontWeight: "400",
                        fontSize: "16px",
                      }}
                    >
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                    <span
                      onClick={toggleDescription}
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        fontFamily: "Open sans",
                      }}
                    >
                      Show less
                      <BsChevronUp className="me-2" />
                    </span>
                  </div>
                ) : (
                  <div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using ...
                    </p>
                    <span
                      onClick={toggleDescription}
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        fontFamily: "Open sans",
                      }}
                    >
                      Read full description <BsChevronDown className="me-2" />
                    </span>
                  </div>
                )}
              </div>
              <hr style={{ color: "#CCCCCC" }} />

              <div>
                <div
                  className="d-flex align-items-center"
                  style={{ paddingTop: "1%" }}
                >
                  <img src={captain} alt="" />
                  {/* <GrUserPolice className="me-2" style={{ color: "#00BFFF" }} /> */}
                  <span
                    onClick={toggleCaptainCrew}
                    className="p-1"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "600",
                      fontSize: "16px",
                      color: "#333333",
                    }}
                  >
                    Captain & Crew Info
                  </span>
                  {showCaptainCrew ? (
                    <BsChevronUp className="me-2" />
                  ) : (
                    <BsChevronDown className="me-2" />
                  )}
                </div>
                {showCaptainCrew && (
                  <div>
                    <p
                      style={{
                        fontFamily: "Open Sans",
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#09101D",
                      }}
                    >
                      Captain and crew information goes here
                    </p>
                  </div>
                )}

                <div
                  className="d-flex align-items-center"
                  style={{ paddingTop: "1%" }}
                >
                  {/* <GrUserSettings className="me-2" /> */}
                  <img src={bookicon} alt="" />
                  <span
                    onClick={toggleBookingConditions}
                    className="p-1"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "600",
                      fontSize: "16px",
                      color: "#333333",
                    }}
                  >
                    Booking Conditions
                  </span>
                  {showBookingConditions ? (
                    <BsChevronUp className="me-2" />
                  ) : (
                    <BsChevronDown className="me-2" />
                  )}
                </div>
                {showBookingConditions && (
                  <div>
                    <p
                      style={{
                        fontFamily: "Open Sans",
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#09101D",
                      }}
                    >
                      Booking conditions go here
                    </p>
                  </div>
                )}

                <div
                  className="d-flex align-items-center"
                  style={{ paddingTop: "1%" }}
                >
                  {/* <FcCancel className="me-2 " /> */}
                  <img src={cancellation} alt="" />
                  <span
                    onClick={toggleCancellationPolicy}
                    className="p-1"
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "600",
                      fontSize: "16px",
                      color: "#333333",
                    }}
                  >
                    Cancellation Policy{" "}
                    <a href="" style={{ textDecorationColor: "#00BFFF" }}>
                      {" "}
                      <strong style={{ color: "#00BFFF" }}>
                        Moderate
                      </strong>{" "}
                    </a>
                  </span>
                  {showCancellationPolicy ? (
                    <BsChevronUp
                      className="me-2"
                      onClick={toggleCancellationPolicy}
                    />
                  ) : (
                    <BsChevronDown
                      className="me-2"
                      onClick={toggleCancellationPolicy}
                    />
                  )}
                </div>
                {showCancellationPolicy && (
                  <div className="mx-2 px-3">
                    <p
                      style={{
                        fontFamily: "Open Sans",
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#09101D",
                      }}
                    >
                      <ul>
                        <li>
                          Free cancellations until 5 days before the booking
                          start time.
                        </li>
                        <li>
                          50% refund for cancellations between 3-5 days before
                          the booking start time.
                        </li>
                        <li>
                          Cancellations within 2 days of the booking start time
                          are non-refundable.
                        </li>
                      </ul>
                    </p>
                    <a href="" style={{ color: "#00BFFF" }}>
                      see our policy{" "}
                    </a>
                  </div>
                )}
              </div>
              <hr style={{ color: "#CCCCCC" }} />
              {/*  */}
              <div>
                <div className="d-flex " onClick={toggleAmenities}>
                  <h3
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#333333",
                    }}
                  >
                    Aminities
                  </h3>
                  <div className="flex-grow-1"></div>
                  <span className="">
                    {showAmenities ? (
                      <BsChevronUp className="" />
                    ) : (
                      <BsChevronDown className="" />
                    )}
                  </span>
                </div>
                {showAmenities && (
                  <div className="amenities">
                    <div
                      class="amenities-container"
                      style={{
                        fontSize: "14px",
                        display: isMobile || isTablet ? "grid" : "",
                        fontWeight: "400",
                      }}
                    >
                      {boatData.amenities.airConditioning.checked ? (
                        <span>
                          <TiTickOutline /> Air Conditioning
                        </span>
                      ) : (
                        <span>
                          <RiCloseLine /> Air Conditioning
                        </span>
                      )}

                      {boatData.amenities.galleyStoveOven.checked ? (
                        <span>
                          <TiTickOutline />
                          Galley Stove &amp; Oven
                        </span>
                      ) : (
                        <span>
                          <RiCloseLine /> Galley Stove &amp; Oven
                        </span>
                      )}
                      {boatData.amenities.lifeJacket.checked ? (
                        <span>
                          <TiTickOutline />
                          Life jackets safety gear
                        </span>
                      ) : (
                        <span>
                          <RiCloseLine />
                          Life jackets safety gear
                        </span>
                      )}
                      {boatData.amenities.swimLadder.checked ? (
                        <span>
                          <TiTickOutline />
                          Swim ladder
                        </span>
                      ) : (
                        <span>
                          <RiCloseLine />
                          Swim ladder
                        </span>
                      )}
                      {boatData.amenities.stereo.checked ? (
                        <span>
                          <TiTickOutline />
                          Stereo
                        </span>
                      ) : (
                        <span>
                          <RiCloseLine />
                          Stereo
                        </span>
                      )}
                      {boatData.amenities.wakeboard.checked ? (
                        <span>
                          <TiTickOutline />
                          Wakeboard
                        </span>
                      ) : (
                        <span>
                          <RiCloseLine />
                          Wakeboard
                        </span>
                      )}
                      {boatData.amenities.soundDeck.checked ? (
                        <span>
                          <TiTickOutline />
                          Sundeck
                        </span>
                      ) : (
                        <span>
                          <RiCloseLine />
                          Sundeck
                        </span>
                      )}
                      {boatData.amenities.shower.checked ? (
                        <span>
                          <TiTickOutline />
                          Shower
                        </span>
                      ) : (
                        <span>
                          <RiCloseLine />
                          Shower
                        </span>
                      )}
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "2%", marginBottom: "2%" }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "700",
                          fontFamily: "Open sans",
                        }}
                      >
                        Show all amenities
                      </span>
                      <BsChevronDown className="ms-2" />
                    </div>
                  </div>
                )}
              </div>
              <hr style={{ color: "#CCCCCC" }} />
              {/*Additiional service  */}
              <AdditionalService
                boatData={boatData}
                handleCheckboxChange={handleCheckboxChange}
                amenities={amenities}
              />
              <hr style={{ color: "#CCCCCC" }} />
              {/* Features */}
              <div>
                <div className="d-flex " onClick={toggleAmenities3}>
                  <h3
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#333333",
                    }}
                  >
                    Features
                  </h3>

                  <div className="flex-grow-1"></div>

                  <span className="">
                    {showAmenities3 ? (
                      <BsChevronUp className="" />
                    ) : (
                      <BsChevronDown className="" />
                    )}
                  </span>
                </div>
                {showAmenities3 && (
                  <div className="">
                    <div
                      class="details-container flex-wrap"
                      style={{
                        fontSize: "14px",
                        display: isMobile ? "grid" : "flex",
                        fontWeight: "400",
                      }}
                    >
                      <div class="detail-item detail-item-2col">
                        <span
                          class="label"
                          style={{
                            fontFamily: "Open Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                            color: "#666666",
                          }}
                        >
                          Year
                        </span>
                        <span
                          class="value"
                          style={{
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            fontSize: "16px",
                            color: "#333333",
                          }}
                        >
                          {boatData.year}
                        </span>
                      </div>
                      <div class="detail-item detail-item-2col">
                        <span
                          class="label"
                          style={{
                            fontFamily: "Open Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                            color: "#666666",
                          }}
                        >
                          Fuel
                        </span>
                        <span
                          class="value"
                          style={{
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            fontSize: "16px",
                            color: "#333333",
                          }}
                        >
                          {boatData.fuel}
                        </span>
                      </div>
                      <div class="detail-item detail-item-2col">
                        <span
                          class="label"
                          style={{
                            fontFamily: "Open Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                            color: "#666666",
                          }}
                        >
                          Brand
                        </span>
                        <span
                          class="value"
                          style={{
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            fontSize: "16px",
                            color: "#333333",
                          }}
                        >
                          {boatData.brand}
                        </span>
                      </div>
                      {/* <div class="detail-item detail-item-2col">
                      <span class="label">Engine</span>
                      <span class="value">{boatData.engine}</span>
                    </div> */}
                      <div
                        class="detail-item detail-item-2col"
                        style={{
                          fontFamily: "Open Sans",
                          fontWeight: "400",
                          fontSize: "16px",
                          color: "#666666",
                        }}
                      >
                        <span class="label">Model</span>
                        <span
                          class="value"
                          style={{
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            fontSize: "16px",
                            color: "#333333",
                          }}
                        >
                          {boatData.model}
                        </span>
                      </div>
                    </div>

                    <div
                      className="d-flex align-items-center"
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        fontFamily: "Open sans",
                      }}
                    >
                      <span>Show all features</span>
                      <BsChevronDown className="ms-2" />
                    </div>
                  </div>
                )}
              </div>

              <hr style={{ color: "#CCCCCC" }} />
              {/*  */}
              <div>
                <h2
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: "600",
                    fontSize: "18px",
                    color: "#333333",
                  }}
                >
                  Approximate location
                </h2>
                <p
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#666666",
                  }}
                >
                  You will get a detailed location instruction when you make a
                  booking.
                </p>
                <div class="row">
                  <div class="col">
                    <Map data={boatData.location} />
                    {/* <img src={map} class="img-fluid" alt="Cover Image" /> */}
                  </div>
                </div>
              </div>

              {/*  */}

              <hr style={{ color: "#CCCCCC" }} />

              <div>
                <h5
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "#333333",
                  }}
                >
                  When the day off the trif is juct around the corner
                </h5>
                <p
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#333333",
                  }}
                >
                  Sit back and relax text about us talking care of the process
                  and guiding the user along the way.
                </p>
                <Features
                  image={location}
                  heading="Location"
                  para="Find your boat effeortlessly with detailed instructions and embark on your journey."
                />
                <Features
                  image={scan}
                  heading="Scan to Check In"
                  para="scan the QR code you will find on boat to start your trip!"
                  CheckInTime="2:00 PM"
                />
                <Features
                  image={time}
                  heading="Time for adventure"
                  para="All set to chart your own course and create unforgetable memories on the open seas."
                />
                <Features
                  image={flag}
                  heading="See you next time!"
                  para="please find me a text from here blah blah"
                  CheckOutTime="10:00 AM"
                />
              </div>

              <hr style={{ color: "#CCCCCC" }} />
              {/* Reviews */}
              <div className="">
                <span
                  class=""
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "#333333",
                  }}
                >
                  Reviews
                </span>
                <span class="">
                  {" "}
                  <FaStar
                    style={{
                      marginLeft: "6%",
                      color: "#00AEEF",
                      fontSize: "15px",
                      marginTop: "-5px",
                    }}
                  />{" "}
                  <span style={{ padding: "0px 10px 0px 10px " }}>
                    {boatData.averageRatings} 4,72 (32)
                  </span>{" "}
                </span>

                <div className="mt-3">
                  <div class="d-sm-flex flex-sm-wrap">
                    <div
                      class="detail-item detail-item-2col"
                      style={reviewsStyle}
                    >
                      <span class="label">
                        <p
                          style={{
                            fontFamily: "Open Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                            color: "#333333",
                          }}
                        >
                          Listing Accuracy
                        </p>
                      </span>
                      <div
                        class="value d-grid "
                        style={{
                          fontFamily: "Open Sans",
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#00BFFF",
                        }}
                      >
                        <small>Awesome</small>
                        <span className="text-primary">
                          {renderStars(ratings.average_listing_accuracy)}
                        </span>
                      </div>
                    </div>

                    <div
                      class="detail-item detail-item-2col"
                      style={reviewsStyle}
                    >
                      <span class="label">
                        <p
                          style={{
                            fontFamily: "Open Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                            color: "#333333",
                          }}
                        >
                          Departure &amp; Return
                        </p>
                      </span>
                      <div
                        class="value d-grid"
                        style={{
                          fontFamily: "Open Sans",
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#00BFFF",
                        }}
                      >
                        <small>Awesome</small>
                        <span class="text-primary">
                          {renderStars(ratings.average_departure_and_return)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div class="d-sm-flex flex-sm-wrap">
                    <div
                      class="detail-item detail-item-2col"
                      style={reviewsStyle}
                    >
                      <span class="label">
                        <p
                          style={{
                            fontFamily: "Open Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                            color: "#333333",
                          }}
                        >
                          Vessel &amp; Equipment
                        </p>
                      </span>
                      <div
                        class="value d-grid "
                        style={{
                          fontFamily: "Open Sans",
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#00BFFF",
                        }}
                      >
                        <small>Awesome</small>
                        <span class="text-primary">
                          {renderStars(ratings.average_vessel_and_equipment)}
                        </span>
                      </div>
                    </div>

                    <div
                      class="detail-item detail-item-2col"
                      style={reviewsStyle}
                    >
                      <span class="label">
                        <p
                          style={{
                            fontFamily: "Open Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                            color: "#333333",
                          }}
                        >
                          Communication
                        </p>
                      </span>
                      <div
                        class="value d-grid"
                        style={{
                          fontFamily: "Open Sans",
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#00BFFF",
                        }}
                      >
                        <small>Awesome</small>
                        <span class="text-primary">
                          {renderStars(ratings.average_communication)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 ">
                  <div class="d-sm-flex flex-sm-wrap">
                    <div
                      class="detail-item detail-item-2col"
                      style={reviewsStyle}
                    >
                      <span class="label">
                        <p
                          style={{
                            fontFamily: "Open Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                            color: "#333333",
                          }}
                        >
                          Value
                        </p>
                      </span>
                      <div
                        class="value d-grid "
                        style={{
                          fontFamily: "Open Sans",
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#00BFFF",
                        }}
                      >
                        <small>Awesome</small>
                        <span class="text-primary">
                          {renderStars(ratings.average_value)}
                        </span>
                      </div>
                    </div>

                    <div
                      class="detail-item detail-item-2col"
                      style={reviewsStyle}
                    >
                      <span class="label">
                        <p
                          style={{
                            fontFamily: "Open Sans",
                            fontWeight: "400",
                            fontSize: "16px",
                            color: "#333333",
                          }}
                        >
                          Eco Friendly
                        </p>
                      </span>
                      <div
                        class="value d-grid"
                        style={{
                          fontFamily: "Open Sans",
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#00BFFF",
                        }}
                      >
                        <small>Awesome</small>
                        <span class="text-primary">
                          {renderStars(ratings.average_eco_friendly)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <hr style={{ color: "#CCCCCC" }} /> */}

              {/*  */}

              <Comments comments={comments} />

              {/* 
            {comments.map((comment, index) => (
              <div key={index} className="comment">
                <img
                  src={comment.profile_picture}
                  alt="Profile"
                  className="profile-pic"
                />
                <p className="comment-text">{comment.comment}</p>
              </div>
            ))} */}

              {/*  */}
            </Col>
            <Col
              md={5}
              sm={6}
              className="m-2  m-sm-0 "
              style={{ paddinTop: "2%" }}
            >
              <Card
                className="shadow p-3 p-sm-2 p-md-3"
                style={{ marginTop: "5%" }}
              >
                <Card.Body>
                  <p>
                    {" "}
                    <strong>
                      <BiDollar
                        className=""
                        style={{ color: "#605f5f", fontSize: "16px" }}
                      />{" "}
                      {boatData.price}
                    </strong>{" "}
                    /per day
                  </p>

                  <div className="input-group mb-3 mt-2">
                    <DateRangePicker
                      fromdd={formatDate(abcdate)}
                      todd={formatDate(xyzdate)}
                      setNewFromDate={handleFromDateChange}
                      setNewToDate={handleToDateChange}
                      setDaysDifference={handleDaysChange}
                    />
                  </div>
                  <InputGroup className="mb-3">
                    <FormControl
                      type="text"
                      placeholder="Enter value"
                      value={currentValue}
                      readOnly
                    />
                    <InputGroup.Text onClick={handleDecrement}>
                      <AiOutlineMinus />
                    </InputGroup.Text>
                    <InputGroup.Text onClick={handleIncrement}>
                      <AiOutlinePlus />
                    </InputGroup.Text>
                  </InputGroup>

                  <span className="justify-content-center text-center mb-3">
                    <Button
                      variant="primary color"
                      className="w-100 shadow-sm"
                      onClick={handleBookClick}
                      style={{
                        backgroundColor: "#00BFFF",
                        borderStyle: "none",
                        fontWeight: "700",
                      }}
                    >
                      Book
                    </Button>
                  </span>

                  <div
                    style={{
                      marginLeft: "36%",
                      color: "#666666",
                      paddinTop: "5%",
                      fontFamily: "Open Sans",
                      fontSize: "12px",
                      fontWeight: "400",
                      marginTop: "3%",
                      marginBottom: "3%",
                    }}
                  >
                    you will not be charged
                  </div>

                  <div className="d-flex justify-content-between">
                    <span>
                      <BiDollar
                        className="me-2"
                        style={{ color: "#605f5f", fontSize: "16px" }}
                      />
                      <span>
                        {boatData.price} &times; {days} days
                      </span>
                    </span>
                    <span>
                      <BiDollar className="me-2" />
                      {boatData.price * days}
                    </span>
                  </div>
                  <hr style={{ color: "#CCCCCC" }} />
                  {/* additional services */}

                  <div className="d-flex justify-content-between">
                    <span>Additional Services</span>
                    <span>
                      <BiDollar className="me-2" />
                      {additionalServicesPrice}
                    </span>
                  </div>
                  {/*  */}
                  {isChecked("captain") && (
                    <div className="d-flex justify-content-between mt-3">
                      <Form.Check
                        type="checkbox"
                        id="captainCheckbox"
                        label="Captain"
                        className="rounded-circle"
                        checked // This will set the checkbox as checked
                      />
                      <span className="text-sm">
                        <BiDollar className="me-2" />
                        <small>
                          {boatData.additionalServices.captain.price}
                        </small>
                      </span>
                    </div>
                  )}

                  {isChecked("kayak") && (
                    <div className="d-flex justify-content-between mt-2">
                      <Form.Check
                        type="checkbox"
                        id="kayakCheckbox"
                        label="Kayak"
                        className="rounded-circle"
                        checked // This will set the checkbox as checked
                      />
                      <span className="text-sm">
                        <BiDollar className="me-2" />
                        {boatData.additionalServices.kayak.price}
                      </span>
                    </div>
                  )}

                  {isChecked("chef") && (
                    <div className="d-flex justify-content-between mt-2">
                      <Form.Check
                        type="checkbox"
                        id="chefCheckbox"
                        label="Chef"
                        className="rounded-circle"
                        checked // This will set the checkbox as checked
                      />
                      <span className="text-sm">
                        <BiDollar
                          className="me-2"
                          style={{ color: "#605f5f", fontSize: "16px" }}
                        />
                        <small>{boatData.additionalServices.chef.price}</small>
                      </span>
                    </div>
                  )}

                  {isChecked("safety-net") && (
                    <div className="d-flex justify-content-between mt-2">
                      <Form.Check
                        type="checkbox"
                        id="safetyNetCheckbox"
                        label="Safety Net"
                        className="rounded-circle"
                        checked // This will set the checkbox as checked
                      />
                      <span className="text-sm">
                        <BiDollar
                          className="me-2"
                          style={{ color: "#605f5f", fontSize: "16px" }}
                        />
                        <small>
                          {boatData.additionalServices.safetyNet.price}
                        </small>
                      </span>
                    </div>
                  )}

                  {isChecked("extra-bedding") && (
                    <div className="d-flex justify-content-between mt-2">
                      <Form.Check
                        type="checkbox"
                        id="extraBeddingCheckbox"
                        label="Extra Bedding"
                        className="rounded-circle"
                        checked // This will set the checkbox as checked
                      />
                      <span className="text-sm">
                        <BiDollar
                          style={{ fontWeight: "400" }}
                          className="me-2"
                        />
                        <small>
                          {boatData.additionalServices.extraBedding.price}
                        </small>
                      </span>
                    </div>
                  )}

                  {/* additional services */}

                  <hr style={{ color: "#CCCCCC" }} />
                  <div className="d-flex justify-content-between">
                    <span>Commission Fees</span>

                    <span>
                      <BiDollar
                        className="me-2"
                        style={{ color: "#605f5f", fontSize: "16px" }}
                      />
                      {commissionFees}
                    </span>
                  </div>
                  <hr style={{ color: "#CCCCCC" }} />

                  <div className="d-flex justify-content-between">
                    <strong> Total</strong>
                    <span>
                      <BiDollar className="me-2" />
                      <strong>{totalsum}</strong>
                    </span>
                  </div>
                </Card.Body>
              </Card>

              <hr style={{ color: "#CCCCCC" }} />

              <OwnerProfileCard Boatowner={Boatowner} />

              <hr style={{ color: "#CCCCCC" }} />
            </Col>
          </Row>
        </Container>

        <Row
          style={{
            backgroundColor: "#f2f2f2",
            padding: "7%",
            paddingTop: "2%",
          }}
        >
          <div
            className="row justify-content-center"
            style={{
              fontFamily: "Open Sans",
              color: "#333333",
              fontWeight: "600",
              fontSize: "20px",
              paddingTop: "3%",
              paddingBottom: "4%",
            }}
          >
            Similar listings in Corfu
          </div>
          <div class="flex-row d-sm-flex justify-content-center ">
            <Col className="d-none d-md-flex align-items-center justify-content-center  ">
              <IoIosArrowBack style={iconStyle} />
            </Col>
            <div class="col-sm-6  col-md-3 col-12  justify-content-center">
              {" "}
              <Boats />
            </div>
            <div class="col-sm-6 col-md-3 col-12  justify-content-center mx-sm-3">
              {" "}
              <Boats />
            </div>
            <div class="col-md-3 d-flex d-sm-none  d-md-flex   col-12  justify-content-center">
              {" "}
              <Boats />
            </div>
            <Col className="d-none d-md-flex align-items-center justify-content-center">
              <IoIosArrowForward style={iconStyle} />
            </Col>
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default MyComponent;
