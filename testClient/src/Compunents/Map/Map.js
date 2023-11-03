// import { useState } from "react";
// import GoogleMapReact from "google-map-react";
// import LocationMarker from "./LocationMarker";


// const Map = ({ cities, center, zoom }) => {
//   const [locationInfo, setLocationInfo] = useState(null);

//   const markers = cities.map((city, index) => (
   
//   ));

//   return (
//     <div className="map " style={{ height: "100vh", width: "100%" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyDihjlsQBhobL-yjSh0RTSSnNpCSk4SSnA" }}
//         defaultCenter={center}
//         defaultZoom={zoom}
//       >
//         {markers}
//       </GoogleMapReact>
//     </div>
//   );
// };

// Map.defaultProps = {
//   center: {
//     lat: 42.3265,
//     lng: -122.8756,
//   },
//   zoom: 6,
// };

// export default Map;


import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

const Map = ({ city, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

const marker = (
  <LocationMarker
    lat={city.lat}
    lng={city.lng}
    name={city.name}
    onClick={() =>
      setLocationInfo({ lat: city.lat, lng: city.lng, name: city.name })
    }
  />
);

  return (
    <div className="map " style={{ height: "500px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDihjlsQBhobL-yjSh0RTSSnNpCSk4SSnA" }}
        defaultCenter={{
          lat: city.lat ? city.lat : 34.0479,
          lng: city.lng ? city.lng : 100.6197,
        }}
        defaultZoom={0}
      >
        {marker}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 34.0479,
    lng: 100.6197,
  },
  zoom: 6,
};

export default Map;
