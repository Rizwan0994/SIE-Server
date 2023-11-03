import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import CardComponent from "../components/step10Card";
import step9 from "../svgs/step9.svg";
import Step9mb from "../svgs/step9mb.svg";
import Step11Custom from "../components/step11ButtonDiv";
import Form from "react-bootstrap/Form";


export default function Step11({ formData, setFormData }) {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isExtended = useMediaQuery({ minWidth: 1600 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 990 });
  const islaptop_isTablet = useMediaQuery({ minWidth: 577, maxWidth: 990 });
  const isDesktop = useMediaQuery({ minWidth: 990, maxWidth: 1230 });
  const isXL = useMediaQuery({ minWidth: 990 });
  const container ={
    height: isMobile?"":isTablet?"":"86vh",
  }
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

  const [yesClicked1, setYesClicked1] = useState(false);
  const [yesClicked2, setYesClicked2] = useState(false);
  const [yesClicked3, setYesClicked3] = useState(false);
  const [yesClicked4, setYesClicked4] = useState(false);
  const [yesClicked5, setYesClicked5] = useState(false);
  const [yesClicked6, setYesClicked6] = useState(false);

  const [noClicked1, setNoClicked1] = useState(false);
  const [noClicked2, setNoClicked2] = useState(false);
  const [noClicked3, setNoClicked3] = useState(false);
  const [noClicked4, setNoClicked4] = useState(false);
  const [noClicked5, setNoClicked5] = useState(false);
  const [noClicked6, setNoClicked6] = useState(false);

  const [selectedPolicy, setSelectedPolicy] = useState("");
  const [additionalRegulations, setAdditionalRegulations] = useState('');
  const handlePolicyTypeChange = (value) => {
    setSelectedPolicy(value);

    const newPolicy = {
      ...formData.booking,
      bookingMethod: value,
    };
    setFormData({
      ...formData,
      booking: newPolicy,
    });
  };



  const handleAdditionalRegulationsChange = (event) => {
    const { value } = event.target;
    setAdditionalRegulations(value);
    
    // Update the form data with the additional regulations
    const updatedFormData = { ...formData };
    updatedFormData.booking.additionalregulations = value;
    setFormData(updatedFormData);
  };

  const handleRegulationsChange = (regulationName, value) => {
    const updatedFormData = { ...formData };

    // Update the specific regulation in the booking object
    updatedFormData.booking.regulations[regulationName] = value;

    setFormData(updatedFormData);
  };

  console.log(formData);

  return (
    <div className={`container${isTablet ? "-fluid" : ""}`} style={container}>
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
      </div>

      <div className="row d-sm-flex ">
        <p style={labelStyle}>Booking method</p>
        <div className="col-sm-5">
          <CardComponent
            title="Request to book"
            description="Guests must send reservation requests and you can accept or decline the request."
            linkURL="/more-info"
            onChange={handlePolicyTypeChange}
            value="request_to_book"
            isChecked={selectedPolicy === "request_to_book"}
          />
        </div>
        <div className="col-sm-6 ">
          <CardComponent
            title="Instant book"
            description="Guests will be able to make a reservation automatically for the available dates on your calendar."
            linkURL="/more-info"
            value="instant_book"
            isChecked={selectedPolicy === "instant_book"}
            onChange={handlePolicyTypeChange}
          />
        </div>

        <hr style={{ marginTop: "3%" }} />

        <div className="row">
          <p style={labelStyle}>Regulations</p>
          <div className="col-12 col-sm-8  col-lg-7">
            <Step11Custom
              labelText={"Smoking allowed on deck"}
              yesClicked={formData.booking.regulations.smokingAllowedOnDeck}
              setYesClicked={(value) =>
                handleRegulationsChange("smokingAllowedOnDeck", value)
              }
              noClicked={!formData.booking.regulations.smokingAllowedOnDeck}
              setNoClicked={(value) =>
                handleRegulationsChange("smokingAllowedOnDeck", !value)
              }
            />
            <hr />
            <Step11Custom
              labelText={"Smoking allowed indoors"}
              yesClicked={formData.booking.regulations.smokingAllowedIndoors}
              setYesClicked={(value) =>
                handleRegulationsChange("smokingAllowedIndoors", value)
              }
              noClicked={!formData.booking.regulations.smokingAllowedIndoors}
              setNoClicked={(value) =>
                handleRegulationsChange("smokingAllowedIndoors", !value)
              }
            />
            <hr />

            <Step11Custom
              labelText={"Suitable for children"}
              yesClicked={formData.booking.regulations.suitableForChildren}
              setYesClicked={(value) =>
                handleRegulationsChange("suitableForChildren", value)
              }
              noClicked={!formData.booking.regulations.suitableForChildren}
              setNoClicked={(value) =>
                handleRegulationsChange("suitableForChildren", !value)
              }
            />
            <hr />
            <Step11Custom
              labelText={"Suitable for pets"}
              yesClicked={formData.booking.regulations.suitableForPets}
              setYesClicked={(value) =>
                handleRegulationsChange("suitableForPets", value)
              }
              noClicked={!formData.booking.regulations.suitableForPets}
              setNoClicked={(value) =>
                handleRegulationsChange("suitableForPets", !value)
              }
            />
            <hr />
            <Step11Custom
              labelText={"Suitable for infants"}
              yesClicked={formData.booking.regulations.suitableForInfants}
              setYesClicked={(value) =>
                handleRegulationsChange("suitableForInfants", value)
              }
              noClicked={!formData.booking.regulations.suitableForInfants}
              setNoClicked={(value) =>
                handleRegulationsChange("suitableForInfants", !value)
              }
            />
            <hr />
            <Step11Custom
              labelText={"Events & parties allowed"}
              yesClicked={formData.booking.regulations.eventsPartiesAllowed}
              setYesClicked={(value) =>
                handleRegulationsChange("eventsPartiesAllowed", value)
              }
              noClicked={!formData.booking.regulations.eventsPartiesAllowed}
              setNoClicked={(value) =>
                handleRegulationsChange("eventsPartiesAllowed", !value)
              }
            />
          </div>
          <div className="col-lg-5  col-sm-12">
            <Form.Group
              className="mt-"
              controlId="exampleForm.ControlTextarea1"
              style={{
                width: isMobile ? "" : isTablet ? "90%" : "85%",
                marginLeft: isXL ? "2%" : "",
                marginTop: isMobile ? "2%" : isTablet ? "2%" : "%",
              }}
            >
              <Form.Control
                placeholder="Type any additional regulations you would like to include for your listing"
                as="textarea"
                rows={7}
                value={additionalRegulations}
                onChange={handleAdditionalRegulationsChange}
                style={{
                  marginTop: isMobile ? "5%" : "",
                  height: isMobile ? "190px" : isDesktop ? "250px" : "",
                }}
              />
            </Form.Group>
          </div>
        </div>
      </div>
    </div>
  );
}
