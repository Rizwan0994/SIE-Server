import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
function BannerImages({boatData}) {
    const isMobile = useMediaQuery({ maxWidth: 576 });
const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
const contain = {
  // backgroundColor: "#ffffff",
  // height: "50vh",
  // width: "98.9vw",
  // minHeight: isMobile ? "550px" : isTablet ? "800px" : "750px",
  
  minWidth: isMobile ? "435px " : isTablet ? "700px " : "1200px ",
};
  return (
    <div>
      <Row>
        <Col
          sm={6}
          style={{
            backgroundImage: `url(${boatData.images[0].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "550px",
          }}
        ></Col>
        {isMobile ? (
          <div></div>
        ) : (
          <Col sm={6}>
            <Row>
              <Col sm={6} style={{ paddingRight: "0px" }}>
                <div className="d-flex flex-column h-100 justify-content-center">
                  <img
                    src={boatData.images[1].image}
                    alt="Image 2"
                    className="mb-3"
                    style={{ maxWidth: "100%", height: "267px" }}
                  />
                  <img
                    src={boatData.images[2].image}
                    alt="Image 3"
                    className=""
                    style={{ maxWidth: "100%", height: "267px" }}
                  />
                </div>
              </Col>
              <Col sm={6} style={{ paddingRight: "0px" }}>
                <div className="d-flex flex-column h-100 justify-content-center">
                  <img
                    src={boatData.images[3].image}
                    alt="Image 4"
                    className="mb-3"
                    style={{ maxWidth: "100%", height: "267px" }}
                  />
                  <img
                    src={boatData.images[4].image}
                    alt="Image 5"
                    style={{ maxWidth: "100%", height: "267px" }}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default BannerImages