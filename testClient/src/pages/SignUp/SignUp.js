import React from "react";
import { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import MuiPhoneNumber from "material-ui-phone-number";

export default function SignUp() {
  const [value, setValue] = useState();

  const handleOnChange = (value) => {
    console.log(value);
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
                    <Form>
                      <Form.Group className="mb-3" controlId="Name">
                        {/* <Form.Label className="text-center">
                          Name
                        </Form.Label> */}
                        <Form.Control type="text" placeholder="Enter Name" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label className="text-center">
                          Email address
                        </Form.Label> */}
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        {/* <Form.Label>Confirm Password</Form.Label> */}
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      {/* <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/> */}
                      <MuiPhoneNumber
                        className="rounded"
                        style={{ width: "-webkit-fill-available" }}
                        defaultCountry={"us"}
                        onChange={handleOnChange}
                      />

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
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
