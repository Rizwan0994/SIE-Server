
import React from "react";
import Button from "react-bootstrap/Button";

const buttonStyle = {
  color: "#00BFFF",
  borderColor: "#00BFFF",
  
};


function BorderRadiusButton(props) {
  return (
    <div>
      {" "}
      <Button variant="outline rounded-pill roundpillhoverprop" style={ buttonStyle }>
        {props.name}
      </Button>
    </div>
  );
}

export default BorderRadiusButton;
