import React, { useState } from "react";
import step7 from "../svgs/step7.svg";
import Step7mb from "../svgs/step7mb.svg";
import useCustomSelect from "../Custom/useCustomSelect";

import useNumberInput from "../Custom/InputNumber";

import { AiOutlinePlus } from "react-icons/ai";
import CustomSelect from "../Custom/Step8Select";
import { useMediaQuery } from "react-responsive";
import RadioInput from "../components/RadioInput";
import { set } from "date-fns";

// import './step8.css'

const HeadingStyle = {
  fontSize: "20px",
  fontWeight: "600",
  fontFamily: "Open Sans",
};

const smalltextStyle = {
  fontSize: "16px",
  fontWeight: "400",
  fontFamily: "Open Sans",
};

const selectdivStyle = {
  display: "flex",
  borderRadius: "8px",
  alignItems: "center",
  border: "rgb(186 185 185) solid 1px",
  width: "200px",
  padding: "5% 5%",
  color: "",
};

export default function Step8({ formData, setFormData }) {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isExtended = useMediaQuery({ minWidth: 1600 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 990 });

  const islaptop_isTablet = useMediaQuery({ minWidth: 577, maxWidth: 990 });
  const isDesktop = useMediaQuery({ minWidth: 990, maxWidth: 1230 });
  const isXL = useMediaQuery({ minWidth: 990, maxWidth: 1230 });
  const container = {
    height: isMobile ? "" : isTablet ? "" : "84vh",
  };

  const selectBootStyle = {
    color: "#00BFFF",
    borderStyle: "none",
    fontWeight: "600",
  };
  const hrStyle = {
    backgroundColor: "#CCCCCC",
    marginLeft: isMobile ? "" : "10%",
    margin: isMobile ? "5% 2%" : "5% 0%",
    width: isMobile ? "96%" : "",
  };

  const [unit, setUnit] = useState("feet");
  const { value, handleChange } = useNumberInput(0);
  const opchartertype = [
    { value: "withcrew", label: "With Crew" },
    { value: "withoutcrew", label: "Without Crew" },
  ];
 

  const numberContStyle = {
    width: isMobile ? "100%" : "60px",
    borderStyle: "none",
    color: "#00BFFF",
    fontWeight: "600",
    borderRight: "1px solid #666666", // Border on the right side
    borderLeft: "1px solid #666666", // Border on the left side
    paddingLeft: isTablet ? "10%" : "10%",
    margin: "0% 2%",
  };

  const numdivStyle = {
    display: "flex",
    borderRadius: "8px",
    alignItems: "center",
    border: "rgb(186 185 185) solid 1px",
    width: isMobile ? "" : "fit-content",
    padding: isMobile ? "2% 4%" : isTablet ? "2% 4%" : "2% 4%",
    color: "",
  };

  const opbaseprice1 = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ];

  const opbaseprice2 = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ];
  const opsmartpricing = [
    { value: "10", label: "+/- 10%" },
    { value: "20", label: "+/- 20%" },
    { value: "30", label: "+/- 30%" },
  ];
  const opseasonalprice = [
    { value: "10", label: "+/- 10%" },
    { value: "20", label: "+/- 20%" },
    { value: "30", label: "+/- 30%" },
  ];

  const opbookingduration = [
    { value: "10", label: "10%" },
    { value: "20", label: "20%" },
    { value: "30", label: "30%" },
  ];

  const opearlybooking = [
    { value: "10", label: "10%" },
    { value: "20", label: "20%" },
    { value: "30", label: "30%" },
  ];

  const oplastminute = [
    { value: "10", label: "10%" },
    { value: "20", label: "20%" },
    { value: "30", label: "30%" },
  ];

  const options = ["Option 1", "Option 2", "Option 3"];

  const chartertype = useCustomSelect(opchartertype, opchartertype[0].value);
  const baseprice1 = useCustomSelect(opbaseprice1, opbaseprice1[0].value);
  const baseprice2 = useCustomSelect(opbaseprice2, opbaseprice2[0].value);
  const smartpricing = useCustomSelect(opsmartpricing, opsmartpricing[0].value);
  const seasonalprice = useCustomSelect(
    opseasonalprice,
    opseasonalprice[0].value
  );

  const bookingduration = useCustomSelect(
    opbookingduration,
    opbookingduration[0].value
  );

  const earlybooking = useCustomSelect(opearlybooking, opearlybooking[0].value);
  const lastminute = useCustomSelect(oplastminute, oplastminute[0].value);

  const handleUnitChange = (event) => {
    const newUnit = event.target.value;
    setUnit(newUnit);
  };

  // Discount Selects
  const [selectedValue, setSelectedValue] = useState("10%");

  const [dayuse, setDayUse] = useState("10%");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleCharterTypeChange = (event) => {
    const value = event.target.value;

    setFormData((prevData) => ({
      ...prevData,
      pricing: {
        ...prevData.pricing,
        charterType: value,
      },
    }));
  };

  // base price

  const handleDurationTypeChange = (event) => {
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      pricing: {
        ...prevData.pricing,
        basePrice: {
          ...prevData.pricing.basePrice,
          durationType: value,
        },
      },
    }));
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      pricing: {
        ...prevData.pricing,
        basePrice: {
          ...prevData.pricing.basePrice,
          price: value,
        },
      },
    }));
  };

  const handleCurrencyTypeChange = (event) => {
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      pricing: {
        ...prevData.pricing,
        basePrice: {
          ...prevData.pricing.basePrice,
          currencyType: value,
        },
      },
    }));
  };

  //smart price
  const handleSmartPricingChange = (event) => {
    const value = parseInt(event.target.value, 10); // Convert the value to an integer if necessary
    setFormData((prevData) => ({
      ...prevData,
      pricing: {
        ...prevData.pricing,
        smartPricing: value,
      },
    }));
  };

  //seasonal

  //Discount

  const handleDayUseChange = (value) => {
    setDayUse(value);
    console.log(value);
    console.log(formData);
    const updatedBookingDuration =
      formData.pricing.discounts.bookingDuration.map((option) => {
        if (Object.keys(option)[0] === "dayuse") {
          return { dayuse: value };
        }
        return option;
      });

    setFormData((prevData) => ({
      ...prevData,
      pricing: {
        ...prevData.pricing,
        discounts: {
          ...prevData.pricing.discounts,
          bookingDuration: updatedBookingDuration,
        },
      },
    }));
  };

  const handleWeeklyChange = (value) => {
    console.log(formData);
    const updatedBookingDuration =
      formData.pricing.discounts.bookingDuration.map((option, index) => {
        if (index === 1) {
          // Assuming "Weekly" corresponds to the second element in bookingDuration
          return { weekly: value };
        }
        return option;
      });

    setFormData((prevData) => ({
      ...prevData,
      pricing: {
        ...prevData.pricing,
        discounts: {
          ...prevData.pricing.discounts,
          bookingDuration: updatedBookingDuration,
        },
      },
    }));
  };

  const handleTwoWeeksChange = (value) => {
    console.log(formData);
    const updatedBookingDuration =
      formData.pricing.discounts.bookingDuration.map((option, index) => {
        if (index === 2) {
          // Assuming "2 weeks" corresponds to the third element in bookingDuration
          return { twoweeks: value }; // Directly return the selected value
        }
        return option;
      });

    setFormData((prevData) => ({
      ...prevData,
      pricing: {
        ...prevData.pricing,
        discounts: {
          ...prevData.pricing.discounts,
          bookingDuration: updatedBookingDuration,
        },
      },
    }));
  };

  const handleMonthlyChange = (value) => {
    console.log(formData);
    const updatedBookingDuration =
      formData.pricing.discounts.bookingDuration.map((option, index) => {
        if (index === 3) {
          // Assuming "Monthly" corresponds to the fourth element in bookingDuration
          return { month: value }; // Directly return the selected value
        }
        return option;
      });

    setFormData((prevData) => ({
      ...prevData,
      pricing: {
        ...prevData.pricing,
        discounts: {
          ...prevData.pricing.discounts,
          bookingDuration: updatedBookingDuration,
        },
      },
    }));
  };

  const handleTwoMonthsChange = (value) => {
    console.log(formData);
    const updatedEarlyBooking = formData.pricing.discounts.earlyBooking.map(
      (option, index) => {
        if (index === 0) {
          // Assuming "2 months" corresponds to the first element in earlyBooking
          return { twomonths: value }; // Directly return the selected value
        }
        return option;
      }
    );

    setFormData((prevData) => ({
      ...prevData,
      pricing: {
        ...prevData.pricing,
        discounts: {
          ...prevData.pricing.discounts,
          earlyBooking: updatedEarlyBooking,
        },
      },
    }));
  };

  const handleFourMonthsChange = (value) => {
    console.log(formData);
    const updatedEarlyBooking = formData.pricing.discounts.earlyBooking.map(
      (option, index) => {
        if (index === 1) {
          // Assuming "4 months" corresponds to the second element in earlyBooking
          return { fourmonths: value }; // Directly return the selected value
        }
        return option;
      }
    );

    setFormData((prevData) => ({
      ...prevData,
      pricing: {
        ...prevData.pricing,
        discounts: {
          ...prevData.pricing.discounts,
          earlyBooking: updatedEarlyBooking,
        },
      },
    }));
  };

  const handleSixMonthsChange = (value) => {
    console.log(formData);
    const updatedEarlyBooking = formData.pricing.discounts.earlyBooking.map(
      (option, index) => {
        if (index === 2) {
          // Assuming "6 months" corresponds to the third element in earlyBooking
          return { sixmonths: value }; // Directly return the selected value
        }
        return option;
      }
    );

    setFormData((prevData) => ({
      ...prevData,
      pricing: {
        ...prevData.pricing,
        discounts: {
          ...prevData.pricing.discounts,
          earlyBooking: updatedEarlyBooking,
        },
      },
    }));
  };

  const handleEightMonthsChange = (value) => {
    console.log(formData);
    const updatedEarlyBooking = formData.pricing.discounts.earlyBooking.map(
      (option, index) => {
        if (index === 3) {
          // Assuming "8 months" corresponds to the fourth element in earlyBooking
          return { eightmonths: value };
        }
        return option;
      }
    );

    setFormData((prevData) => ({
      ...prevData,
      pricing: {
        ...prevData.pricing,
        discounts: {
          ...prevData.pricing.discounts,
          earlyBooking: updatedEarlyBooking,
        },
      },
    }));
  };

  const handleTwentyFiveDaysChange = (value) => {
    console.log(formData);
    const updatedLastMinute = formData.pricing.discounts.lastMinute.map(
      (option, index) => {
        if (index === 0) {
          return { days25: value };
        }
        return option;
      }
    );

    setFormData((prevData) => ({
      ...prevData,
      pricing: {
        ...prevData.pricing,
        discounts: {
          ...prevData.pricing.discounts,
          lastMinute: updatedLastMinute,
        },
      },
    }));
  };

  const handleFifteenDaysChange = (value) => {
    console.log(formData);
    const updatedLastMinute = formData.pricing.discounts.lastMinute.map(
      (option, index) => {
        if (index === 2) {
          // Assuming "15 days" corresponds to the third element in lastMinute
          return { days15: value }; // Directly return the selected value
        }
        return option;
      }
    );

    setFormData((prevData) => ({
      ...prevData,
      pricing: {
        ...prevData.pricing,
        discounts: {
          ...prevData.pricing.discounts,
          lastMinute: updatedLastMinute,
        },
      },
    }));
  };

  const handleEightDaysChange = (value) => {
    console.log(formData);
    const updatedLastMinute = formData.pricing.discounts.lastMinute.map(
      (option, index) => {
        if (index === 1) {
          // Assuming "8 days" corresponds to the second element in lastMinute
          return { days8: value }; // Directly return the selected value
        }
        return option;
      }
    );

    setFormData((prevData) => ({
      ...prevData,
      pricing: {
        ...prevData.pricing,
        discounts: {
          ...prevData.pricing.discounts,
          lastMinute: updatedLastMinute,
        },
      },
    }));
  };

  const handleThreeDaysChange = (value) => {
    console.log(formData);
    const updatedLastMinute = formData.pricing.discounts.lastMinute.map(
      (option, index) => {
        if (index === 3) {
          return { days3: value };
        }
        return option;
      }
    );

    setFormData((prevData) => ({
      ...prevData,
      pricing: {
        ...prevData.pricing,
        discounts: {
          ...prevData.pricing.discounts,
          lastMinute: updatedLastMinute,
        },
      },
    }));
  };

  // Function to update the form data with the charges
  const charterStyle = {
    width: isMobile ? "" : "156px",
    height: isMobile ? "" : "45px",
    fontSize: "10px",
    // width: isMobile ? "" : "fit-content",
    border: "rgb(186 185 185) solid 0.5px",
    display: "flex",
    borderRadius: "5px",
    padding: isMobile ? "3%" : "2%",
    alignItems: isMobile ? "" : "center",
    marginBottom: isMobile ? "2%" : "",
  };

  const basePriceStyle = {
    width: isMobile ? "" : "258px",
    height: isMobile ? "" : "45px",
    fontSize: "10px",
    // width: isMobile ? "" : "fit-content",
    border: "rgb(186 185 185) solid 0.5px",
    display: "flex",
    borderRadius: "5px",
    padding: isMobile ? "3%" : "2%",
    alignItems: isMobile ? "" : "center",
    marginBottom: isMobile ? "2%" : "",
    fontSize:"10px"
  };

  const smartPriceStyle = {
    width: isMobile ? "" : "118px",
    height: isMobile ? "" : "45px",
    fontSize: "10px",
  
    border: "rgb(186 185 185) solid 0.5px",
    display: "flex",
    borderRadius: "5px",
    padding: isMobile ? "3%" : "2%",
    alignItems: isMobile ? "" : "center",
    marginBottom: isMobile ? "2%" : "",
    fontSize:"10px"
  };

  const seasonalPriceStyle = {
    width: isMobile ? "" : "108px",
    height: isMobile ? "" : "45px",
    fontSize: "10px",
  whiteSpace:"nowrap",
    border: "rgb(186 185 185) solid 0.5px",
    display: "flex",
    borderRadius: "5px",
    padding: isMobile ? "3%" : "2%",
    alignItems: isMobile ? "" : "center",
    marginBottom: isMobile ? "2%" : "",
    fontSize:"10px"
  };

  const discountDivsStyle = {
    width: isMobile ? "" : "170px",
    height: isMobile ? "" : "45px",
    fontSize: "10px",
  whiteSpace:"nowrap",
    border: "rgb(186 185 185) solid 0.5px",
    display: "flex",
    borderRadius: "5px",
    padding: isMobile ? "3%" : "2%",
    alignItems: isMobile ? "" : "center",
    marginBottom: isMobile ? "2%" : "",
    fontSize:"10px",
    alignItems: "center",
    marginRight: "2%",
  };







  return (
    <div style={container}>
      <div
        className="row justify-content-center"
        style={{ marginBottom: "2%" }}
      >
        <div
          className="col-12 col-sm-11 col-md-10 col-lg-9"
          style={{ marginTop: "3%" }}
        >
          <img src={isMobile ? Step7mb : step7} width="100%" alt="" />
        </div>
      </div>
      {/*  */}

      <div className="container-fluid">
        <div
          className="row"
          style={{
            marginLeft: isDesktop
              ? "3%"
              : isTablet
              ? "3%"
              : isMobile
              ? ""
              : "9%",
            marginBottom:isMobile?"3%": isTablet?"2%":"1%",
            marginTop: isTablet ? "3%" : "",
          }}
        >
          <div
            className="col-12 col-sm-3 col-lg-2"
            style={{ marginRight: "%" }}
          >
            <h4 className="pb-2" style={HeadingStyle}>
              Charter Type
            </h4>
            <div
              style={charterStyle}
            >
              <select
                className="form-select"
                style={{ borderStyle: "none" }}
                aria-label="Default select example"
                value={formData.pricing.charterType} // Bind select value to the state
                onChange={handleCharterTypeChange} // Handle changes and update state
              >
                <option value="withcrew">With Crew</option>
                <option value="withoutcrew">Without Crew</option>
              </select>
            </div>
          </div>
          {isMobile ? (
            <>
              {" "}
              <hr style={hrStyle} />
            </>
          ) : (
            <></>
          )}

          <div className=" col-12 col-sm-5 col-lg-3" style={{ marginTop: "%" }}>
            <h4 className="pb-2" style={HeadingStyle}>
              Base Price
            </h4>
            <div style={basePriceStyle}>
              <select
                className="form-select"
                style={{
                  borderStyle: "none",
                  width: isMobile ? "100%" : "auto",
                }}
                aria-label="Default select example"
                value={formData.pricing.basePrice.durationType}
                onChange={handleDurationTypeChange}
              >
                <option value="per">Per night</option>
                <option value="withoutcrew"></option>
              </select>
              <input
                type="number"
                value={formData.pricing.basePrice.price}
                onChange={handlePriceChange}
                style={numberContStyle}
              />

              <select
                className="form-select"
                style={{ borderStyle: "none" }}
                aria-label="Default select example"
                value={formData.pricing.basePrice.currencyType}
                onChange={handleCurrencyTypeChange}
              >
                {" "}
                <option value="eur">EUR</option>
                <option value="usd">USD</option>
              </select>
            </div>
            <span style={{ fontSize: isMobile ? "15px" : "10px" }}>
              Including crew and VAT
            </span>
          </div>

          {isMobile ? (
            <>
              {" "}
              <hr style={hrStyle} />
            </>
          ) : (
            <></>
          )}

          <div
            className=" col-12 col-sm-4 col-lg-2"
            style={{ marginRight: "%" }}
          >
            <h4 className="pb-2" style={HeadingStyle}>
              Smart Pricing
            </h4>
            <div style={smartPriceStyle}>
              <select
                className="form-select"
                style={selectBootStyle}
                aria-label="Default select example"
                value={formData.pricing.smartPricing}
                onChange={handleSmartPricingChange}
              >
                <option value="10">+/- 10%</option>
                <option value="20">+/- 20%</option>
                <option value="30">+/- 30%</option>
              </select>
            </div>
            <span style={{ fontSize: isMobile ? "15px" : "10px" }}>
              Automatic increase or decrease the base price depending on demand
              and availability of your listing
            </span>
          </div>

          {isMobile ? (
            <>
              {" "}
              <hr style={hrStyle} />
            </>
          ) : (
            <></>
          )}

          <div
            className="col-12 col-sm-4 col-lg-3"
            style={{ marginRight: "%" }}
          >
            <h4 className="pb-2" style={HeadingStyle}>
              Seasonal Price
            </h4>
            <div
              style={seasonalPriceStyle}
            >
              <span
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: "400",
                  display: "flex",
                  fontSize: "10px",
                  color: "#333333",
                }}
              >
                Add period
                <AiOutlinePlus
                  style={{
                    marginLeft: isMobile ? "auto" : "5%",
                    marginTop: isMobile ? "1%" : "2%",
                  }}
                />{" "}
              </span>
            </div>
          </div>

          {isMobile ? (
            <>
              {" "}
              <hr style={hrStyle} />
            </>
          ) : (
            <>
              {" "}
              <hr className="mt-3 mb-3" style={{ width: "85%" , marginBottom:isTablet?"2%":"1%", }} />
            </>
          )}
        </div>

        {/*row 2  */}

        <div
          className="row"
          style={{
            marginLeft: isDesktop
              ? "3%"
              : isTablet
              ? "1%"
              : isMobile
              ? ""
              : "9%",
              marginBottom:isMobile?"3%": isTablet?"2%":"1%",
          }}
        >
          <h4 className="pb-2" style={HeadingStyle}>
            Discounts
          </h4>

          <div
            className="col-12 col-sm-6 col-lg-4"
            style={{ marginRight: "%", paddingRight: "0px" }}
          >
            <span className="pb-2" style={smalltextStyle}>
              Booking duration
            </span>
            <div
              style={{
                marginRight: "%",
                display: isMobile ? "" : "flex",
                marginTop: "2%",
              }}
            >
              <div style={discountDivsStyle}>
                <CustomSelect
                  label="Day use"
                  options={[
                    { label: "10%", value: "10%" },
                    { label: "20%", value: "20%" },
                    { label: "30%", value: "30%" },
                    { label: "40%", value: "40%" },
                  ]}
                  onChange={(selectedValue) =>
                    handleDayUseChange(selectedValue)
                  }
                  selectedValue={
                    formData.pricing.discounts.bookingDuration[0].dayuse
                  }
                />
              </div>
              {/*  */}
              <div style={discountDivsStyle}>
                <CustomSelect
                  label="Weekly"
                  options={[
                    { label: "10%", value: "10%" },
                    { label: "20%", value: "20%" },
                    { label: "30%", value: "30%" },
                    { label: "40%", value: "40%" },
                  ]}
                  onChange={(selectedValue) =>
                    handleWeeklyChange(selectedValue)
                  }
                  selectedValue={
                    formData.pricing.discounts.bookingDuration[1].weekly
                  }
                />
              </div>
            </div>
            {/* below 2 divs */}
            <div
              style={{
                marginRight: "%",
                display: isMobile ? "" : "flex",
                marginTop: "2%",
              }}
            >
              <div style={discountDivsStyle}>
                <CustomSelect
                  label="2 weeks"
                  options={[
                    { label: "10%", value: "10%" },
                    { label: "20%", value: "20%" },
                    { label: "30%", value: "30%" },
                    { label: "40%", value: "40%" },
                  ]}
                  onChange={(selectedValue) =>
                    handleTwoWeeksChange(selectedValue)
                  }
                  selectedValue={
                    formData.pricing.discounts.bookingDuration[2].twoweeks
                  }
                />
              </div>
              {/*  */}
              <div style={discountDivsStyle}>
                <CustomSelect
                  label="Monthly"
                  options={[
                    { label: "10%", value: "10%" },
                    { label: "20%", value: "20%" },
                    { label: "30%", value: "30%" },
                    { label: "40%", value: "40%" },
                  ]}
                  onChange={(selectedValue) =>
                    handleMonthlyChange(selectedValue)
                  }
                  selectedValue={
                    formData.pricing.discounts.bookingDuration[3].month
                  }
                />
              </div>
            </div>
          </div>
          {/*  */}
          <div
            className=" col-12 col-sm-6 col-lg-4"
            style={{ marginRight: "%", paddingRight: "0px" }}
          >
            <span className="pb-2" style={smalltextStyle}>
              Early booking
            </span>
            <div
              style={{
                marginRight: "%",
                display: isMobile ? "" : "flex",
                marginTop: "2%",
              }}
            >
              <div style={discountDivsStyle}>
                <CustomSelect
                  label="2 months"
                  options={[
                    { label: "10%", value: "10%" },
                    { label: "20%", value: "20%" },
                    { label: "30%", value: "30%" },
                    { label: "40%", value: "40%" },
                  ]}
                  selectedValue={
                    formData.pricing.discounts.earlyBooking[0].twomonths
                  }
                  onChange={(selectedValue) =>
                    handleTwoMonthsChange(selectedValue)
                  }
                />
              </div>
              {/*  */}
              <div style={discountDivsStyle}>
                <CustomSelect
                  label="4 months"
                  options={[
                    { label: "10%", value: "10%" },
                    { label: "20%", value: "20%" },
                    { label: "30%", value: "30%" },
                    { label: "40%", value: "40%" },
                  ]}
                  selectedValue={
                    formData.pricing.discounts.earlyBooking[1].fourmonths
                  }
                  onChange={(selectedValue) =>
                    handleFourMonthsChange(selectedValue)
                  }
                />
              </div>
            </div>
            {/* below 2 divs */}
            <div
              style={{
                marginRight: "%",
                display: isMobile ? "" : "flex",
                marginTop: "2%",
              }}
            >
              <div style={discountDivsStyle}>
                <CustomSelect
                  label="6 months"
                  options={[
                    { label: "10%", value: "10%" },
                    { label: "20%", value: "20%" },
                    { label: "30%", value: "30%" },
                    { label: "40%", value: "40%" },
                  ]}
                  selectedValue={
                    formData.pricing.discounts.earlyBooking[2].sixmonths
                  }
                  onChange={(selectedValue) =>
                    handleSixMonthsChange(selectedValue)
                  }
                />
              </div>
              {/*  */}
              <div style={discountDivsStyle}>
                <CustomSelect
                  label="8 months"
                  options={[
                    { label: "10%", value: "10%" },
                    { label: "20%", value: "20%" },
                    { label: "30%", value: "30%" },
                    { label: "40%", value: "40%" },
                  ]}
                  selectedValue={
                    formData.pricing.discounts.earlyBooking[3].eightmonths
                  }
                  onChange={(selectedValue) =>
                    handleEightMonthsChange(selectedValue)
                  }
                />
              </div>
            </div>
          </div>
          {/*  */}
          <div
            className="col-12 col-sm-6 col-lg-4"
            style={{ marginRight: "%", paddingRight: isMobile ? "0px" : "" }}
          >
            <span className="pb-2" style={smalltextStyle}>
              Last minute
            </span>
            <div
              style={{
                marginRight: "%",
                display: isMobile ? "" : "flex",
                marginTop: "2%",
              }}
            >
              <div style={discountDivsStyle}>
                <CustomSelect
                  label="25 days"
                  options={[
                    { label: "10%", value: "10%" },
                    { label: "20%", value: "20%" },
                    { label: "30%", value: "30%" },
                    { label: "40%", value: "40%" },
                  ]}
                  selectedValue={
                    formData.pricing.discounts.lastMinute[0].days25
                  }
                  onChange={(selectedValue) =>
                    handleTwentyFiveDaysChange(selectedValue)
                  }
                />
              </div>
              {/*  */}
              <div style={discountDivsStyle}>
                <CustomSelect
                  label="15 days"
                  options={[
                    { label: "10%", value: "10%" },
                    { label: "20%", value: "20%" },
                    { label: "30%", value: "30%" },
                    { label: "40%", value: "40%" },
                  ]}
                  selectedValue={
                    formData.pricing.discounts.lastMinute[1].days15
                  }
                  onChange={(selectedValue) =>
                    handleFifteenDaysChange(selectedValue)
                  }
                />
              </div>
            </div>
            {/* below 2 divs */}
            <div
              style={{
                marginRight: "%",
                display: isMobile ? "" : "flex",
                marginTop: "2%",
              }}
            >
              <div style={discountDivsStyle}>
                <CustomSelect
                  label="8 days"
                  options={[
                    { label: "10%", value: "10%" },
                    { label: "20%", value: "20%" },
                    { label: "30%", value: "30%" },
                    { label: "40%", value: "40%" },
                  ]}
                  selectedValue={formData.pricing.discounts.lastMinute[2].days8}
                  onChange={(selectedValue) =>
                    handleEightDaysChange(selectedValue)
                  }
                />
              </div>
              {/*  */}
              <div style={discountDivsStyle}>
                <CustomSelect
                  label="3 days"
                  options={[
                    { label: "10%", value: "10%" },
                    { label: "20%", value: "20%" },
                    { label: "30%", value: "30%" },
                    { label: "40%", value: "40%" },
                  ]}
                  selectedValue={formData.pricing.discounts.lastMinute[3].days8}
                  onChange={(selectedValue) =>
                    handleThreeDaysChange(selectedValue)
                  }
                />
              </div>
            </div>
          </div>

          {isMobile ? (
            <>
              {" "}
              <hr style={hrStyle} />
            </>
          ) : (
            <>
              {" "}
              <hr className="mt-3 mb-3" style={{ width: "85%" }} />
            </>
          )}
        </div>
        {/* row3 */}
        <div
          className="row"
          style={{
            marginLeft: isDesktop
              ? "3%"
              : isTablet
              ? "1%"
              : isMobile
              ? ""
              : "9%",
              marginBottom:isMobile?"3%": "2%",
          }}
        >
          <div className="col-12 col-sm-6 col-lg-4">
            <h4 className="pb-2" style={HeadingStyle}>
              Additional Charges
            </h4>

            <RadioInput
              formData={formData}
              setFormData={setFormData}
              label_value="fuel_and_mooring_fees"
              label="Fuel and mooring fees/per day"
              obj={"additionalCharges"}
            />
            <RadioInput
              formData={formData}
              setFormData={setFormData}
              label_value="different_marina_fee"
              label="Different marina fee"
              obj={"additionalCharges"}
            />
            <RadioInput
              formData={formData}
              setFormData={setFormData}
              label_value="allowance_fee"
              label="Allowance fee"
              obj={"additionalCharges"}
            />
          </div>
          {isMobile ? (
            <>
              {" "}
              <hr style={hrStyle} />
            </>
          ) : (
            <>
              {" "}
              {/* <hr className="mt-3 mb-3" style={{ width: "85%" }} /> */}
            </>
          )}
          <div className=" col-sm-6 col-lg-4">
            <h4 className="pb-2" style={HeadingStyle}>
              Optional Charges
            </h4>
            <RadioInput
              formData={formData}
              setFormData={setFormData}
              label_value="cleaning_fee"
              label="Cleaning fee"
              obj={"optionalCharges"}
            />
            <RadioInput
              formData={formData}
              setFormData={setFormData}
              label_value="gratuity"
              label="Gratuity"
              obj={"optionalCharges"}
            />
            <RadioInput
              formData={formData}
              setFormData={setFormData}
              label_value="security_deposit"
              label="Security deposit"
              obj={"optionalCharges"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
