import React, { useEffect, useState } from "react";
import Rating from "./Ratings";
import axios from "axios";
import Boat from "./Boat";
import Header from "../../Compunents/Header/Header";
import Footer from '../../Compunents/HomeSections/Footer/Footer'

function Trips() {
  const [boats, setBoats] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get(`http://127.0.0.1:8000/api/my-booked-boats/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log("GET request successful:", response.data.booked_boats);
        setBoats(response.data.booked_boats);
      })
      .catch((error) => {
        console.error("GET request failed:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      {boats.length > 0 ? (
        <Boat data={boats} />
      ) : (
        <p
          className="text-center"
          style={{ paddingTop: "5%", paddingBottom: "10%" }}
        >
          {" "}
          You have no trips here.
        </p>
      )}

      <Footer />
    </div>
  );
}

export default Trips;
