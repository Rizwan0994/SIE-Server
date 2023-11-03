import React from 'react'
import Button from "react-bootstrap/Button";

const buttonStyle={
    backgroundColor:"#00BFFF",
    borderStyle:"none"
}

function RoundedFilledButton(props) {
  return (
    <div>
      <Button
        variant="primary rounded-pill"
        style={{
          fontWeight: props.fontWeight,
          color: props.color,
          backgroundColor: props.backgroundColor,
          borderStyle: "none",
        }}
        onClick={props.buttonClick}
      >
        {props.name}
      </Button>
    </div>
  );
}

export default RoundedFilledButton;