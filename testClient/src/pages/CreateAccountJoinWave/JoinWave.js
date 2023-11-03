import { GoogleLogin } from "react-google-login";

import { LoginSocialFacebook } from "reactjs-social-login";
import React from "react";
import { Link } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import fbicon from "../../images/fbicon.svg";
import googleicon from "../../images/googleicon.svg";
import "react-phone-number-input/style.css";
import tick from "../../images/greentick.svg";
export default function JoinWave() {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle the Google login response here
  };

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
                  Create account
                </h2>

                <hr />

                <div
                  className="mb-2 align-content-center"
                  style={{ padding: "5% 12%" }}
                >
                  <center>
                    <h2
                      className="fw-bold mt-4  text-center mb-5"
                      style={{
                        fontWeight: "600",
                        fontFamily: "Playfair Display",
                        fontSize: "36px",
                      }}
                    >
                      Join the wave!
                    </h2>
                    <Link to="/signup">
                      <Button
                        className="mb-3"
                        style={{
                          backgroundColor: "#00BFFF",
                          color: "#FFFFFF",
                          width: "-webkit-fill-available",
                        }}
                        variant=""
                        type="submit"
                      >
                        Sign up with email
                      </Button>
                    </Link>
                    <span className="d-flex justify-content-around align-items-center">
                      <hr style={{ width: "40%" }} />
                      OR
                      <hr style={{ width: "40%" }} />
                    </span>

                    <LoginSocialFacebook
                      appId="391961612190816"
                      onResolve={(response) => {
                        console.log(response);
                      }}
                      onReject={(error) => {
                        console.log(error);
                      }}
                    >
                      <button
                        className="mt-4 mb-4"
                        style={{
                          backgroundColor: "#FFFFFF",
                          color: "#666666",
                          width: "-webkit-fill-available",
                          borderStyle: "solid",
                          borderWidth: "1px",
                          borderColor: "#BEBEBE",
                          borderRadius: "10px",
                        }}
                      >
                        {" "}
                        <img src={fbicon} alt="" /> Continue with Facebook
                      </button>
                    </LoginSocialFacebook>

                    <GoogleLogin
                      clientId="704993920931-fabqceknntid8c9uge6mgupu1p3r9mjj.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <button
                          style={{
                            backgroundColor: "#FFFFFF",
                            color: "#666666",
                            width: "-webkit-fill-available",
                            borderStyle: "solid", // Set to "solid" for a solid border
                            borderWidth: "1px", // Set the desired border width
                            borderColor: "#BEBEBE",
                            borderRadius: "10px",
                          }}
                        >
                          {" "}
                          <img src={googleicon} alt="" /> Continue with Google
                        </button>
                      )}
                      buttonText="Login"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />

                    <p
                      className="mt-3 mb-3"
                      style={{
                        fontFamily: "Open Sans",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      Do you have an account?{" "}
                      <Link style={{ color: "#00BFFF" }} to="/login">
                        {" "}
                        Login
                      </Link>
                    </p>
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
