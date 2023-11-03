import React, { useState } from "react";
import imgicon from "../svgs/img_icon.svg";
import step5 from "../svgs/step5.svg";
import { useMediaQuery } from "react-responsive";
import Step5mb from "../svgs/step4mb.svg";

export default function Step6({ formData, setFormData ,selectedImages,setSelectedImages }) {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isExtended = useMediaQuery({ minWidth: 1600 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 990 });
  const islaptop_isTablet = useMediaQuery({ minWidth: 577, maxWidth: 990 });
  const isDesktop = useMediaQuery({ minWidth: 990 });
  const container = {
    height: "85vh",
    padding: isMobile ? "5%" : isTablet ? "3%" : "",
  };
  const HeadingStyle = {
    fontSize: "20px",
    fontWeight: "600",
    fontFamily: "Open Sans",
    paddingBottom: isTablet ? "2%" : "",
  };

  const textStyle = {
    fontSize: "16px",
    fontWeight: "400",
    fontFamily: "Open Sans",
    // paddingBottom:isTablet?"2%":""
    marginTop: isMobile ? "" : isTablet ? "4%" : "5%",
  };

  // const handleFileChange = (event) => {
  //   const selectedFile = event.target.files[0];

  //   if (selectedFile) {
  //     console.log("Selected file:", selectedFile.name);
  //   }
  // };

  const [images, setImages] = useState([]);

  // const handleFileChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   if (files.length + images.length <= 32) {
  //     // Check if the total number of images is within the limit (32 in this case)
  //     setImages([...images, ...files]);
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       photos: images,
  //     }));

  //   } else {
  //     alert('You can only upload a maximum of 32 images.');
  //   }
  // };

  const handleFileChange = (e) => {
    const formData = new FormData();

    // Assuming you're updating 'photos' in the 'formData' state
    images.forEach((image, index) => {
      formData.append(`photo${index}`, image);
    });

    const files = Array.from(e.target.files);
    if (files.length + images.length <= 32) {
      setImages([...images, ...files]);

      // Here you can update the form data with the new images using FormData
      files.forEach((file, index) => {
        formData.append(`photo${images.length + index}`, file);
      });

      setFormData((prevData) => ({
        ...prevData,
        Images: formData,
      }));
    } else {
      alert("You can only upload a maximum of 32 images.");
    }
  };

  // const handleFileChange = (event) => {
  //   const files = event.target.files;
  //   let updatedPhotos = [];

  //   // Limit the selection to 32 photos
  //   for (let i = 0; i < Math.min(files.length, 32); i++) {
  //     updatedPhotos.push(URL.createObjectURL(files[i])); // Push the file path to the array
  //   }

  // };
 

  const handleImageChange = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      // Converting FileList to an array
      const selected = Array.from(files).slice(0, 32); // Limiting selection to 32 images

      // Update state to include the newly selected images
      setSelectedImages([...selectedImages, ...selected]);
      setFormData((prevData) => ({
        ...prevData,
        photos: selectedImages,
      }));
      console.log(formData);
      console.log(selectedImages);
    }
  };
  console.log(formData);
  console.log(selectedImages);

  return (
    <div style={container}>
      <div
        className="row justify-content-center"
        style={{ marginBottom: "2%" }}
      >
        <div
          className="col-12 col-sm-12  col-lg-9 "
          style={{ marginTop: "3%", padding: "0px" }}
        >
          <img src={isMobile ? Step5mb : step5} width="100%" alt="" />
        </div>
      </div>

      <div className="row">
        <div
          className="col-12 col-sm-10 col-lg-10 col-xl-9 mt-sm-4"
          style={{
            padding: "0px",
            marginLeft: isTablet ? "5%" : "",
            paddingLeft: isLaptop ? "5%" : isDesktop ? "16%" : "",
          }}
        >
          <div className="col-12 col-sm-10 col-lg-9 justify-content-center">
            <h6 className="pb-2">
              <span style={HeadingStyle}>Upload photos </span>{" "}
              <span>(0/32)</span>
            </h6>

            <div
              className="card shadow"
              style={{
                width: isMobile
                  ? "100%"
                  : isTablet
                  ? "70%"
                  : isLaptop
                  ? "45%"
                  : "45%",
                borderStyle: "none",
                padding: isMobile
                  ? "8%"
                  : isTablet
                  ? "19%"
                  : isLaptop
                  ? "10%"
                  : "10%",
                alignItems: "center",
                marginTop: isMobile ? "5%" : "",
              }}
            >
              <img src={imgicon} alt="" />
              {isMobile ? (
                <></>
              ) : (
                <>
                  {" "}
                  <p className="text-center" style={textStyle}>
                    Drag and drop your pictures here or
                  </p>
                </>
              )}
              <label
                className=""
                style={{
                  cursor: "pointer",
                  color: "#00BFFF",
                  textDecoration: "underline",
                  marginTop: isMobile ? "2%" : "",
                }}
              >
                {isMobile ? (
                  <>Tap here to select your pictures</>
                ) : (
                  <> Select from your files</>
                )}
                <input
                  style={{ display: "none" }}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
