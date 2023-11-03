import React from "react"
import { useMediaQuery } from "react-responsive";

function FAQ(props) {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
    return (
      <div
        className="faq container-fluid mt-3"
        style={{
          backgroundColor: "#F5F5F5",
          paddingTop: "2%",
        }}
      >
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-12 d-flex justify-content-center">
            <h1
              style={{
                fontFamily: "Playfair Display",
                fontWeight: "700",
                fontSize: "28px",
                color: "#000000",
              }}
            >
              {" "}
              {props.heading}{" "}
            </h1>
          </div>
        </div>

        <div className="row justify-content-sm-start justify-content-md-center  mt-4 p-3 p-sm-3">
          <div className="col-lg-3 col-md-5 col-sm-10">
            <h5
              style={{
                fontFamily: "Open Sans",
                fontWeight: "600",
                fontSize: "20px",
                color: "#000000",
              }}
            >
              {" "}
              {props.title1}{" "}
            </h5>

            <p
              style={{
                fontFamily: "Open Sans",
                fontWeight: "400",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              {props.content1}
            </p>
          </div>

          <div className="col-lg-3 col-md-5 col-sm-10">
            <h5
              style={{
                fontFamily: "Open Sans",
                fontWeight: "600",
                fontSize: "20px",
                color: "#000000",
              }}
            >
              {" "}
              {props.title1}{" "}
            </h5>
            <p
              className="text-justify"
              style={{
                fontFamily: "Open Sans",
                fontWeight: "400",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              {props.content1}
            </p>
          </div>
        </div>

        <div className="row justify-content-sm-start justify-content-md-center p-3 p-sm-3">
          <div className="col-lg-3 col-md-5 col-sm-10">
            <h5
              style={{
                fontFamily: "Open Sans",
                fontWeight: "600",
                fontSize: "20px",
                color: "#000000",
              }}
            >
              {" "}
              {props.title2}{" "}
            </h5>
            <p
              style={{
                fontFamily: "Open Sans",
                fontWeight: "400",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              {props.content2}
            </p>
          </div>

          <div className="col-lg-3 col-md-5 col-sm-10">
            <h5
              style={{
                fontFamily: "Open Sans",
                fontWeight: "600",
                fontSize: "20px",
                color: "#000000",
              }}
            >
              {" "}
              {props.title2}{" "}
            </h5>
            <p
              style={{
                fontFamily: "Open Sans",
                fontWeight: "400",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              {props.content2}
            </p>
          </div>
        </div>

        <div className="row mt-4 d-flex justify-content-center">
          <div className="col-12 justify-content-center">
            <h2
              style={{
                fontWeight: "600",
                fontFamily: "Open Sans",
                fontSize: "20px",
                color: "#000000",
                textAlign: "center",
              }}
            >
              {" "}
              Still have a question?{" "}
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "#00BFFF",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              <a
                style={{
                  color: "#00BFFF",
                }}
                href="#"
              >
                Find all answers you need here
              </a>
            </p>
          </div>
        </div>
      </div>
    );
}


export default FAQ;