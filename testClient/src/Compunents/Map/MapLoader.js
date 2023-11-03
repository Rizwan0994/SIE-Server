import { useState, useEffect } from "react";
import Map from "./Map";
import Loader from "./Loader";

import axios from "axios";

function MapLoader({data}) {
  // const [eventData, setEventData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [latlng, setLatlng]=useState({lat:0,lng:0})
console.log(data);
  let abc 
  let efg
useEffect(() => {
 const cityName = data; // Replace with the desired city name
 getLatLngFromCityName(cityName).then((coordinates) => {
   if (coordinates) {
     const { lat, lng } = coordinates;
     abc = parseFloat(lat);
     efg = parseFloat(lng);
     setLatlng({ lat: lat, lng: lng });
     console.log(`Latitude: ${abc}, Longitude: ${efg}`);
   }
 });

}, []);
 const getLatLngFromCityName = async (cityName) => {

  console.log(cityName);
  //  const apiKey = "AIzaSyDihjlsQBhobL-yjSh0RTSSnNpCSk4SSnA";
  const apiKey = ""
   const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
     cityName
   )}&key=${apiKey}`;

   try {
     const response = await axios.get(apiUrl);
     const results = response.data.results;

     if (results.length > 0) {
       const { lat, lng } = results[0].geometry.location;
       return { lat, lng };
     } else {
       throw new Error("No results found for the city name.");
     }
   } catch (error) {
     console.error("Error fetching coordinates:", error);
     return null;
   }
 };

 // Usage

console.log(latlng.lat+ "  caca  " + latlng.lng)
  // const cities = [
  //   // { name: "New York", lat: 40.7128, lng: -74.006 },
  //   // { name: "San Francisco", lat: 37.7749, lng: -122.4194 },
  //   // { name: "London", lat: 51.5074, lng: -0.1278 },
  //   { name: data, lat: latlng.lat, lng: latlng.lng },
  // ];

  const city = { name: data, lat: latlng.lat, lng: latlng.lng };

  return (
    <div>
      {/* {!loading ? : <Loader />} */}
      <Map city={city} />
    </div>
  );
}

export default MapLoader;
