// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import axios from "axios";
// import Header from "../../Compunents/Header/Header";
// import Footer from '../../Compunents/HomeSections/Footer/Footer'
// const AddUserForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirm_password: "",
//     role: "",
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setFormData((prevData) => ({ ...prevData, image: file }));
//   };

//  const handleSubmit = async (e) => {
//    e.preventDefault();
//    try {
//      const formDataToSend = new FormData();
//      formDataToSend.append("username", formData.name);
//      formDataToSend.append("email", formData.email);
//      formDataToSend.append("password", formData.password);
//      formDataToSend.append("confirm_password", formData.confirm_password);
//      formDataToSend.append("user_type", formData.role);
//      formDataToSend.append("profile_picture", formData.image);
//      console.log(formData.role);
//      //http://192.168.18.77:8000/api/register/
//      const response = await axios.post(
//        "http://127.0.0.1:8000/api/register/",
//        formDataToSend,
//        {
//          headers: {
//            "Content-Type": "multipart/form-data",
//          },
//        }
//      );
//      console.log("User added:", response.data);
//  window.location = "/login";
//      // Reset the form after successful submission
//      setFormData({
//        name: "",
//        email: "",
//        password: "",
//        confirm_password: "",
//        role: "",
//        image: null,
//      });
//    } catch (error) {
//      console.error("Error adding user:", error);
//    }
//  };

//   return (
//     <div>
//       <Header />

//     </div>
//   );
// };

// export default AddUserForm;
// <div className="row  justify-content-center m-5">
//       <center>
//         {" "}
//         <h3>Create your account</h3>{" "}
//       </center>
//     </div>
//     <div className="d-flex justify-content-center m-5">
//       <Form
//         onSubmit={handleSubmit}
//         className="shadow p-4 rounded bg-light col-8"
//       >
//         <Form.Group controlId="name">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter name"
//             required
//             rounded
//           />
//         </Form.Group>

//         <Form.Group controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter email"
//             required
//             rounded
//           />
//         </Form.Group>

//         <Form.Group controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Enter password"
//             required
//             rounded
//           />
//         </Form.Group>
//         <Form.Group controlId="confirm_password">
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control
//             type="password"
//             name="confirm_password"
//             value={formData.confirm_password}
//             onChange={handleChange}
//             placeholder="Confirm password"
//             required
//             rounded
//           />
//         </Form.Group>

//         <Form.Group controlId="role">
//           <Form.Label>Role</Form.Label>
//           <Form.Control
//             as="select"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             required
//             rounded
//           >
//             <option value="">Select role</option>
//             <option value="boatowner">Owner</option>
//             <option value="visitor">Visitor</option>
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId="image">
//           <Form.Label>Image</Form.Label>
//           <Form.Control
//             type="file"
//             name="image"
//             onChange={handleImageChange}
//             rounded
//           />
//         </Form.Group>

//         <Button className="mt-2" type="submit" variant="" style={{color:"white",backgroundColor:"#00BFFF"}}>
//           Add User
//         </Button>
//       </Form>
//     </div>
//     <Footer />

import React from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "react-phone-number-input/style.css";


export default function ConformEmail() {
  const ResendMail = () => {
    console.log("resending mail");
  };
  const Email = "zuzair00@gmail.com";
  const paraText = `Please click on the link we sent to <span style="color: #00BFFF">${Email}</span> to verify your email and you are ready to book your next adventure!`;

  return (
    <div>
      <Container style={{ minWidth: "450px" }}>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body className="p-0">
                <h2
                  className="fw-bold mb-2  text-center mt-3"
                  style={{
                    fontWeight: "600",
                    fontFamily: "Open Sans",
                    fontSize: "20px",
                  }}
                >
                  Forgot your password?
                </h2>

                <hr />
                <div
                  className="mb-3 mt-md-4 align-content-center"
                  style={{ padding: "5% 12%" }}
                >
                  <center>
                    <p
                      className=""
                      style={{
                        fontFamily: "Open Sans",
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >
                      Enter the email address linked with your account and we
                      will send you a secure link to reset your password
                    </p>
                    <Form>
                      <Form.Group className="mb-3" controlId="Name">
                        {/* <Form.Label className="text-center">
                          Name
                        </Form.Label> */}
                        <Form.Control type="text" placeholder="Email" />
                      </Form.Group>
                      <Button
                        style={{
                          backgroundColor: "#BEBEBE",
                          color: "#FFFFFF",
                          width: "-webkit-fill-available",
                          marginBottom:"25%",
                        }}
                        variant=""
                        type="submit"
                      >
                        Send reset link
                      </Button>
                    </Form>
                  </center>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
