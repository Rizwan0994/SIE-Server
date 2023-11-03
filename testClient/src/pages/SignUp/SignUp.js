import axios from "axios";
import { useAlert } from "react-alert";
import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import MuiPhoneNumber from "material-ui-phone-number";

export default function SignUp() {
  const alert = useAlert();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phoneNo: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneNumberChange = (value) => {
    setFormData({ ...formData, phoneNo: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would perform validation on form data before sending it to the server

    axios
      .post("https://sie-server.onrender.com/api/users/register", formData)
      .then((response) => {
        // Handle success
        console.log("User registered:", response.data.message);
        alert.success(response.data.message);
        // Perform any additional actions (redirect, state update, etc.) upon successful registration
      })
      .catch((error) => {
        // Handle error
        console.error("Registration failed:", error);
        alert.error(error.response.data.message);
        // Perform error handling or display an error message to the user
      });
  };

  return (
    <div>
      <Container style={{ minWidth: "450px" }}>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            {/* <div className="border border-3 border-primary"></div> */}
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
                  Sign up with email
                </h2>
                {/* <div className="border border-1 border"></div>  */}
                <hr />
                <div className="mb-3 mt-md-4" style={{ padding: "5% 8%" }}>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="fname">
                        <Form.Control
                          name="fname"
                          type="text"
                          placeholder="First Name"
                          onChange={handleInputChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="lname">
                        <Form.Control
                          name="lname"
                          type="text"
                          placeholder="Last Name"
                          onChange={handleInputChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="email">
                        <Form.Control
                          name="email"
                          type="email"
                          placeholder="Email"
                          onChange={handleInputChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="password">
                        <Form.Control
                          name="password"
                          type="password"
                          placeholder="Password"
                          onChange={handleInputChange}
                        />
                      </Form.Group>

                      {/* Replacing the Phone Number input with MuiPhoneNumber */}
                      <MuiPhoneNumber
                        className="rounded"
                        style={{ width: "-webkit-fill-available" }}
                        defaultCountry={"us"}
                        onChange={handlePhoneNumberChange}
                      />

                     
                      <div className="d-grid">
                        <p
                          style={{ fontFamily: "Open Sans", fontWeight: "400" }}
                        >
                          By creating an account, you confirm that you are at
                          least 18 years old and you agree with our{" "}
                          <a style={{ color: "#00BFFF" }} href="">
                            Privacy Policy
                          </a>{" "}
                          and{" "}
                          <a style={{ color: "#00BFFF" }} href="">
                            Terms & Conditions
                          </a>
                        </p>
                        <Button
                          style={{
                            backgroundColor: "#BEBEBE",
                            color: "#FFFFFF",
                          }}
                          variant=""
                          type="submit"
                        >
                          Create Account
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
