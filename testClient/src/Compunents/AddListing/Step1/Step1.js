import React from 'react'
import TextCard from '../../UI/ListingCard/TextCard';
import Header from '../../Header/Header';
import pg1 from '../../../images/listing_pg_landing1.svg'
import pg2 from '../../../images/listing_pg_landing2.svg'
import { useMediaQuery } from "react-responsive";
import pic1 from '../svgs/step1pic1.svg'
import pic2 from '../svgs/step1pic2.svg'
export default function Step1(){

  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isExtended = useMediaQuery({ minWidth: 1600 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const isXL = useMediaQuery({ minWidth: 1200 });
  const blueCard ={
    padding:isMobile?"0px":"",
    height:isMobile?"130":"227px",
    width:isExtended?"500px": isTablet? "340px": isMobile ?"": "",marginTop:isMobile?"":isXL?"":"-5%"}
  
  const cardsData = [
    {
      number: 1,
      title: 'Tell us about your vessel',
      text: 'Choose your vessel type, it’s features and amenities and the number of people you can host.',
    },
    {
      number: 2,
      title: 'Make it pop!',
      text: 'Add a title and a description along with five or more great photos to make your listing stand out.',
    },
    {
      number: 3,
      title: 'Make it public',
      text: 'Set your availability and asking price and save your progress. You will be able to make your listing available for our users to book.',
    },
  ];
  return (
    <div
      className="container-fluid"
      style={{ padding: "0px", height: "vh" }}
    >
      {/* <div style={{backgroundImage:`url(${pg1})`,backgroundSize:"contain"}}>
      
      </div> */}

        {!isMobile &&   <div className="row justify-content-end" style={{}}>
        <div className="col-10 ">
        <img src={pg1} alt="" width="100%" height="65%" />
        </div>
     
      </div> }
    
     
      <div className={`container${isTablet ? '-fluid' : ''}`}  style={{marginTop:isMobile?"%":"-4%",height:"450px"}}>
        <div className="row justify-content-sm-around justify-content-lg-center align-items-center">
          <div className="col-12 col-sm-6"style={blueCard}>
            <div class="card" style={{borderRadius: isMobile?"0px":"" , padding: isTablet?"4%":"9%",backgroundColor:"#0066FF" ,color:"white"}}>
              <div class="card-body">
                <h4
                  style={{
                    fontFamily: "Playfair Display",
                    fontWeight: "700",
                    fontSize: "36px",
                  }}
                >
                  Add your listing in a few easy steps
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 d-lg-grid justify-content-xl-end justify-content-center"style={{padding:isMobile?"4%":""}}>
          {cardsData.map((card, index) => (
        <React.Fragment key={index}>
          <TextCard 
            number={card.number}
            title={card.title}
            text={card.text}
          />
          {index < 2 && <hr style={{marginLeft:isMobile?"":isXL?"":"%",width:isMobile?"":isXL?"342px":"%"}} />}
        </React.Fragment>
      ))}
      
          </div>
        </div>
      </div>


      {!isMobile &&<div className="row" style={{width:"99%"}}>
        <div className="col-12" style={{marginTop:"%"}}>
        <img src={pg2} alt="" style={{height:isXL?"291":"257px",width: isTablet ? " ":"1010px",marginTop:isXL?"-5":""}}  />
        </div>
      </div>}
      
    </div>
  );
}



