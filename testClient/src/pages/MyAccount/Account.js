import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Card } from "react-bootstrap";
import Header from "../../Compunents/Header/Header";
import Footer from '../../Compunents/HomeSections/Footer/Footer'

const UpdateUserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    current_password: "",
    image: null,
  });

  const [userId, setUserId] = useState(""); // You need to set the userId somehow
const [User, setUser] = useState({
  profile_picture: "",
  username: "",
  email: "",
});
 let accessToken = localStorage.getItem("accessToken");
  const fetchFavoriteStatus = async () => {
    
    try {
      const response = await axios.get("http://127.0.0.1:8000/profile/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      
      setUser(response.data);
        localStorage.setItem("owner",response.data.id);
       
        localStorage.setItem("pro_pic", response.data.profile_picture);
        localStorage.setItem("username",response.data.username);
      
    } catch (error) {
      console.error("Error fetching favorite status:", error);
    }
  };
console.log(User);



  useEffect(() => {
    fetchFavoriteStatus();

  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, image: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("username", formData.name);
      formDataToSend.append("email", formData.email);
       formDataToSend.append("current_password", formData.current_password);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("confirm_password", formData.confirm_password);
      formDataToSend.append("profile_picture", formData.image);

    
       const response = await axios.put(
         "http://127.0.0.1:8000/profile/",
         formDataToSend,
         {
           headers: {
             Authorization: `Bearer ${accessToken}`,
           },
         }
       );


      console.log("User profile updated:", response.data);
      // Reset the form after successful submission
      setFormData({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
  
        image: null,
      });
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };



  return (
    <div>
      <Header />

      <div className="row">
        <div className="col-5 m-4">
          <Card className="text-center shadow">
            <Card.Body>
              <div className="d-flex justify-content-center">
                <img
                  src={User.profile_picture} // Replace with the actual image URL
                  alt="Profile"
                  className="rounded-circle"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <Card.Title className="mt-3">{User.username}</Card.Title>
              <Card.Text>{User.email}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-center m-3">
            <Form
              onSubmit={handleSubmit}
              className="shadow p-4 rounded bg-light col-8"
            >
              {/* Form fields go here */}
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  required
                  rounded
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                  rounded
                />
              </Form.Group>

              <Form.Group controlId="current_password">
                <Form.Label>Current Password</Form.Label>
                <Form.Control
                  type="password"
                  name="current_password"
                  value={formData.current_password}
                  onChange={handleChange}
                  placeholder="Enter current password"
                  required
                  rounded
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                  rounded
                />
              </Form.Group>
              <Form.Group controlId="confirm_password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  required
                  rounded
                />
              </Form.Group>
              <Form.Group controlId="image">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  rounded
                />
              </Form.Group>
              <Button className="mt-2" type="submit" variant="primary">
                Update Profile
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default UpdateUserForm;
