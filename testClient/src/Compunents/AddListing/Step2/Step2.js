import React, { useState } from "react";
import Step1 from "../svgs/step1.svg";
import Step1mb from "../svgs/step1mb.svg";
import Boat1 from "../svgs/sailing.svg";
import Boat2 from "../svgs/motor.svg";
import Boat3 from "../svgs/cat.svg";
import Boat4 from "../svgs/other.svg";
import { BsLaptop, BsPlus } from 'react-icons/bs';
import { AiOutlinePlus } from "react-icons/ai";

import useNumberInput from "../Custom/NumberHook";
import add from "../svgs/add.svg";
import subtract from "../svgs/subtract.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { isMonday } from "date-fns";

const HeadingStyle = {
  fontSize: "20px",
  fontWeight: "600",
  fontFamily: "Open Sans",
  color:"#333333"
};





export default function  Step2({ formData, setFormData }) {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isExtended = useMediaQuery({ minWidth: 1600 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 990 })
  const islaptop_isTablet =  useMediaQuery({ minWidth: 577, maxWidth: 990 })
  
  const LineStyle ={
    backgroundColor: "#CCCCCC",
    marginLeft: isMobile?"": isTablet?"5%":"auto",
    width:isMobile?"":isTablet?"":"95%",
    marginBottom: "2%",

  }
  const dividerStyle = {
    width: "1px",
    height: "30px",
    backgroundColor: "#ccc",
    // margin: "0 8px",
    marginLeft: isMobile?"": isTablet?"auto":"auto"
  };

  const addAnotherStyle = {
    width: isMobile ? "" : "155px",
    height: isMobile ? "" : "45px",
    padding: isMobile
      ? "2"
      : isTablet
      ? "2"
      : "2%",
    border: "#BEBEBE solid 1px",
    borderRadius: "6px",
    marginTop: "5%",
    minWidth: isMobile ? "" : isTablet ? "" : "152px",
  
};

  console.log(formData)
  const [selectedBoatType, setSelectedBoatType] = useState("");

  const {
    value: sleeping_guests,
    increment: sleeping_guests_inc,
    decrement: sleeping_guests_dec,
  } = useNumberInput(1);
  const {
    value: cruising_guests,
    increment: cruising_guests_inc,
    decrement: cruising_guests_dec,
  } = useNumberInput(1);
  const {
    value: cabins,
    increment: cabins_inc,
    decrement: cabins_dec,
  } = useNumberInput(1);

  const {
    value: beds,
    increment: beds_inc,
    decrement: beds_dec,
  } = useNumberInput(1);
  const {
    value: kitchen,
    increment: kitchen_inc,
    decrement: kitchen_dec,
  } = useNumberInput(1);
  const {
    value: bathrooms,
    increment: bathrooms_inc,
    decrement: bathrooms_dec,
  } = useNumberInput(1);

  const handleBoatTypeSelection = (value) => {
    setSelectedBoatType(value);
    console.log(selectedBoatType);

    // Assuming 'boatType' is a string in 'formData.basics'
    setFormData((prevData) => ({
      ...prevData,
      basics: {
        ...prevData.basics,
        boatType: value,
      },
    }));
  };

  
 // Functions to handle changes and update formData state
 const updateSleepingGuests = () => {
  setFormData((prevData) => ({
    ...prevData,
    basics: {
      ...prevData.basics,
      sleepingGuests: sleeping_guests,
    },
  }));
};

const updateCruisingGuests = () => {
  setFormData((prevData) => ({
    ...prevData,
    basics: {
      ...prevData.basics,
      cruisingGuests: cruising_guests,
    },
  }));
};

const updateCabins = () => {
  setFormData((prevData) => ({
    ...prevData,
    basics: {
      ...prevData.basics,
      cabins: cabins,
    },
  }));
};

const updateBeds = () => {
  setFormData((prevData) => ({
    ...prevData,
    basics: {
      ...prevData.basics,
      beds: beds,
    },
  }));
};

const updateKitchens = () => {
  setFormData((prevData) => ({
    ...prevData,
    basics: {
      ...prevData.basics,
      kitchens: kitchen,
    },
  }));
};

const updateBathrooms = () => {
  setFormData((prevData) => ({
    ...prevData,
    basics: {
      ...prevData.basics,
      bathrooms: bathrooms,
    },
  }));
};



  const abc = {
    marginTop:"3%",
   paddingLeft:isMobile?"%":"%" ,
    fontSize: "20px",
    fontWeight: "600",
    fontFamily: "Open Sans",
  }
  const countDivStyle = {
   border: isMobile?"": "#666666 solid 0.5px",
    width: isMobile?"": "120px",
    height:isMobile?"":"45px",
    padding:isMobile?"":isTablet?"4%" : isLaptop?"2%":"2%",
    borderRadius:isMobile? "":"5px",
    display:isMobile?"flex":"flex",
    margin:isMobile?"10px 5px":isTablet?"":"5% 0%"
  };



  const numberStyle = {
    color: "#00BFFF",
    fontWeight: "600",
    marginLeft:isMobile?"auto":"", 
    marginRight:isMobile?"8%":isTablet?"%":""

  };
  const kichDivStyle = {
    border: isMobile?"": "#666666 solid 0.5px",
    width: isMobile?"": "120px",
    height:isMobile?"":"45px",
    padding:isMobile?"":isTablet?"4%" : isLaptop?"2%":"2%",
     borderRadius:isMobile? "":"5px",
     display:isMobile?"flex":"",
     margin:isMobile?"10px 5px":"",
     display:"flex"
   };

  const  numbedsStyle ={
    color: "#00BFFF",
    fontWeight: "600",
    marginLeft:"auto", 
    marginRight:isMobile?"8%":isTablet?"8%":""
  }
  const bedsSelectStyle = {
    border: isMobile?"": "#666666 solid 1px",
    width: isMobile?"": isTablet? "218px": "218px",
    height:isMobile?"":isTablet?"":"45px",
    padding: isMobile?"": isTablet?"4%":"2%",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
  };
  
  return (
    <div className={`container${islaptop_isTablet ? '-fluid' : ''}`} style={{ height: isMobile?"":isTablet?"":"82vh",}}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-11" style={{ marginTop: "2%" }}>
          <img src={isMobile?Step1mb:Step1} width="100%" alt="" />
        </div>
      </div>

      <div className="row   justify-content-md-start justify-content-sm-center" style={{marginLeft:isMobile?"":isTablet?"":"4%"}}>
        <div className="col-12 col-sm-11">
        <h4 className=""style={abc}>Boat type</h4>
        </div>

        <div className="col-12 col-sm-11 d-flex" style={{ padding:isTablet?"0% 2%": "" }}>
        
          <div
            className="col-6 col-sm-5 d-grid d-sm-inline-flex   align-items-center"
            // style={{ margin: "2% 0%", width: "82%" }}
          >
            <div
              onClick={() => handleBoatTypeSelection("sailing")}
              className=" col rounded"
              style={{
                cursor: "pointer",
                marginRight: "3%",
                // width: "55%",
              }}
            >
              <img className=" boat-type" width={isMobile?"100%":"70%"} height="auto" src={Boat1} alt="Boat Type 1" />
            </div>

            <div
              onClick={() => handleBoatTypeSelection("motor")}
              className=" col rounded boat-type"
              style={{
                cursor: "pointer",
                marginRight: "3%",
                // width: "55%",
              }}
            >
              <img className=" boat-type" width={isMobile?"100%":"70%"} height="%" src={Boat2} alt="Boat Type 2" />
            </div>
            </div>

            <div
            className="col-6 col-sm-5 d-grid d-sm-inline-flex   align-items-center"
            // style={{ margin: "2% 0%", width: "82%" }}
          >
              <div
              onClick={() => handleBoatTypeSelection("catamaran")}
              className=" col rounded boat-type"
              style={{
                cursor: "pointer",
                marginRight: "3%",
                // width: "55%",
              }}
            >
              <img className=" boat-type" src={Boat3} alt="Boat Type 3" width={isMobile?"100%":"70%"} height="%" />
            </div>
            <div
              onClick={() => handleBoatTypeSelection("other")}
              className=" col rounded boat-type"
              style={{
                cursor: "pointer",
                marginRight: "3%",
                // width: "55%",
              }}
            >
              <img className=" boat-type" src={Boat4} alt="Boat Type 4" width={isMobile?"100%":"70%"} height="%" />
            </div>
          </div>

          
         
        </div>
      </div>

      
      {/* justify-content-sm-around  */}
      <hr
        style={LineStyle}
      />
      <div className="row  justify-content-sm-center justify-content-md-start" style={{ marginLeft: isMobile?"":isTablet?"":"4%",padding:isMobile?"2%":isTablet?"0px 0px 0px 5%":""}}>
        <div className="col-12 col-sm-4 " style={{padding: isMobile?"0px":""}}>
          {isMobile? (<></>):(<>  <h4 style={HeadingStyle}>Sleeping guests</h4></>)}
        
          <div style={countDivStyle}>
          {isMobile? (<> <h4 style={HeadingStyle}>Sleeping guests</h4></>):(<> </>)}
            <span style={numberStyle}>{sleeping_guests}</span>
            <div style={{marginLeft:isMobile?"":"auto"}}>
            <img
              // onClick={sleeping_guests_dec}
              onClick={() => { 
                sleeping_guests_dec();
                updateSleepingGuests();
              }}
              src={subtract}
              style={{
              
                marginRight: "5px",
                cursor: "pointer",
              }}
              alt=""
            />
            <img
            onClick={() => { 
              sleeping_guests_inc();
              updateSleepingGuests();
            }}
              // onClick={sleeping_guests_inc}
              src={add}
              style={{ cursor: "pointer" }}
              alt=""
            />
            </div>
          
          </div>
        </div>
        {isMobile?(<> <hr
        style={{
          backgroundColor: "#CCCCCC",
          marginLeft: isMobile?"":"10%",
          marginBottom: "2%",
        }}
      /></>):(<></>)}
        <div className="col-12 col-sm-4 " style={{padding: isMobile?"0px":""}}>
          
          {isMobile? (<></>):(<>  <h4 style={HeadingStyle}>Cruising guests</h4></>)}
          <div style={countDivStyle}>
          {isMobile? (<> <h4 style={HeadingStyle}>Cruising guests</h4></>):(<> </>)}
            <span style={numberStyle}>{cruising_guests}</span>
            <div style={{marginLeft:isMobile?"":"auto"}}>
            <img
         
              onClick={() => { 
                cruising_guests_dec();
                updateCruisingGuests();
              }}

              src={subtract}
              style={{
              
                marginRight: "5px",
                cursor: "pointer",
              }}
              alt=""
            />
            <img
          onClick={() => { 
            cruising_guests_inc();
            updateCruisingGuests();
          }}
              src={add}
              style={{ cursor: "pointer" }}
              alt=""
            />
            </div>
           
          </div>
        </div>
        {isMobile?(<> <hr
        style={{
          backgroundColor: "#CCCCCC",
          marginLeft: isMobile?"":"10%",
          marginBottom: "2%",
        }}
      /></>):(<></>)}
        <div className="col-12 col-sm-4 " style={{padding: isMobile?"0px":""}}>
         
          {isMobile? (<></>):(<>  <h4 style={HeadingStyle}>Cabins</h4></>)}
          <div style={countDivStyle}>
          {isMobile? (<> <h4 style={HeadingStyle}>Cabins</h4></>):(<> </>)}
            <span style={numberStyle}>{cabins}</span>
            <div style={{marginLeft:isMobile?"":"auto"}}>
            <img
             
              onClick={() => { 
                cabins_dec();
                updateCabins();
              }}
              src={subtract}
              style={{
               
                marginRight: "5px",
                cursor: "pointer",
              }}
              alt=""
            />
            <img
              onClick={() => { 
                cabins_inc();
                updateCabins();
              }}
            
              src={add}
              style={{ cursor: "pointer" }}
              alt=""
            />

            </div>
           
          </div>
        </div>
        {isMobile?(<><hr
        style={{
          backgroundColor: "#CCCCCC",
          marginLeft: isMobile?"":"10%",
          marginBottom: "2%",
        }}
      /></>):(<> </>)}
      </div>

      {isMobile?(<></>):(<> <hr
        style={LineStyle}
      /></>)}

     
     
      <div className="row justify-content-md-start justify-content-sm-center"  style={{ marginLeft: isMobile?"":isTablet?"":"5%",padding:isMobile?"2%":isTablet?"3%":"" ,marginBottom:isMobile?"":isTablet?"3.4%":"5.4%"  }} >
        <div className="col-12 col-sm-5" style={{padding:"0px"}}>
          {/* <FontAwesomeIcon icon={faChevronDown} />
           */}
            {isMobile? (<></>):(<>    <h4 style={HeadingStyle}>Beds</h4></>)}
       
          <div style={bedsSelectStyle}>
          {isMobile? (<> <h4 style={HeadingStyle}>Beds</h4></>):(<>   </>)}

            <select className="dropdown-select" style={{ borderStyle: "none" ,marginLeft:isMobile?"auto":"" }}>
              <option value="option1">select type</option>
              <option value="option2">Single</option>
              <option value="option3">Double</option>
            </select>
            {isMobile? (<></>):(<>  <div style={dividerStyle}></div></>)}
          
            <span style={numbedsStyle}>{beds}</span>
            <div style={{marginLeft:"auto"}}>
            <img
              onClick={() => { 
                beds_dec();
                updateBeds();
              }}
              src={subtract}
              style={{
                // marginLeft:isMobile?"":isTablet?"%":"60%",
                marginRight: "5px",
                cursor: "pointer",
              }}
              alt=""
            />
            <img
              onClick={() => { 
                beds_inc();
                updateBeds();
              }}
              src={add}
              style={{ cursor: "pointer" }}
              alt=""
            />
            </div>
       
          </div>
          <div
              style={addAnotherStyle}
            >
              <span
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: "400",
                  display: "flex",
                  fontSize: "12px",
                  color: "#333333",
                }}
              >
               Add new type
                <AiOutlinePlus
                  style={{
                    marginLeft: isMobile ? "auto" : isTablet ? "5%" : "auto",
                    marginTop: isMobile ? "1%" : "2%",
                  }}
                />{" "}
              </span>
            </div>
        </div>
        {isMobile?(<><hr
       style={{
         backgroundColor: "#CCCCCC",
         marginLeft: isMobile?"":"3%",
         marginBottom: "2%",
         marginTop:isMobile?"4%":""
       }}
     /></>):(<> </>)}

        <div className="col-12 col-sm-3 " style={{padding: isMobile?"0px":""}}>
         
         {isMobile? (<></>):(<>  <h4 style={HeadingStyle}>Kitchens </h4></>)}
         <div style={kichDivStyle}>
         {isMobile? (<> <h4 style={HeadingStyle}>Kitchens </h4></>):(<> </>)}
           <span style={numberStyle}>{kitchen}</span>
           <div style={{marginLeft:isMobile?"":"auto"}}>
           <img
           onClick={() => { 
            kitchen_dec();
            updateKitchens();
          }}
             src={subtract}
             style={{
              //  marginLeft:isMobile?"":isTablet?"45%":"60%",
               marginRight: "5px",
               cursor: "pointer",
             }}
             alt=""
           />
           <img
             onClick={() => { 
              kitchen_inc();
              updateKitchens();
            }}
             src={add}
             style={{ cursor: "pointer" }}
             alt=""
           />
           </div>
          
         </div>
       </div>
       {isMobile?(<><hr
       style={{
         backgroundColor: "#CCCCCC",
         marginLeft: isMobile?"":"10%",
         marginBottom: "2%",
       }}
     /></>):(<> </>)}


<div className="col-12 col-sm-3 " style={{padding: isMobile?"0px":""}}>
         
         {isMobile? (<></>):(<>  <h4 style={HeadingStyle}>Bathrooms </h4></>)}
         <div style={kichDivStyle}>
         {isMobile? (<> <h4 style={HeadingStyle}>Bathrooms </h4></>):(<> </>)}
           <span style={numberStyle}>{bathrooms}</span>
           <div style={{marginLeft:isMobile?"":"auto"}}>
           <img
          
             onClick={() => { 
              bathrooms_dec();
              updateKitchens();
            }}
             src={subtract}
             style={{
              //  marginLeft:isMobile?"":isTablet?"45%":"60%",
               marginRight: "5px",
               cursor: "pointer",
             }}
             alt=""
           />
           <img
                         onClick={() => { 
                          bathrooms_inc();
                          updateBathrooms();
                        }}
             src={add}
             style={{ cursor: "pointer" }}
             alt=""
           />
           </div>
         </div>
       </div>
       {isMobile?(<><hr
       style={{
         backgroundColor: "#CCCCCC",
         marginLeft: isMobile?"":"10%",
         marginBottom: "2%",
       }}
     /></>):(<> </>)}

       
      </div>
    </div>
  );
}
