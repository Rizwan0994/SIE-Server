// import {
//   MDBFooter,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
// } from "mdb-react-ui-kit";
import "./footer.css";
// import {useAuth} from  '../../Context/authContext'
import bgimg from "../../../images/footerbg.svg";
import mobilebg from "../../../images/footermobile.svg";
import sunimg from "../../../images/sun.svg";
import { Container, Row, Col } from "react-bootstrap";
import { BsWhatsapp } from "react-icons/bs";
import facebook from '../../../images/facebook.svg'
;
import insta from '../../../images/insta.svg'
import downicon from "../../../images/downicon.svg";
import tiktok from '../../../images/tiktok.svg';
import { Link } from "react-router-dom";
import whattsapp from '../../../images/whattsapp.svg'
;
import discord from '../../../images/discord.svg'
import tablebg from "../../../images/footertabletbg.svg";
import { FaAngleDown } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios"; 
import { useMediaQuery } from "react-responsive";
const marginB={
  marginBottom:"3px"
}

  const dropdownStyles = {
    position: "relative",
  };

  const toggleStyles = {
    background: "none",
    border: "none",
    cursor: "pointer",
  };

  const dropdownMenuStyles = {
    display: "block",
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "white",
    border: "1px solid #ccc",
    padding: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const dropdownItemStyles = {
    display: "block",
    padding: "5px 10px",
    textDecoration: "none",
    color: "black",
  };

  const openDropdownMenuStyles = {
    display: "block",
  };
  const linkStyle = {
    color: "white",
    textDecoration: "none", // Remove underline
  };

export default function App() {
    const isMobile = useMediaQuery({ maxWidth: 576 });
       const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const [email, setEmail] = useState("");
  let accessToken = localStorage.getItem("accessToken");

  const handleSubscribe = async () => {
    try {
      // Make a POST request to the API endpoint
      await axios.post(
        "http://127.0.0.1:8000/api/subscribe/",
        {
          email: email,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Assuming successful subscription, show a success message or update UI
      alert("Subscription successful!");
    } catch (error) {
      // Handle any errors that might occur
      console.error("Error subscribing:", error);
      alert("Subscription failed. Please try again later.");
    }
  };

    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2]= useState(false);
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

    const toggleDropdown1 = () => {
      setIsDropdownOpen1(!isDropdownOpen1);
    };

     const toggleDropdown2 = () => {
       setIsDropdownOpen2(!isDropdownOpen2);
     };
      const toggleDropdown3 = () => {
        setIsDropdownOpen3(!isDropdownOpen3);
      };




  const handleChange = (event) => {
    setEmail(event.target.value);
  };
 return (
   <>
     {isMobile ? (
       <footer
         bgColor=""
         style={{
           backgroundImage: `url(${mobilebg})`,
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
           paddingBottom: "100px",
           minWidth: "435px",
         }}
         className="text-center text-lg-start text-muted mt-5"
       >
         <Container>
           <div className="row  m-4">
             <div className="col-12  pt-5">
               <h3
                 className="text-left"
                 style={{
                   fontSize: "30px",
                   fontWeight: "700",
                   color: "white",
                   fontFamily: "Playfair Display",
                   padding: isMobile ? "0% 10%" :"",
                 }}
               >
                 {" "}
                 Have you subscribed yet?
               </h3>
             </div>
             <div className="col-12 mt-2">
               <h6
                 className=" text-left"
                 style={{ color: "white", fontFamily: "Open Sans",   padding: isMobile ? "0% 10%" :"" ,fontWeight:"600"}}
               >
                 Subscrible to our newsletter & get the coolest offers!
               </h6>
             </div>
           </div>

           <div className="row">
             <div className="col-12">
               <input
                 id="specific-input"
                 type="text"
                 className="form-control rounded-pill me-2 custom-input place"
                 placeholder="Fill in your email"
                 value={email}
                 onChange={handleChange} // Attach handleChange to onChange event
                 style={{
                   color: "white",
                   backgroundColor: "#00BFFF",
                 }}
               />
             </div>
             <div className="col-12 pt-2">
               <button
                 style={{ color: "#00BFFF" ,fontWeight:"700"}}
                 onClick={handleSubscribe}
                 className="btn bg-white rounded-pill custom-button w-100"
               >
                 Subscribe
               </button>
             </div>
           </div>

           <div className="row justify-content-center " style={{marginTop:"10%"}}>
             <div className="col-11  p-2">
               <span style={{ color: "white", float: "left" }}>COMPANY</span>
               <span style={{ color: "white", float: "right" }}>
                 <img
                   src={downicon}
                   alt=""
                   onClick={toggleDropdown1}
                   style={{ cursor: "pointer" }}
                 />
               </span>
               {isDropdownOpen1 && (
                 <div className="dropdown-content" style={{ marginTop: "8%" }}>
                   <Link to="/about" style={linkStyle}>
                     About us
                   </Link>
                   <hr style={{ color: "white" }} />
                   <Link to="/how-it-works" style={linkStyle}>
                     How it works
                   </Link>
                   <hr style={{ color: "white" }} />
                   <Link to="/help-center" style={linkStyle}>
                     Help center
                   </Link>
                   <hr style={{ color: "white" }} />
                   <Link to="/contact-us" style={linkStyle}>
                     Contact us
                   </Link>
                 </div>
               )}
             </div>
             <hr style={{ color: "white" }} />
           </div>
           <div className="row justify-content-center ">
             <div className="col-11 p-2">
               <span style={{ color: "white", float: "left" }}>POLICIES</span>
               <span style={{ color: "white", float: "right" }}>
                 <img
                   src={downicon}
                   alt=""
                   onClick={toggleDropdown2}
                   style={{ cursor: "pointer" }}
                 />
               </span>
               {isDropdownOpen2 && (
                 <div className="dropdown-content" style={{ marginTop: "8%" }}>
                   <Link to="/terms" style={linkStyle}>
                     Terms
                   </Link>
                   <hr style={{ color: "white" }} />
                   <Link to="/privacy" style={linkStyle}>
                     Privacy
                   </Link>
                   <hr style={{ color: "white" }} />
                   <Link to="/refund" style={linkStyle}>
                     Refund
                   </Link>
                   <hr style={{ color: "white" }} />
                   <Link to="/cancellation" style={linkStyle}>
                     Cancellation
                   </Link>
                 </div>
               )}
             </div>
             <hr style={{ color: "white" }} />
           </div>
           <div className="row justify-content-center ">
             <div className="col-11 p-2">
               <span style={{ color: "white", float: "left" }}>HELP</span>
               <span style={{ color: "white", float: "right" }}>
                 <img
                   src={downicon}
                   alt=""
                   onClick={toggleDropdown3}
                   style={{ cursor: "pointer" }}
                 />
               </span>
               {isDropdownOpen3 && (
                 <div className="dropdown-content" style={{ marginTop: "8%" }}>
                   <Link to="/support" style={linkStyle}>
                     Support
                   </Link>
                   <hr style={{ color: "white" }} />
                   <Link to="/contact-us" style={linkStyle}>
                     Contact us
                   </Link>
                 </div>
               )}
             </div>
             <hr style={{ color: "white" }} />
           </div>

           <div className="row justify-content-center">
             <div className="col-11">
               <span
                 className=" mb-2 text-uppercase"
                 style={{ float: "left", color: "white" }}
               >
                 Join the wave{" "}
               </span>
             </div>
             <div className="col-11">
               <div className="mt-2" style={{ float: "left" }}>
                 <span>
                   <Link
                     to="#!"
                     style={{ textDecoration: "none", color: "black" }}
                     className=" me-1 "
                   >
                     .
                     <img src={facebook} alt="" />
                   </Link>
                 </span>

                 <span>
                   <Link
                     to="#!"
                     style={{ textDecoration: "none", color: "black" }}
                     className=" me-1 "
                   >
                     {/* <FaInstagram style={{ color: "#666666" }} /> */}
                     <img src={insta} alt="" />
                   </Link>
                 </span>

                 <span>
                   <Link
                     to="#!"
                     style={{ textDecoration: "none", color: "black" }}
                     className=" me-1"
                   >
                     {/* <FaGoogle style={{ color: "#666666" }} /> */}
                     <img src={tiktok} alt="" />
                   </Link>
                 </span>

                 <span>
                   <Link
                     to="#!"
                     style={{ textDecoration: "none", color: "black" }}
                     className=" me-1"
                   >
                     {/* <BsWhatsapp style={{ color: "#666666" }} /> */}
                     <img src={whattsapp} alt="" />
                   </Link>
                 </span>

                 <span>
                   <Link
                     to="#!"
                     style={{ textDecoration: "none", color: "black" }}
                     className=" me-1"
                   >
                     {/* <BsWhatsapp style={{ color: "#666666" }} /> */}
                     <img src={discord} alt="" />
                   </Link>
                 </span>
               </div>
             </div>
           </div>
         </Container>
       </footer>
     ) : isTablet ? (
       <footer
         bgColor=""
         style={{
           backgroundImage: `url(${tablebg})`,
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
           paddingBottom: "100px",
           minWidth: "700px",
         }}
         className="text-center text-lg-start text-muted mt-5"
       >
         <Container fluid>
           <div className="row mt-5  ">
             <div className="col pt-5">
               <h3
                 className="text-left"
                 style={{ color: "white", fontFamily: "Playfair Display" }}
               >
                 {" "}
                 Have you subscribed yet?
               </h3>
             </div>
           </div>
           <div className="row mb-5 ">
             <div className="col">
               <h6
                 className=" text-left"
                 style={{ color: "white", fontFamily: "Open Sans",fontWeight:"600" }}
               >
                 Subscrible to our newsletter & get the coolest offers!
               </h6>
             </div>
           </div>

           <div className="row m-2  justify-content-center">
             <div className="col-5 ">
               <input
                 id="specific-input"
                 type="text"
                 className="form-control rounded-pill me-2 custom-input place w-100"
                 placeholder="Fill in your email"
                 value={email}
                 onChange={handleChange} // Attach handleChange to onChange event
                 style={{
                   color: "white",
                   backgroundColor: "#00BFFF",
                 }}
               />
             </div>
             <div className="col-3">
               <button
                 style={{ color: "#00BFFF", width: "100%" ,fontWeight:"700" }}
                 onClick={handleSubscribe}
                 className="btn bg-white rounded-pill custom-button"
               >
                 Subscribe
               </button>
             </div>
           </div>

           {/*  */}
           <Row
             className="justify-content-start pt-5"
             style={{ marginTop: "2%" }}
           >
             <div className=" col-3 ">
               {" "}
               <h6
                 className="text-uppercase  mb-4"
                 style={{ color: "white", fontFamily: "Open Sans" }}
               >
                 Company
               </h6>
               <p style={marginB}>
                 <Link
                   to="/about"
                   style={{
                     textDecoration: "none",
                     color: "white",
                     fontFamily: "Open Sans",
                     fontWeight: "400",
                   }}
                   className=""
                 >
                   About us
                 </Link>
               </p>
               <p style={marginB}>
                 <Link
                   to="#!"
                   style={{
                     textDecoration: "none",
                     color: "white",
                     fontFamily: "Open Sans",
                   }}
                 >
                   How it works
                 </Link>
               </p>
               <p style={marginB}>
                 <Link
                   to="/help"
                   style={{
                     textDecoration: "none",
                     color: "white",
                     fontFamily: "Open Sans",
                   }}
                 >
                   Help Center
                 </Link>
               </p>
               <p style={marginB}>
                 <Link
                   to="#!"
                   style={{
                     textDecoration: "none",
                     color: "white",
                     fontFamily: "Open Sans",
                   }}
                 >
                   Contact us
                 </Link>
               </p>
             </div>
             <div className="col-3">
               {" "}
               <h6
                 className="text-uppercase  mb-4"
                 style={{ color: "white", fontFamily: "Open Sans" }}
               >
                 Policies
               </h6>
               <p style={marginB}>
                 <Link
                   to="#!"
                   style={{
                     textDecoration: "none",
                     color: "white",
                     fontFamily: "Open Sans",
                   }}
                 >
                   Terms
                 </Link>
               </p>
               <p style={marginB}>
                 <Link
                   to="#!"
                   style={{
                     textDecoration: "none",
                     color: "white",
                     fontFamily: "Open Sans",
                   }}
                 >
                   Privacy
                 </Link>
               </p>
               <p style={marginB}>
                 <Link
                   to="#!"
                   style={{
                     textDecoration: "none",
                     color: "white",
                     fontFamily: "Open Sans",
                   }}
                 >
                   Refund
                 </Link>
               </p>
               <p style={marginB}>
                 <Link
                   to="#!"
                   style={{
                     textDecoration: "none",
                     color: "white",
                     fontFamily: "Open Sans",
                   }}
                 >
                   Cancellation
                 </Link>
               </p>
             </div>

             <div className="col-2 mb-4">
               <h6
                 className="text-uppercase  mb-4"
                 style={{ color: "white", fontFamily: "Open Sans" }}
               >
                 Help
               </h6>
               <p style={marginB}>
                 <Link
                   to="#!"
                   style={{
                     textDecoration: "none",
                     color: "white",
                     fontFamily: "Open Sans",
                   }}
                 >
                   Support
                 </Link>
               </p>
               <p style={marginB}>
                 <Link
                   to="#!"
                   style={{
                     textDecoration: "none",
                     color: "white",
                     fontFamily: "Open Sans",
                   }}
                 >
                   Contact us
                 </Link>
               </p>
             </div>

             <div className="col-4">
               {" "}
               <div md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                 <div
                   className="me-5 d-none d-lg-block font-weight-bold"
                   style={{ color: "white", fontFamily: "Open Sans" }}
                 >
                   <span className=" mb-2 text-uppercase">Join the wave </span>
                 </div>

                 <div className="mt-2">
                   <span>
                     <Link
                       to="#!"
                       style={{ textDecoration: "none", color: "black" }}
                       className=" me-1 "
                     >
                       .
                       <img src={facebook} alt="" />
                     </Link>
                   </span>

                   <span>
                     <Link
                       to="#!"
                       style={{ textDecoration: "none", color: "black" }}
                       className=" me-1 "
                     >
                       {/* <FaInstagram style={{ color: "#666666" }} /> */}
                       <img src={insta} alt="" />
                     </Link>
                   </span>

                   <span>
                     <Link
                       to="#!"
                       style={{ textDecoration: "none", color: "black" }}
                       className=" me-1"
                     >
                       {/* <FaGoogle style={{ color: "#666666" }} /> */}
                       <img src={tiktok} alt="" />
                     </Link>
                   </span>

                   <span>
                     <Link
                       to="#!"
                       style={{ textDecoration: "none", color: "black" }}
                       className=" me-1"
                     >
                       {/* <BsWhatsapp style={{ color: "#666666" }} /> */}
                       <img src={whattsapp} alt="" />
                     </Link>
                   </span>

                   <span>
                     <Link
                       to="#!"
                       style={{ textDecoration: "none", color: "black" }}
                       className=" me-1"
                     >
                       {/* <BsWhatsapp style={{ color: "#666666" }} /> */}
                       <img src={discord} alt="" />
                     </Link>
                   </span>
                 </div>
               </div>
             </div>
           </Row>
         </Container>
       </footer>
     ) : (
       <footer
         bgColor=""
         style={{
           backgroundImage: `url(${bgimg})`,
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
           paddingBottom: "100px",
           minWidth: isMobile ? "" : "1200px",
         }}
         className="text-center text-lg-start text-muted mt-5"
       >
         <Container>
           <Row className="">
             {/*  */}
             <div className="col-md-4 mt-5 mb-4 d-flex justify-content-center align-items-center">
               <img
                 src={sunimg}
                 alt="Image 3"
                 width="25%"
                 className="img-fluid"
               />
             </div>

             <div className="col-md-8">
               <div className="row mt-4 pt-4 ">
                 <div className="col">
                   <h3
                     className="text-left"
                     style={{ color: "white", fontFamily: "Playfair Display" }}
                   >
                     {" "}
                     Have you subscribed yet?
                   </h3>
                 </div>
               </div>

               <div className="row mb-5 ">
                 <div className="col">
                   <h6
                     className=" text-left"
                     style={{ color: "white", fontFamily: "Open Sans",fontWeight:"600" }}
                   >
                     Subscrible to our newsletter & get the coolest offers!
                   </h6>
                 </div>
               </div>
               <div className="row m-2 ">
                 {/* <div className="row "> */}
                 <div className="col-12 col-lg-6 col-xl-6">
                   <div className="d-flex ">
                     <input
                       id="specific-input"
                       type="text"
                       className="form-control rounded-pill me-2 custom-input place"
                       placeholder="Fill in your email"
                       value={email}
                       onChange={handleChange} // Attach handleChange to onChange event
                       style={{
                         color: "white",
                         backgroundColor: "#00BFFF",
                       }}
                     />
                     <button
                       style={{ color: "#00BFFF",fontWeight:"700" }}
                       onClick={handleSubscribe}
                       className="btn bg-white rounded-pill custom-button"
                     >
                       Subscribe
                     </button>
                   </div>
                 </div>
               </div>
               {/* </div> */}
             </div>
           </Row>
           {/*  */}
           <Row className="justify-content-end " style={{ marginTop: "2%" }}>
             <div className="col-12 col-md-6 col-lg-2 ">
               {" "}
               <h6
                 className="text-uppercase  mb-4"
                 style={{ color: "white", fontFamily: "Open Sans" }}
               >
                 Company
               </h6>
               <p style={marginB}>
                 <Link
                   to="/about"
                   style={{
                     textDecoration: "none",
                     color: "white",
                     fontFamily: "Open Sans",
                     fontWeight: "400",
                   }}
                   className=""
                 >
                   About us
                 </Link>
               </p>
               <p style={marginB}>
                 <Link
                   to="#!"
                   style={{
                     textDecoration: "none",
                     color: "white",
                     fontFamily: "Open Sans",
                   }}
                 >
                   How it works
                 </Link>
               </p>
               <p style={marginB}>
                 <Link
                   to="/help"
                   style={{
                     textDecoration: "none",
                     color: "white",
                     fontFamily: "Open Sans",
                   }}
                 >
                   Help Center
                 </Link>
               </p>
               <p style={marginB}>
                 <Link
                   to="#!"
                   style={{
                     textDecoration: "none",
                     color: "white",
                     fontFamily: "Open Sans",
                   }}
                 >
                   Contact us
                 </Link>
               </p>
             </div>
             <div className="col-12 col-md-6 col-lg-2 ">
               {" "}
               <h6
                 className="text-uppercase  mb-4"
                 style={{ color: "white", fontFamily: "Open Sans" }}
               >
                 Policies
               </h6>
               <p style={marginB}>
                 <Link
                   to="#!"
                   style={{
                     textDecoration: "none",
                     color: "white",
                     fontFamily: "Open Sans",
                   }}
                 >
                   Terms
                 </Link>
               </p>
               <p style={marginB}>
                 <Link
                   to="#!"
                   style={{
                     textDecoration: "none",
                     color: "white",
                     fontFamily: "Open Sans",
                   }}
                 >
                   Privacy
                 </Link>
               </p>
               <p style={marginB}>
                 <Link
                   to="#!"
                   style={{
                     textDecoration: "none",
                     color: "white",
                     fontFamily: "Open Sans",
                   }}
                 >
                   Refund
                 </Link>
               </p>
               <p style={marginB}>
                 <Link
                   to="#!"
                   style={{
                     textDecoration: "none",
                     color: "white",
                     fontFamily: "Open Sans",
                   }}
                 >
                   Cancellation
                 </Link>
               </p>
             </div>

             <div className="col-12 col-md-6 col-lg-2 mb-4">
               <h6
                 className="text-uppercase  mb-4"
                 style={{ color: "white", fontFamily: "Open Sans" }}
               >
                 Help
               </h6>
               <p style={marginB}>
                 <Link
                   to="#!"
                   style={{
                     textDecoration: "none",
                     color: "white",
                     fontFamily: "Open Sans",
                   }}
                 >
                   Support
                 </Link>
               </p>
               <p style={marginB}>
                 <Link
                   to="#!"
                   style={{
                     textDecoration: "none",
                     color: "white",
                     fontFamily: "Open Sans",
                   }}
                 >
                   Contact us
                 </Link>
               </p>
             </div>

             <div className="col-12 col-md-6 col-lg-3">
               {" "}
               <div md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                 <div
                   className="me-5 d-none d-lg-block font-weight-bold"
                   style={{ color: "white", fontFamily: "Open Sans" }}
                 >
                   <span className=" mb-2 text-uppercase">Join the wave </span>
                 </div>

                 <div className="mt-2">
                   <span>
                     <Link
                       to="#!"
                       style={{ textDecoration: "none", color: "black" }}
                       className=" me-1 "
                     >
                       .
                       <img src={facebook} alt="" />
                     </Link>
                   </span>

                   <span>
                     <Link
                       to="#!"
                       style={{ textDecoration: "none", color: "black" }}
                       className=" me-1 "
                     >
                       {/* <FaInstagram style={{ color: "#666666" }} /> */}
                       <img src={insta} alt="" />
                     </Link>
                   </span>

                   <span>
                     <Link
                       to="#!"
                       style={{ textDecoration: "none", color: "black" }}
                       className=" me-1"
                     >
                       {/* <FaGoogle style={{ color: "#666666" }} /> */}
                       <img src={tiktok} alt="" />
                     </Link>
                   </span>

                   <span>
                     <Link
                       to="#!"
                       style={{ textDecoration: "none", color: "black" }}
                       className=" me-1"
                     >
                       {/* <BsWhatsapp style={{ color: "#666666" }} /> */}
                       <img src={whattsapp} alt="" />
                     </Link>
                   </span>

                   <span>
                     <Link
                       to="#!"
                       style={{ textDecoration: "none", color: "black" }}
                       className=" me-1"
                     >
                       {/* <BsWhatsapp style={{ color: "#666666" }} /> */}
                       <img src={discord} alt="" />
                     </Link>
                   </span>
                 </div>
               </div>
             </div>
           </Row>
         </Container>
       </footer>
     )}
   </>
 );
};
