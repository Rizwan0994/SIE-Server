import React, { useEffect, useState } from "react";
import step3 from "../svgs/step3.svg";
import { useCheckboxStates } from "../Custom/useRadio";
import CheckboxCard from "../components/CheckBoxCard";
import Step3mb from "../svgs/step3mb.svg";
import { useMediaQuery } from "react-responsive";

// style={{padding:isMobile?"5%":""}}

export default function Step4({ formData, setFormData }) {
  const Basics = [
    "Power generator",
    "AC",
    "Warm water",
    "Desalinator",
    "Sun Tent",
  ];
  const Food_Beverage = [
    "Freezer",
    "Refrigerator",
    "Microwave",
    "Oven",
    "Cutlery/Glasses/Dishes",
  ];
  const Electronics = [
    "TV",
    "WiFi",
    "AUX connection",
    "USB connection",
    "MP3/Radio/Cd player",
  ];
  const Sea_sports = [
    "Jet ski",
    "Inflatables",
    "Fishing stick",
    "Wakeboard",
    "Kayak",
  ];
  const Mega_yaghts = [
    "Freezer",
    "Refrigerator",
    "Microwave",
    "Oven",
    "Cutlery/Glasses/Dishes",
  ];
  const Yaght_equipment = [
    "Freezer",
    "Refrigerator",
    "Microwave",
    "Oven",
    "Cutlery/Glasses/Dishes",
  ];

  const [checkboxStates1, handleCheckboxChange1] = useCheckboxStates(Basics);
  const [checkboxStates2, handleCheckboxChange2] =
    useCheckboxStates(Food_Beverage);
  const [checkboxStates3, handleCheckboxChange3] =
    useCheckboxStates(Electronics);
  const [checkboxStates4, handleCheckboxChange4] =
    useCheckboxStates(Sea_sports);
  const [checkboxStates5, handleCheckboxChange5] =
    useCheckboxStates(Mega_yaghts);
  const [checkboxStates6, handleCheckboxChange6] =
    useCheckboxStates(Yaght_equipment);

  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isExtended = useMediaQuery({ minWidth: 1600 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 990 });
  const islaptop_isTablet = useMediaQuery({ minWidth: 577, maxWidth: 990 });

  const container = {
    height: isMobile?"":isTablet?"":"86vh",
    padding: isMobile ? "5%" : isTablet ? "" : "",
  };



  const boxdivStyle = {
    padding: isMobile ? "0px" : isTablet ? "0px" : "",
    marginTop: isMobile ? "2%" : "",
    marginBottom: isMobile ? "" : islaptop_isTablet ? "5%" : "2%",
  };

  useEffect(() => {
    console.log(formData);
    // Update formData whenever checkboxStates1 changes
    const selectedBasics = Object.keys(checkboxStates1).filter(
      (key) => checkboxStates1[key]
    );

    setFormData((prevData) => ({
      ...prevData,
      amenities: {
        ...prevData.amenities,
        basics: selectedBasics,
      },
    }));
  }, [checkboxStates1]);

  useEffect(() => {
    const selectedFoodBeverage = Object.keys(checkboxStates2).filter(
      (key) => checkboxStates2[key]
    );
    setFormData((prevData) => ({
      ...prevData,
      amenities: {
        ...prevData.amenities,
        foodAndBeverage: selectedFoodBeverage,
      },
    }));
  }, [checkboxStates2]);

  useEffect(() => {
    const selectedElectronics = Object.keys(checkboxStates3).filter(
      (key) => checkboxStates3[key]
    );
    setFormData((prevData) => ({
      ...prevData,
      amenities: {
        ...prevData.amenities,
        electronics: selectedElectronics,
      },
    }));
  }, [checkboxStates3]);

  useEffect(() => {
    const selectedSea_sports = Object.keys(checkboxStates4).filter(
      (key) => checkboxStates4[key]
    );
    setFormData((prevData) => ({
      ...prevData,
      amenities: {
        ...prevData.amenities,
        Sea_sports: selectedSea_sports,
      },
    }));
  }, [checkboxStates4]);

  useEffect(() => {
    const selectedMega_yaghts = Object.keys(checkboxStates5).filter(
      (key) => checkboxStates5[key]
    );
    setFormData((prevData) => ({
      ...prevData,
      amenities: {
        ...prevData.amenities,
        Mega_yaghts: selectedMega_yaghts,
      },
    }));
  }, [checkboxStates5]);

  useEffect(() => {
    const selectedYaght_equipment = Object.keys(checkboxStates6).filter(
      (key) => checkboxStates6[key]
    );
    setFormData((prevData) => ({
      ...prevData,
      amenities: {
        ...prevData.amenities,
        Yaght_equipment: selectedYaght_equipment,
      },
    }));
  }, [checkboxStates6]);

  return (
    <div
      className={`container${islaptop_isTablet ? "-fluid" : ""}`}
      style={container}
    >
      <div
        className="row justify-content-center"
        style={{ marginBottom: "5%" }}
      >
        <div
          className="col-12 col-md-12  col-lg-10 "
          style={{ marginTop: "3%", padding: isTablet ? "0px" :isMobile?"0px": "" }}
        >
          <img src={isMobile ? Step3mb : step3} width="100%" alt="" />
        </div>
      </div>

      <div
        class="row justify-content-center"
        style={{
          padding: isMobile ? "" : isTablet ? "2% 2% 5% 5%" : "",
          marginLeft: isMobile ? "" : isTablet ? "" : "4%",
        }}
      >
        <div class="col-lg-4 col-md-5 col-sm-6 col-12 " style={boxdivStyle}>
          <CheckboxCard
            title={"Basic"}
            checkboxLabels={Basics}
            checkboxStates={checkboxStates1}
            handleCheckboxChange={handleCheckboxChange1}
          />
        </div>
        <div class="col-lg-4 col-md-5 col-sm-6 col-12" style={boxdivStyle}>
          <CheckboxCard
            title={"Food_Beverage"}
            checkboxLabels={Food_Beverage}
            checkboxStates={checkboxStates2}
            handleCheckboxChange={handleCheckboxChange2}
          />
        </div>
        <div class="col-lg-4 col-md-5 col-sm-6 col-12" style={boxdivStyle}>
          <CheckboxCard
            style={{ marginLeft: "auto" }}
            title={"Electronics"}
            checkboxLabels={Electronics}
            checkboxStates={checkboxStates3}
            handleCheckboxChange={handleCheckboxChange3}
          />
        </div>
        <div class="col-lg-4 col-md-5 col-sm-6 col-12" style={boxdivStyle}>
          <CheckboxCard
            title={"Sea sports"}
            checkboxLabels={Sea_sports}
            checkboxStates={checkboxStates4}
            handleCheckboxChange={handleCheckboxChange4}
          />
        </div>
        <div class="col-lg-4 col-md-5 col-sm-6 col-12" style={boxdivStyle}>
          <CheckboxCard
            title={"Mega yaghts"}
            checkboxLabels={Mega_yaghts}
            checkboxStates={checkboxStates5}
            handleCheckboxChange={handleCheckboxChange5}
          />
        </div>
        <div class="col-lg-4 col-md-5 col-sm-6 col-12" style={boxdivStyle}>
          <CheckboxCard
            style={{ marginLeft: "auto" }}
            title={"Yaght equipment"}
            checkboxLabels={Yaght_equipment}
            checkboxStates={checkboxStates6}
            handleCheckboxChange={handleCheckboxChange6}
          />
        </div>
      </div>
    </div>
  );
}
