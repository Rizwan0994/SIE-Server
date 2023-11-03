import React from "react";
import Button from "./Button";
import BackButton from './BackButton'
import { useMediaQuery } from "react-responsive";

export default function BottomNavbar({  currentStep, btntext, onPreviousStep, onSubmit, onContinue }) {
  const isMobile = useMediaQuery({ maxWidth: 576 });
const isExtended = useMediaQuery({ minWidth: 1600 });
const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });

  const handleButtonClick = () => {
    if (btntext === 'Start Here') {
      // Handle "Start Here" button click
      // For example, go to the next step
      onContinue();
    } else if (btntext === 'Continue') {
      // Handle "Continue" button click
      // For example, go to the next step
      onContinue();
    } else if (btntext === 'Save and Publish') {
      // Handle "Save and Publish" button click
      // For example, submit the form
      onSubmit();
    } else {
      // Handle other cases (if needed)
    }
  };

  return (
    <>
      <nav
        class="navbar navbar"
        style={{
          backgroundColor: "#FFFFFF",
          height:isMobile?"85px":"65",
          borderColor: "#CCCCCC",
          marginTop:isMobile? "32%":"",
          border: "1px solid #CCCCCC",
          justifyContent: isMobile?"center":"",
          
    
        }}
      >
        {isMobile ? (<></>):(<> {currentStep !== 1 ?(<BackButton onPreviousStep={onPreviousStep} btntext={"Back"} />):(<></>)} </>)} 
        <Button ButtonClick={handleButtonClick} btntext={currentStep === 7 ? "Save and Publish" : btntext} />
      </nav>


    </>
  );
}
