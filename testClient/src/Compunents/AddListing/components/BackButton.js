import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Button({ btntext,onPreviousStep }) {
  return (
    <>
      {" "}
      <button
      onClick={onPreviousStep}
        type="button"
        className="btn btn px-4"
        style={{
          backgroundColor: "white",
          color: "#999999",
          marginLeft: "1%",
          border:"#999999 solid 1px"
        }}
      >
       <FontAwesomeIcon style={{marginRight:"12px"}} icon={faChevronLeft} /> {btntext}
      </button>
    </>
  );
}
