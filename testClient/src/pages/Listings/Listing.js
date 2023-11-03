import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from "../../Compunents/Header/Header";
import axios from "axios";
import Boat from "../../Compunents/Boats/Boat";
import Footer from "../../Compunents/HomeSections/Footer/Footer"

function Listing() {
  const { id } = useParams();
  const [Boats ,setBoats ]= useState([])

 

  const getBoatsData = async () => {
    const accessToken = localStorage.getItem("accessToken");

    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/boats/owner",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Handle the response data here (e.g., set it to state or log it)
     
      setBoats(response.data)
    } catch (error) {
      // Handle the error here (e.g., show an error message)
      console.error("Error fetching data:", error);
    }
  };


  useEffect(()=>{
  getBoatsData();
  },[])


  console.log(Boats)





  return (
    <div>
      <Header />

      {Boats.length > 0 ? (
        <Boat data={Boats} />
      ) : (
        <p className='text-center' style={{ paddingTop:"5%" ,paddingBottom:"10%"}} > You have no listings here.</p>
      )}

      <Footer />
    </div>
  );
}

export default Listing