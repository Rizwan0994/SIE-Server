import React from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "react-phone-number-input/style.css";
import tick from "../../images/greentick.svg";
export default function LinkSent() {

  const Email = "zuzair00@gmail.com";
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
                  className="mb-3 align-content-center"
                  style={{ padding: "5% 12%" }}
                >
                  <center>
                    <img src={tick} alt=""  />
                    <h2 className="fw-bold mt-2  text-center mt-3 mb-4" style={{fontWeight:"600" ,fontFamily:"Open Sans",fontSize:"20px"}}>Reset link sent!</h2>
                  <p className="pb-5" style={{fontFamily:"Open Sans" ,fontWeight:"400" }}>Please open the link we sent to your email to complete reseting your password.</p>
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


