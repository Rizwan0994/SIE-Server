import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Header from "../../Compunents/Header/Header";
import Footer from '../../Compunents/HomeSections/Footer/Footer'

const initialReview = {
  ListingAccuracy: {
    name: "Listing Accuracy",
    Rate: 1,
    stars: [1, 2, 3, 4, 5],
  },
  Departure: {
    name: "Departure",
    Rate: 1,
    stars: [1, 2, 3, 4, 5],
  },
  Communication: {
    name: "Communication",
    Rate: 1,
    stars: [1, 2, 3, 4, 5],
  },
  Vessel: {
    name: "Vessel",
    Rate: 1,
    stars: [1, 2, 3, 4, 5],
  },
  Value: {
    name: "Value",
    Rate: 1,
    stars: [1, 2, 3, 4, 5],
  },
  EcoFriendly: {
    name: "Eco Friendly",
    Rate: 1,
    stars: [1, 2, 3, 4, 5],
  },
};


function Ratings() {

  const location = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
    let boatid = JSON.parse(searchParams.get("boatid"));
    console.log(boatid);
 
 const [Review, setReview] = useState(initialReview);

 const handleStarClick = (category, stars) => {
   setReview((prevReview) => ({
     ...prevReview,
     [category]: {
       ...prevReview[category],
       Rate: stars.length,
     },
   }));
 };
  

  // const handleStarClick = (category, stars) => {
  //   Review[category].Rate = stars.length;
  //   console.log(Review);
  // };

  const [commentText, setCommentChange] = useState("");
  let profile_pic = localStorage.getItem("pro_pic");
  console.log(profile_pic);

const PostButtonClick = () => {

  const uid = localStorage.getItem("owner");
  const bid = boatid;
  const username = localStorage.getItem("username");
 const ppic = "http://127.0.0.1:8000" + profile_pic;
  
    const formData = new FormData();
    formData.append("uid", uid);
    formData.append("bid", parseFloat(bid));
    formData.append("listing_accuracy", Review.ListingAccuracy.Rate);
    formData.append("departure_and_return", Review.Departure.Rate);
    formData.append("communication", Review.Communication.Rate);
    formData.append("vessel_and_equipment", Review.Vessel.Rate);
    formData.append("value", Review.Value.Rate);
    formData.append("eco_friendly", Review.EcoFriendly.Rate);
    formData.append("comment", commentText);
    formData.append("username", username);
    formData.append("profile_picture", ppic);
const accessToken = localStorage.getItem("accessToken");

  axios
    .post("http://127.0.0.1:8000/api/boats/create-review/", formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      // Handle success if needed
      console.log("Post request successful:", response.data);
    })
    .catch((error) => {
      // Handle error if needed
      console.error("Post request failed:", error);
    });
};





  return (
    <div>
      <Header />
      <h4 className="mt-5 pt-5" style={{ textAlign: "center" }}>Reviews</h4>

      <div className="container pt-5">
        {/* Listing Accuracy */}
        <div className="row justify-content-center">
          <div className="col-3">
            <h6>{Review.ListingAccuracy.name}</h6>
          </div>
          <div className="col-3 d-flex justify-content-end">
            {Review.ListingAccuracy.stars.map((star, index) => (
              <React.Fragment key={index}>
                {index < Review.ListingAccuracy.Rate ? (
                  <AiFillStar
                    onClick={() =>
                      handleStarClick(
                        "ListingAccuracy",
                        Review.ListingAccuracy.stars.slice(0, index + 1)
                      )
                    }
                  />
                ) : (
                  <AiOutlineStar
                    onClick={() =>
                      handleStarClick(
                        "ListingAccuracy",
                        Review.ListingAccuracy.stars.slice(0, index + 1)
                      )
                    }
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Departure */}
        <div className="row justify-content-center">
          <div className="col-3">
            <h6>{Review.Departure.name}</h6>
          </div>
          <div className="col-3 d-flex justify-content-end">
            {Review.Departure.stars.map((star, index) => (
              <React.Fragment key={index}>
                {index < Review.Departure.Rate ? (
                  <AiFillStar
                    onClick={() =>
                      handleStarClick(
                        "Departure",
                        Review.Departure.stars.slice(0, index + 1)
                      )
                    }
                  />
                ) : (
                  <AiOutlineStar
                    onClick={() =>
                      handleStarClick(
                        "Departure",
                        Review.Departure.stars.slice(0, index + 1)
                      )
                    }
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Communication */}
        <div className="row justify-content-center">
          <div className="col-3">
            <h6>{Review.Communication.name}</h6>
          </div>
          <div className="col-3 d-flex justify-content-end">
            {Review.Communication.stars.map((star, index) => (
              <React.Fragment key={index}>
                {index < Review.Communication.Rate ? (
                  <AiFillStar
                    onClick={() =>
                      handleStarClick(
                        "Communication",
                        Review.Communication.stars.slice(0, index + 1)
                      )
                    }
                  />
                ) : (
                  <AiOutlineStar
                    onClick={() =>
                      handleStarClick(
                        "Communication",
                        Review.Communication.stars.slice(0, index + 1)
                      )
                    }
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Vessel */}
        <div className="row justify-content-center">
          <div className="col-3">
            <h6>{Review.Vessel.name}</h6>
          </div>
          <div className="col-3 d-flex justify-content-end">
            {Review.Vessel.stars.map((star, index) => (
              <React.Fragment key={index}>
                {index < Review.Vessel.Rate ? (
                  <AiFillStar
                    onClick={() =>
                      handleStarClick(
                        "Vessel",
                        Review.Vessel.stars.slice(0, index + 1)
                      )
                    }
                  />
                ) : (
                  <AiOutlineStar
                    onClick={() =>
                      handleStarClick(
                        "Vessel",
                        Review.Vessel.stars.slice(0, index + 1)
                      )
                    }
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Value */}
        <div className="row justify-content-center">
          <div className="col-3">
            <h6>{Review.Value.name}</h6>
          </div>
          <div className="col-3 d-flex justify-content-end">
            {Review.Value.stars.map((star, index) => (
              <React.Fragment key={index}>
                {index < Review.Value.Rate ? (
                  <AiFillStar
                    onClick={() =>
                      handleStarClick(
                        "Value",
                        Review.Value.stars.slice(0, index + 1)
                      )
                    }
                  />
                ) : (
                  <AiOutlineStar
                    onClick={() =>
                      handleStarClick(
                        "Value",
                        Review.Value.stars.slice(0, index + 1)
                      )
                    }
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Eco Friendly */}
        <div className="row justify-content-center">
          <div className="col-3">
            <h6>{Review.EcoFriendly.name}</h6>
          </div>
          <div className="col-3 d-flex justify-content-end">
            {Review.EcoFriendly.stars.map((star, index) => {
              const isFilled = index < Review.EcoFriendly.Rate;
              const starColor = isFilled ? "#00BFF" : "gray"; // You can change the colors here as per your preference

              return (
                <React.Fragment key={index}>
                  {isFilled ? (
                    <AiFillStar
                      onClick={() =>
                        handleStarClick(
                          "EcoFriendly",
                          Review.EcoFriendly.stars.slice(0, index + 1)
                        )
                      }
                      style={{ color: starColor }} // Apply the color as a style
                    />
                  ) : (
                    <AiOutlineStar
                      onClick={() =>
                        handleStarClick(
                          "EcoFriendly",
                          Review.EcoFriendly.stars.slice(0, index + 1)
                        )
                      }
                      style={{ color: starColor }} // Apply the color as a style
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Comments */}
        <div className="row justify-content-center">
          <div className="col-6">
            <label>
              <h4>Comments: </h4>
            </label>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <input
                type="text"
                placeholder="Add your comment here..."
                className="form-control"
                style={{ height: "80px" }}
                onChange={(e) => {
                  setCommentChange(e.target.value);
                }}
              />
            </div>
            <br />
          </div>
          <div className="row justify-content-end">
            <div className="col-4">
              <button
                className="btn btn-primary btn-sm mt-3"
                type="button"
                onClick={PostButtonClick}
              >
                POST
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ratings;
