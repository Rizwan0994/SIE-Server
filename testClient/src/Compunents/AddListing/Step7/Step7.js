import React from 'react'
import step6 from "../svgs/step6.svg";
import Form from 'react-bootstrap/Form';
import Step6mb from "../svgs/step6mb.svg";
import { useMediaQuery } from "react-responsive";

const HeadingStyle = {
  fontSize: "20px",
  fontWeight: "600",
  fontFamily: "Open Sans",
};

export default function Step7({ formData, setFormData }) {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isExtended = useMediaQuery({ minWidth: 1600 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 990 });
  const islaptop_isTablet = useMediaQuery({ minWidth: 577, maxWidth: 990 });
  const isDesktop = useMediaQuery({minWidth: 990})

  const container ={
    height: isMobile?"":isTablet?"":"86vh",
  }
  
  const handleTitleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      description: {
        ...prevData.description,
        listingTitle: event.target.value,
      },
    }));
  };

  const handleDescriptionChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      description: {
        ...prevData.description,
        listingDescription: event.target.value,
      },
    }));
    console.log(formData)
  };

  return (
  <div  style={container}>    
     <div className="row justify-content-center" style={{ marginBottom: "4%" }} >
       <div className="col-12 col-sm-12 col-lg-7" style={{ marginTop: "3%" }}>
       <img src={isMobile?Step6mb:step6} width="100%" alt="" />
      </div>
    </div>
    <div className='row justify-content-center'>
      <div className="col-12 col-sm-12 col-lg-7" style={{marginLeft:isTablet?"6%":"3%"}}> 
      <Form.Group className="mb-5" controlId="" style={{width:isMobile?"":"35%",marginLeft:"2%"}}>
      <Form.Label style={HeadingStyle}>Listing title</Form.Label>
      <Form.Control
          size="lg"
          type="text"
          placeholder="Large text"
          value={formData.description.listingTitle}
          onChange={handleTitleChange}
        />
      </Form.Group>
    
      <hr style={{marginRight:isTablet?"4%":"" }}/>
  
      <Form.Group className="mt-5" controlId="exampleForm.ControlTextarea1" style={{width:isMobile?"":isTablet?"60%":"65%",marginLeft:"2%"}}>
        <Form.Label style={HeadingStyle}>Listing description</Form.Label>
        <Form.Control
          placeholder="Type a few things you would like our users to know about your listing"
          as="textarea"
          rows={7}
          style={{ height: isMobile ? '350px' : isDesktop ? '250px' : '' }}
          value={formData.description.listingDescription}
          onChange={handleDescriptionChange}
        />
      </Form.Group>
      
     
      </div>
    </div>
  </div>
  )
}
