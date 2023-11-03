import React from "react";
import Button from "react-bootstrap/Button";
import Header from "../../Header/Header";
import SearchCard from "../../SearchCard/SearchCard";
import HeaderBanner from "../../HomeSections/HeaderBanner/HeaderBanner";
import HowItWorks from "../../HomeSections/HowItWorks/HowItWorks";

import OurFavouriteDestinations from "../../HomeSections/OurFavouriteDestinations/OurFavouriteDestinations";
import RedCard from "../../HomeSections/RedCard/RedCard";
import OurTopPicks from "../../HomeSections/OurTopPicks/OurTopPicks";
import BlueContainer from "../../HomeSections/BlueContainer/BlueContainer";
import WhyBookWithSail from "../../WhyBookWithSail/WhyBookWithSail";
import WhySail_It_Easy from "../../HomeSections/Why_Sail_It_Easy/WhySail_It_Easy";
import Footer from "../../HomeSections/Footer/Footer"

function Layout(props) {
  return (
    <div style={{minWidth:"1200px",backgroundColor:"white"}} >
   <div style={{backgroundColor:"gray",minHeight:"3.7rem"}} >
<Header/>

   </div>
   <div style={{backgroundColor:"yellow",Height:"90vh",minHeight:"400px"}} >
<HeaderBanner/>

   </div>
   <div style={{backgroundColor:"#ffffff",    height:"50vh",
    width:"98.9vw",

    minWidth:"1200px",
    minHeight:"550px"}} >
<HowItWorks/>

   </div>
   <div style={{backgroundColor:"brown"}} >
<OurFavouriteDestinations/>

   </div>

   <div  >
    <RedCard/>
   </div>

   <div style={{backgroundColor:"white"}} >
    <OurTopPicks/>
   </div>

   <div style={{backgroundColor:"blue"}} ><BlueContainer/>
   </div>

   <div style={{backgroundColor:"white"}} ><WhySail_It_Easy/>
   </div>

   <div  ><Footer/>
   </div>
    </div>
  );
}

export default Layout;
