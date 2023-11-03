import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import CardComponent from "../components/step10Card";
import step9 from "../svgs/step9.svg";
import Step9mb from "../svgs/step9mb.svg";



export default function Step10({ formData, setFormData }) {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isExtended = useMediaQuery({ minWidth: 1600 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 990 });
  const islaptop_isTablet = useMediaQuery({ minWidth: 577, maxWidth: 990 });
  const isDesktop = useMediaQuery({ minWidth: 990, maxWidth: 1230 });
  const isXL = useMediaQuery({ minWidth: 990, maxWidth: 1230 });

  const [selectedPolicy, setSelectedPolicy] = useState('');
  const container ={
    height: isMobile?"":isTablet?"":"86vh",
  }
  console.log(formData)

  const labelStyle = {
    fontSize: "18px",
    fontWeight: "600",
    fontFamily: "Open Sans",
    marginLeft: isMobile ? "" : "%",
    // marginRight:isMobile?"4%":""
  };
  const timeContStyle = {
    // display: "flex",
    borderRadius: "8px",
    alignItems: "center",
    border: "rgb(186 185 185) solid 1px",
    width: isMobile ? "" : isTablet ? "" : "",
    padding: isMobile ? "2%" : isTablet ? "2%" : "4%",
    marginBottom: isMobile ? "2%" : "",
  };

  const handlePolicyTypeChange  = (value) => {
    setSelectedPolicy(value);

    const newPolicy = {
      ...formData.policy,
      policyType: value
    };
    setFormData({
      ...formData,
      policy: newPolicy
    });
  };
  
 

 

  const handleBadWeatherChange = (e) => {
    const newPolicy = {
      ...formData.policy,
      badWeather: e.target.value
    };
    setFormData({
      ...formData,
      policy: newPolicy
    });
  };


  return (
    <div className={`container${isTablet ? '-fluid' : ''}`} style={container}>
      <div
        className="row justify-content-center"
        style={{ marginBottom: "2%" }}
      >
        <div
          className="col-12 col-sm-12 col-md-11 "
          style={{ marginTop: "3%" }}
        >
          <img src={isMobile ? Step9mb : step9} width="100%" alt="" />
        </div>

        <div className="row d-flex   justify-content-center" style={{marginTop:"3%"}}>
          <div className=" col-sm-12 col-lg-8" style={{marginBottom:isMobile?"":"3%"}}>
          <p style={labelStyle}>Select your cancellation policy</p>
            <div className=" d-sm-flex">
              
            <CardComponent

                title="Flexible"
                onChange={handlePolicyTypeChange }
                description="50% of the yacht fee amount is refunded for cancellations made from 24 hours to 7 days prior to arrival. 100% off the amount is refunded for cancellations made at least 7 days prior to arrival."
                linkText="More"
                linkURL="/more-info"
                value="flexible"
      
              
                isChecked={selectedPolicy === 'flexible'}
              />
                <CardComponent
                title="Moderate"
                onChange={handlePolicyTypeChange }
         
                value="moderate"
                isChecked={selectedPolicy === 'moderate'}
                description="50% of the yacht fee amount is refunded for cancellations made from 24 hours to 7 days prior to arrival. 100% off the amount is refunded for cancellations made at least 7 days prior to arrival."
                linkText="More"
                linkURL="/more-info"
              />
            </div>
            <div className="d-sm-flex"  style={{marginTop:"3%"}}>
            <CardComponent
   
                title="Strict"
                value="strict"
             
                onChange={handlePolicyTypeChange }
                isChecked={selectedPolicy === 'strict'}
                description="50% of the yacht fee amount is refunded for cancellations made from 24 hours to 7 days prior to arrival. 100% off the amount is refunded for cancellations made at least 7 days prior to arrival."
                linkText="More"
                linkURL="/more-info"
              />
                <CardComponent
                title="Very strict"
              
                description="50% of the yacht fee amount is refunded for cancellations made from 24 hours to 7 days prior to arrival. 100% off the amount is refunded for cancellations made at least 7 days prior to arrival."
                linkText="More"
                linkURL="/more-info"
                onChange={handlePolicyTypeChange }
                value="very_strict"
                isChecked={selectedPolicy === 'very_strict'}
              />
            </div>

          </div>
          {
  (islaptop_isTablet || isMobile) ? <hr/> : (<></>)
}
          <div className="col-sm-12 col-lg-4">
            <div className="col-sm-5 col-lg-12">
            <h4 className="pb-2" style={labelStyle}>
          In case of bad weather
          </h4>
          <div className="" style={timeContStyle}>
          <select
          className="form-select"
          style={{ borderStyle: "none" }}
          aria-label="Default select example"
          onChange={handleBadWeatherChange}
          value={formData.policy.badWeather}
        >
          <option value="0%_refund_per_day">0% refund per day</option>
          <option value="10% refund per day">10% refund per day</option>
        </select>
          </div>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
}
