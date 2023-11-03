import React from 'react'
import HowitWorks from "../About/HowitWorks/HowitWorks";
import Whatweoffer from "../About/WhatWeOffer/Whatweoffer";
import FAQ from '../About/FAQ/Faq'
import howitworkicon from "../About/HowitWorks/icon1.svg";
import bgimage from './bg.svg';
import mobile_image from "../About/WhatWeOffer/icons/mobile_banner.svg";
import tablet_image from "../About/tablet_banner.svg";
import mobile_next from "../About/WhatWeOffer/icons/mobile_next.svg";
import tablet_next from "../About/WhatWeOffer/icons/tablet_next.svg";
import whatsnext from './whatsnext.svg';
import image2 from '../About/HowitWorks/icon2.svg'
import image3 from "../About/HowitWorks/icon3.svg";
import image4 from "../About/HowitWorks/icon4.svg";
import Header from '../../Compunents/Header/Header'
import Footer from '../../Compunents/HomeSections/Footer/Footer'
import { useMediaQuery } from "react-responsive";


function About() {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
const contain = {
  minWidth: isMobile ? "435px " : isTablet ? "700px " : "1200px ",
};
  return (
    <div style={contain}>
      <Header />
      <div>
        <img
          style={{ width: "100%", marginBottom: "3rem" }}
          src={isMobile ? mobile_image : isTablet ? tablet_image : bgimage}
          alt=""
        />
      </div>

      
      <HowitWorks
        heading="How it Works"
        subheading="Let's start from the beginning"
        title1="Create your listing"
        image1={howitworkicon}
        text1="We will guide you through the process with a few simple steps."
        title2="Booking requests"
        image2={image2}
        text2="Your listing will be uploaded on our platform and interest travellers will contact you."
        title3="Booking requests"
        image3={image3}
        text3="You can book on one click!"
        title4="Get Paid"
        image4={image4}
        text4="Increase your revenue with quick and secure online payments."
      />

      <div>
        <img
          style={{ width: "100%", marginTop: "2%" }}
          src={isMobile ? mobile_next : isTablet ? tablet_next : whatsnext}
          alt="What Next"
        />
      </div>

      <Whatweoffer />

      <FAQ
        heading="Frequently Asked Questions"
        title1="How much should i charge for rental boat?"
        content1=" This is completely up to you! Since every boat is unique, you have the ability to set the rate at whatever level you feel a renter would be willing to pay. Furthermore, our messaging platform allows you to make special one-time offers to potential renters if you wish. We encourage you to look at other similar boats in your area to better understand local pricing dynamics.. "
        title2="How do I communicate with the renter?"
        content2="By allowing you to view & send messages on our secure platform, we make communication with the renter simple. When logged in, you will see a new notification in the top right corner. Simply click the notification or go straight to your inbox to view the message. From there, you can reply to the message and make all arrangements with both the renter, as well as the captain. You can also choose to receive email and/or SMS notifications whenever someone reaches out to you."
      />
      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </div>
  );
}

export default About




  // <div
  //       className="container mt-5"
  //       style={{
  //         color: "#333333",
  //       }}
  //     >
  //       <div className="col-12 text-center">
  //         <h2
  //           className="mt-4"
  //           style={{
  //             fontSize: "20px",
  //             fontFamily: "Open Sans",
  //             fontWeight: "600",
  //           }}
  //         >
  //           {" "}
  //           How it Works
  //         </h2>
  //         <h1
  //           style={{
  //             fontSize: "28px",
  //             fontFamily: "Playfair Display",
  //             fontWeight: "700",
  //           }}
  //         >
  //           {" "}
  //           Let's start from the beginning
  //         </h1>
  //       </div>

  //       <div className="row justify-content-center mt-5">
  //         <div className="col-lg-3 col-md-5 col-sm-8 mr-3">
  //           {" "}
  //           <HowitWorks
  //             title1="Create your listing"
  //             image1={howitworkicon}
  //             text1="We will guide you through the process with a few simple steps."
  //           />
  //         </div>
  //         <div className="col-lg-3 col-md-5 col-sm-8 mr-3">
  //           {" "}
  //           <HowitWorks
  //             title2="Booking requests"
  //             image2={image2}
  //             text2="Your listing will be uploaded on our platform and interest
  //     travellers will contact you."
  //           />
  //         </div>
  //       </div>
  //       <div className="row justify-content-center mt-5">
  //         <div className="col-lg-3 col-md-5 col-sm-8 mr-3">
  //           {" "}
  //           <HowitWorks
  //             title3="Booking requests"
  //             image3={image3}
  //             text3="You can book on one click!"
  //           />
  //         </div>
  //         <div className="col-lg-3 col-md-5 col-sm-8 mr-3">
  //           {" "}
  //           <HowitWorks
  //             title4="Get Paid"
  //             image4={image4}
  //             text4="Increase your revenue with quick and secure online payments."
  //           />
  //         </div>
  //       </div>
  //     </div>
