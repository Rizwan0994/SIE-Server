import React from "react";
import Button from "react-bootstrap/Button";


function RedCardButton(props) {
  return (
    <div>
      {" "}
      <Button
        variant="primary shadow"
        style={{
          backgroundColor: "#FF7F50",
          color: "#FFFFFF",
          borderColor: "#FFFFFF",
          width:"100%",
          fontSize:"1em"
        }}
      >
        {props.name}
      </Button>
    </div>
  );
}

export default RedCardButton;
