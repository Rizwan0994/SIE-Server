import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Header from '../../Compunents/Header/Header'

import { useAlert } from "react-alert";

const initialValues = {
  name: "",
  location: "",
  capacity: "",
  size: "",
  power: "",
  control: "",
  brand: "",
  price: "",
  ratings: 0,
  additionalServices: {
    captain: { checked: false, price: 0 },
    chef: { checked: false, price: 0 },
    kayak: { checked: false, price: 0 },
    safetyNet: { checked: false, price: 0 },
    extraBedding: { checked: false, price: 0 },
  },
  year: "",
  fuel: "",
  brandEngine: "",
  model: "",
  typeOfUse: "",
  owner: "",
};


const BoatForm = () => {
  const [newBoat, setNewBoat] = useState(initialValues);
  const [images, setImages] = useState([]);
  const [boats, setBoats] = useState([]);
  const alert = useAlert();
   const imageInputRef = useRef(null);
  
 let [amenitie, setAmenities] = useState({
   shower: { checked: false, quantity: 0 },
   bed: { checked: false, quantity: 0 },
   airConditioning: { checked: false, quantity: 0 },
   soundDeck: { checked: false, quantity: 0 },
   swimLadder: { checked: false, quantity: 0 },
   wakeboard: { checked: false, quantity: 0 },
   lifeJacket: { checked: false, quantity: 0 },
   galleyStoveOven: { checked: false, quantity: 0 },
   stereo: { checked: false, quantity: 0 },
 });


  useEffect(() => {
    fetchBoats();
  }, []);

  const fetchBoats = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await axios.get(
        "http://127.0.0.1:8000/api/boats/",
        config
      );
      setBoats(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setNewBoat((prevBoat) => ({
      ...prevBoat,
      additionalServices: {
        ...prevBoat.additionalServices,
        [name]: {
          ...prevBoat.additionalServices[name],
          checked,
        },
      },
    }));
  };
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const serviceName = name.substring(0, name.length - 5); // Remove "Price" from the name
    setNewBoat((prevBoat) => ({
      ...prevBoat,
      additionalServices: {
        ...prevBoat.additionalServices,
        [serviceName]: {
          ...prevBoat.additionalServices[serviceName],
          price: value,
        },
      },
    }));
  };

  const handleImageChange = (e) => {
    setImages(e.target.files);
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBoat((prevBoat) => ({
      ...prevBoat,
      [name]: value,
    }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", newBoat.name);
      formData.append("location", newBoat.location);
      formData.append("capacity", newBoat.capacity);
      formData.append("size", newBoat.size);
      formData.append("power", newBoat.power);
      formData.append("control", newBoat.control);
      formData.append("brand", newBoat.brand);
      formData.append("price", newBoat.price);
      // formData.append("ratings", newBoat.ratings);
      formData.append("year", newBoat.year);
      formData.append("fuel", newBoat.fuel);
      formData.append("brandEngine", newBoat.brandEngine);
      formData.append("model", newBoat.model);
      formData.append("typeOfUse", newBoat.typeOfUse);
      formData.append("owner", localStorage.getItem("owner"));
      // Append additional services with their prices if checked
console.log("new amenities" + amenitie);


      const additionalServices = {};
      for (const [key, value] of Object.entries(newBoat.additionalServices)) {
        additionalServices[key] = {
          checked: value.checked,
          price: value.price,
        };
      }
      //  formData.additionalServices = additionalServices;
      formData.append(
        "additionalServices",
        JSON.stringify(newBoat.additionalServices)
      );
  
     formData.append("amenities", JSON.stringify(amenitie));
       formData.amenities = amenitie;

      // Append images
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
      const accessToken = localStorage.getItem("accessToken");
      await axios.post("http://127.0.0.1:8000/api/boats/", formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      });

       alert.show("Boat successfully added!", {
         type: "success",
         timeout: 3000, 
       });
      setNewBoat(initialValues);
       if (imageInputRef.current) {
         imageInputRef.current.value = ""; 
       }
      const formElement = document.getElementById("image-input"); 
      // window.location = `/listing`
      formElement.reset();
    } catch (error) {
      console.error(error);
    }
  };

  


 const handleAmenityCheckboxChange = (amenity) => {
   setAmenities((prevAmenities) => ({
     ...prevAmenities,
     [amenity]: {
       ...prevAmenities[amenity],
       checked: !prevAmenities[amenity].checked,
     },
   }));
 };

 const handleAmenityQuantityChange = (amenity, quantity) => {
   setAmenities((prevAmenities) => ({
     ...prevAmenities,
     [amenity]: {
       ...prevAmenities[amenity],
       quantity: parseInt(quantity),
     },
   }));
 };



  return (
    <div>
      <Header />
      <div className="container">
        <form onSubmit={handleCreate} className="m-3 p-3 border rounded">
          <div className="row">
            <div className="col-6">
              {" "}
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={newBoat.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  value={newBoat.location}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-6">
              {" "}
              <div className="mb-3">
                <label className="form-label">Capacity</label>
                <input
                  type="text"
                  className="form-control"
                  name="capacity"
                  value={newBoat.capacity}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Size</label>
                <input
                  type="text"
                  className="form-control"
                  name="size"
                  value={newBoat.size}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              {" "}
              <div className="mb-3">
                <label className="form-label">Power</label>
                <input
                  type="text"
                  className="form-control"
                  name="power"
                  value={newBoat.power}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Control</label>
                <input
                  type="text"
                  className="form-control"
                  name="control"
                  value={newBoat.control}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-6">
              {" "}
              <div className="mb-3">
                <label className="form-label">Brand</label>
                <input
                  type="text"
                  className="form-control"
                  name="brand"
                  value={newBoat.brand}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  value={newBoat.price}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              {" "}
              <div className="mb-3">
                <label className="form-label">Additional Services</label>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="captain"
                    checked={newBoat.additionalServices.captain.checked}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label">Captain</label>
                  {newBoat.additionalServices.captain.checked && (
                    <input
                      type="number"
                      className="form-control"
                      name="captainPrice"
                      value={newBoat.additionalServices.captain.price}
                      onChange={handlePriceChange}
                      required
                    />
                  )}
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="chef"
                    checked={newBoat.additionalServices.chef.checked}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label">Chef</label>
                  {newBoat.additionalServices.chef.checked && (
                    <input
                      type="text"
                      className="form-control"
                      name="chefPrice"
                      value={newBoat.additionalServices.chef.price}
                      onChange={handlePriceChange}
                      required
                    />
                  )}
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="kayak"
                    checked={newBoat.additionalServices.kayak.checked}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label">Kayak</label>
                  {newBoat.additionalServices.kayak.checked && (
                    <input
                      type="number"
                      className="form-control"
                      name="kayakPrice"
                      value={newBoat.additionalServices.kayak.price}
                      onChange={handlePriceChange}
                      required
                    />
                  )}
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="safetyNet"
                    checked={newBoat.additionalServices.safetyNet.checked}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label">Safety Net</label>
                  {newBoat.additionalServices.safetyNet.checked && (
                    <input
                      type="number"
                      className="form-control"
                      name="safetyNetPrice"
                      value={newBoat.additionalServices.safetyNet.price}
                      onChange={handlePriceChange}
                      required
                    />
                  )}
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="extraBedding"
                    checked={newBoat.additionalServices.extraBedding.checked}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label">Extra Bedding</label>
                  {newBoat.additionalServices.extraBedding.checked && (
                    <input
                      type="number"
                      className="form-control"
                      name="extraBeddingPrice"
                      value={newBoat.additionalServices.extraBedding.price}
                      onChange={handlePriceChange}
                      required
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="col-6">
              {" "}
              <div className="mb-3">
                <label className="form-label">Year</label>
                <input
                  type="text"
                  className="form-control"
                  name="year"
                  value={newBoat.year}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Fuel</label>
                <input
                  type="text"
                  className="form-control"
                  name="fuel"
                  value={newBoat.fuel}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              {" "}
              <div className="mb-3">
                <label className="form-label">Brand Engine</label>
                <input
                  type="text"
                  className="form-control"
                  name="brandEngine"
                  value={newBoat.brandEngine}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Model</label>
                <input
                  type="text"
                  className="form-control"
                  name="model"
                  value={newBoat.model}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label className="form-label">Type of Use</label>
                <input
                  type="text"
                  className="form-control"
                  name="typeOfUse"
                  value={newBoat.typeOfUse}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Add other amenity fields similarly */}
          <h5>Amenities</h5>
          {Object.keys(amenitie).map((amenity) => (
            <div key={amenity} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={amenitie[amenity].checked}
                onChange={() => handleAmenityCheckboxChange(amenity)}
              />
              <label className="form-check-label">{amenity}</label>
              {amenitie[amenity].checked && (
                <input
                  className="form-control mt-2"
                  type="number"
                  value={amenitie[amenity].quantity}
                  onChange={(e) =>
                    handleAmenityQuantityChange(amenity, e.target.value)
                  }
                />
              )}
            </div>
          ))}
          {/* Add other amenity fields similarly */}
          <div className="mb-3">
            <input
              type="file"
              className="form-control mb-2"
              name="images"
              id="image-input"
              onChange={handleImageChange}
              ref={imageInputRef}
              multiple
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Boat
          </button>
        </form>
      </div>
    </div>
  );
};

export default BoatForm;
