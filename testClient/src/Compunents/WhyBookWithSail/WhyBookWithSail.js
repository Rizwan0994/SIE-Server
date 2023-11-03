import React from 'react'
import Card from "react-bootstrap/Card";
import "../global.css";
import { useMediaQuery } from "react-responsive";




function WhyBookWithSail(props) {
  
  const isMobile = useMediaQuery({ maxWidth: 576 });
const CardText = {
  //   textAlign: "center",
  width: isMobile?"23rem": "17rem",
  fontFamily: "Open Sans",
  borderStyle: "none",

};

const CardImage = {
  width: "36%",
  height: "50px",
  marginLeft: isMobile ? "auto" : "",
  marginRight: isMobile ? "auto" : "",
};

const CardTitle = {
  fontWeight: "700",
  paddingTop: "4%",
  fontSize: "1.4em",
};

  return (
    <Card style={CardText}>
      <Card.Img variant="top" src={props.image} style={CardImage} />
      <Card.Body style={{ paddingLeft: "0px" }}>
        <Card.Title
          className={` ${
            isMobile ? "text-center font-opensense" : "font-opensense"
          }`}
          style={CardTitle}
        >
          {props.title}
        </Card.Title>
        <Card.Text
          className={` ${
            isMobile ? "text-center font-opensense" : "font-opensense"
          }`}
        >
          {" "}
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WhyBookWithSail