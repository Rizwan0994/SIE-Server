import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"



function HowitWorks(props) {


  return (

    <div className="container mt-5" style={{
      color: "#333333"
    }}>
      <div className="col-12 text-center">
        <h2 className="mt-4" style={{
          fontSize: "20px",
          fontFamily: "Open Sans",
          fontWeight: "600",
        }}> {props.heading} </h2>
        <h1 style={{
          fontSize: "28px",
          fontFamily: "Playfair Display",
          fontWeight: "700",
        }}> {props.subheading} </h1>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-lg-3 col-md-5 col-sm-5 mr-3">
          <Card className="midCard" style={{ border: "0" }}>
            <img style={{
              width: "25%",
              height: "40%",
              margin: "0 auto",
            }} src={props.image1} className="card-icon d-flex justify-content-center" />
            <Card.Title className=" d-flex justify-content-center mt-3 mb-1"> <h1
              style={{
                fontSize: "20px",
                fontFamily: "Open Sans",
                fontWeight: "600",
              }}> {props.title1} </h1>  </Card.Title>
            <Card.Text className="d-flex justify-content-center">
              <p className=" d-flex justify-content-center" style={{
                fontSize: "16px",
                fontFamily: "Open Sans",
                fontWeight: "400",
                textAlign: "center",
                maxWidth: "85%"

              }}> {props.text1} </p>
            </Card.Text>
          </Card>
        </div>


        <div className="col-lg-3 col-md-5 col-sm-5 mr-3">
          <Card className="midCard" style={{ border: "0" }}>
            <img style={{
              width: "25%",
              height: "40%",
              margin: "0 auto",
            }} src={props.image2} className="card-icon  d-flex justify-content-center" />
            <Card.Title className=" d-flex justify-content-center mt-3 mb-1"> <h1
              style={{
                fontSize: "20px",
                fontFamily: "Open Sans",
                fontWeight: "600",
              }}> {props.title2} </h1>  </Card.Title>
            <Card.Text className="d-flex justify-content-center">
              <p className=" d-flex justify-content-center" style={{
                fontSize: "16px",
                fontFamily: "Open Sans",
                fontWeight: "400",
                textAlign: "center",
                maxWidth: "85%"

              }}> {props.text2} </p>
            </Card.Text>
          </Card>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-lg-3 col-md-5 col-sm-5 mr-3">
          <Card className="midCard" style={{ border: "0" }}>
            <img style={{
              width: "25%",
              height: "40%",
              margin: "0 auto",
            }} src={props.image3} className="card-icon  d-flex justify-content-center" />
            <Card.Title className=" d-flex justify-content-center mt-3 mb-1"> <h1
              style={{
                fontSize: "20px",
                fontFamily: "Open Sans",
                fontWeight: "600",
              }}> {props.title3} </h1>  </Card.Title>
            <Card.Text className="d-flex justify-content-center">
              <p className=" d-flex justify-content-center" style={{
                fontSize: "16px",
                fontFamily: "Open Sans",
                fontWeight: "400",
                textAlign: "center",
                maxWidth: "85%"

              }}> {props.text3} </p>
            </Card.Text>
          </Card>
        </div>


        <div className="col-lg-3 col-md-5 col-sm-5 mr-3">
          <Card className="midCard" style={{ border: "0" }}>
            <img style={{
              width: "25%",
              height: "40%",
              margin: "0 auto",
            }} src={props.image4} className="card-icon  d-flex justify-content-center" />
            <Card.Title className=" d-flex justify-content-center mt-3 mb-1" > <h1
              style={{
                fontSize: "20px",
                fontFamily: "Open Sans",
                fontWeight: "600",
              }}> {props.title4} </h1>  </Card.Title>
            <Card.Text className="d-flex justify-content-center">
              <p className=" d-flex justify-content-center" style={{
                fontSize: "16px",
                fontFamily: "Open Sans",
                fontWeight: "400",
                textAlign: "center",
                maxWidth: "85%"

              }}> {props.text4} </p>
            </Card.Text>
          </Card>
        </div>
      </div>
    </div>
  )
}


export default HowitWorks;




// import React from "react";
// import { Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";

// function HowitWorks(props) {
//   return (
//           <Card className="midCard" style={{ border: "0" }}>
//             <img
//               style={{
//                 width: "25%",
//                 height: "40%",
//                 margin: "0 auto",
//               }}
//               src={props.image1}
//               className="card-icon d-flex justify-content-center"
//             />
//             <Card.Title className=" d-flex justify-content-center mt-3 mb-1">
//               {" "}
//               <h1
//                 style={{
//                   fontSize: "20px",
//                   fontFamily: "Open Sans",
//                   fontWeight: "600",
//                 }}
//               >
//                 {" "}
//                 {props.title1}{" "}
//               </h1>{" "}
//             </Card.Title>
//             <Card.Text className="d-flex justify-content-center">
//               <p
//                 className=" d-flex justify-content-center"
//                 style={{
//                   fontSize: "16px",
//                   fontFamily: "Open Sans",
//                   fontWeight: "400",
//                   textAlign: "center",
//                   maxWidth: "85%",
//                 }}
//               >
//                 {" "}
//                 {props.text1}{" "}
//               </p>
//             </Card.Text>
//           </Card>
//   );
// }

// export default HowitWorks;