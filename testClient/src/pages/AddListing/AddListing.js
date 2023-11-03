import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import Step1 from "../../Compunents/AddListing/Step1/Step1";
import Step2 from "../../Compunents/AddListing/Step2/Step2";
import Step3 from "../../Compunents/AddListing/Step3/Step3";
import Step4 from "../../Compunents/AddListing/Step4/Step4";
import Step5 from "../../Compunents/AddListing/Step5/Step5";
import Step6 from "../../Compunents/AddListing/Step6/Step6";
import Step7 from "../../Compunents/AddListing/Step7/Step7";
import Step8 from "../../Compunents/AddListing/Step8/Step8";
import Step9 from "../../Compunents/AddListing/Step9/Step9";
import Step10 from "../../Compunents/AddListing/Step10/Step10";
import Step11 from "../../Compunents/AddListing/Step11/Step11";
import Navbar from "../../Compunents/AddListing/components/BottomNavbar";
import Header from "../../Compunents/Header/Header";
import Modal from "../../Compunents/AddListing/components/Model1";
import { json } from "react-router-dom";
// import back_mobile_btn from '../../Compunents/AddListing/svgs/'

// import tick from '../'

function MultiStepForm() {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isExtended = useMediaQuery({ minWidth: 1600 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });

  const container = {
    // height: "50vh",
    // width: "98.9vw",
    minHeight: isMobile
      ? "450px"
      : isTablet
        ? "670px"
        : isExtended
          ? "600px"
          : "550px",
    minWidth: isMobile ? "435px " : isTablet ? "700px " : "1200px",
  };
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedImages, setSelectedImages] = useState([]);
  const [formData, setFormData] = useState({
    basics: {
      boatType: "",
      sleepingGuests: 0,
      cruisingGuests: 0,
      cabins: 0,
      bathrooms: 0,
      kitchens: 0,
      beds: 0,
    },
    features: {
      manufacturer: "",
      model: "",
      vesselName: "",
      builtIn: {
        month: 1,
        year: 1999,
      },
      refitIn: {
        month: 1,
        year: 1999,
      },
      length: {
        value: 0,
        type: "",
      },
      fuelType: {
        type: "",
      },
      fuelCapacity: {
        value: 0,
        type: "",
      },
      fuelConsumption: {
        value: 0,
        type: "",
      },
      waterCapacity: {
        value: 0,
        type: "",
      },
      powerCapacity: {
        value: 0,
        type: "",
      },
      engine: 0,
      maxCruising: 0,
    },
    location: {
      marina: "",
      cruisingRange: 0,
    },
    description: {
      listingTitle: "", // Initial state for the title
      listingDescription: "", // Initial state for the description
    },
    pricing: {
      charterType: "", // Initial state for charterType
      basePrice: {
        // Update basePrice to an object
        durationType: "Per night", // Initial durationType
        price: "0", // Initial price
        currencyType: "EUR", // Initial currencyType
      },
      smartPricing: "", // Initial state for smartPricing
      seasonalPrice: "", // Initial state for seasonalPrice
      discounts: {
        bookingDuration: [
          { dayuse: "10" },
          { weekly: "10" },
          { twoweeks: "10" },
          { month: "10" },
        ],
        earlyBooking: [
          { twomonths: "10" },
          { fourmonths: "10" },
          { sixmonths: "10" },
          { eightmonths: "10" },
        ],
        lastMinute: [
          { days25: "10" },
          { days8: "10" },
          { days15: "10" },
          { days3: "10" },
        ],
      },
      additionalCharges: [],
      optionalCharges: [],
    },
    calendar: {
      checkin_from: "00:00",
      checkin_to: "00:00",
      checkout_regular: "",
      checkout_fordayuse: "",
      minimum_stay_from: "",
      minimum_stay_to: "",
      preperation_time: "",
      booking_window: "",

      date_from: new Date(),
      date_to: new Date(),
      price: {
        duration: "",
        amount: 0,
        currency: "EUR",
      },
    },
    policy: {
      policyType: "",
      badWeather: "",
    },
    booking: {
      bookingMethod: "",
      regulations: {
        smokingAllowedOnDeck: false,
        smokingAllowedIndoors: false,
        suitableForChildren: false,
        suitableForPets: false,
        suitableForInfants: false,
        eventsPartiesAllowed: false,
      },
      additionalregulations: "",
    },
  });

  const [showModal, setShowModal] = useState(false);

  const handleNextStep = () => {
    if (currentStep === 7) {
    }
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    const userId = "651fd08158d64d530ad809e9";
  
    // Create a FormData object to send both JSON data and images
    const data = new FormData();
    for (let i = 0; i < selectedImages.length; i++) {
      console.log(selectedImages[i]); 
      data.append("photos", selectedImages[i]);
    }
  
    data.append("shipData", JSON.stringify(formData));
    console.log("data", selectedImages);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    };
  
    try {
      axios.post(`http://192.168.18.43:443/api/ships/${userId}`, data, config)
        .then((res) => {
          // Handle the response as needed
          console.log('Successfully posted', res.data);
        });
    } catch (error) {
      console.error("Error creating ship:", error);
    }
    console.log("Form submitted:", formData);
  };
  

  // ... (other functions and code)

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleContinueFromModal = () => {
    handleCloseModal();
    setCurrentStep(8); // Move to Step 8
  };

  // Render the appropriate step component based on the current step
  let stepComponent;
  switch (currentStep) {
    case 1:
      stepComponent = <Step1 formData={formData} onNextStep={handleNextStep} />;
      break;
    case 2:
      stepComponent = (
        <Step2
          formData={formData}
          setFormData={setFormData}
          onNextStep={handleNextStep}
          onPreviousStep={handlePreviousStep}
        />
      );
      break;
    case 3:
      stepComponent = (
        <Step3
          formData={formData}
          setFormData={setFormData}
          onNextStep={handleNextStep}
          onPreviousStep={handlePreviousStep}
        />
      );
      break;
    case 4:
      stepComponent = (
        <Step4
          formData={formData}
          setFormData={setFormData}
          onNextStep={handleNextStep}
          onPreviousStep={handlePreviousStep}
        />
      );
      break;
    case 5:
      stepComponent = (
        <Step5
          formData={formData}
          setFormData={setFormData}
          onNextStep={handleNextStep}
          onPreviousStep={handlePreviousStep}
        />
      );
      break;

    case 6:
      stepComponent = (
        <Step6
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
          formData={formData}
          setFormData={setFormData}
          onNextStep={handleNextStep}
          onPreviousStep={handlePreviousStep}
        />
      );
      break;
    case 7:
      stepComponent = (
        <Step7
          formData={formData}
          setFormData={setFormData}
          onNextStep={handleNextStep}
          onPreviousStep={handlePreviousStep}
        />
      );
      break;
    case 8:
      stepComponent = (
        <Step8
          formData={formData}
          setFormData={setFormData}
          onNextStep={handleNextStep}
          onPreviousStep={handlePreviousStep}
        />
      );
      break;
    case 9:
      stepComponent = (
        <Step9
          formData={formData}
          setFormData={setFormData}
          onNextStep={handleNextStep}
          onPreviousStep={handlePreviousStep}
        />
      );
      break;
    case 10:
      stepComponent = (
        <Step10
          formData={formData}
          setFormData={setFormData}
          onNextStep={handleNextStep}
          onPreviousStep={handlePreviousStep}
        />
      );
      break;
    case 11:
      stepComponent = (
        <Step11
          formData={formData}
          setFormData={setFormData}
          onPreviousStep={handlePreviousStep}
          onSubmit={handleSubmit}
        />
      );
      break;
    default:
      stepComponent = <div>Invalid step</div>;
  }

  return (
    <div style={container}>
      <Header />
      <div></div>
      <div>{stepComponent}</div>

      <Navbar
        currentStep={currentStep}
        btntext={
          currentStep === 1
            ? "Start Here"
            : currentStep === 11
              ? "Save and Publish"
              : "Continue"
        }
        onPreviousStep={handlePreviousStep}
        onSubmit={handleSubmit}
        onContinue={currentStep === 7 ? handleShowModal : handleNextStep}
      />

      <Modal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleContinueFromModal={handleContinueFromModal}
      />
    </div>
  );
}

export default MultiStepForm;
