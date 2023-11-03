import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Compunents/Header/Header";
import axios from "axios";
import Boat from "../../Compunents/Boats/Boat";
import Footer from "../../Compunents/HomeSections/Footer/Footer";

function Favourite() {
 
  const [Boats, setBoats] = useState([]);





  useEffect(() => {
    const getBoatsData = async () => {
      const accessToken = localStorage.getItem("accessToken");

      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/boats/getfavoriteboats/",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
         setBoats(response.data)
          console.log(response);
        


           
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getBoatsData()

  }, []);
//   useEffect(()=>{
//     handleFavorite();

//   })

  console.log(Boats);

  return (
    <div>
      <Header />

      {Boats.length > 0 ? (
        <Boat data={Boats} />
      ) : (
        <p
          className="text-center"
          style={{ paddingTop: "5%", paddingBottom: "10%" }}
        >
          {" "}
          You have no favourites here.
        </p>
      )}

      <Footer />
    </div>
  );
}

export default Favourite;
