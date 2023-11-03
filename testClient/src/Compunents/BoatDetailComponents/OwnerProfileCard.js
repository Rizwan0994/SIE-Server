import React from 'react'
import { BsCheckCircle } from "react-icons/bs";
import ownerpic from '../../images/owner1.svg'

function OwnerProfileCard({ Boatowner }) {



  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="d-flex col-2">
          <img
            src={ownerpic}
            width="100%"
            className="rounded-circle avatar"
            alt="Avatar"
          />
        </div>

        <div className="col-2 " style={{ paddingLeft: "5px" }}>
          <div className="d-grid ">
            <p style={{ marginBottom: "0" }}>OWNER</p>
            <strong>{Boatowner.username} </strong>
          </div>
        </div>

        <div className=" col-8 d-grid justify-content-end">
          <span className="verified-account">
            {" "}
            <BsCheckCircle color="#00BFFF" /> Verified Account
          </span>

          <p className="ratings" style={{ marginBottom: "0" }}>
            {" "}
            <span
              style={{ marginBottom: "0", color: "#00BFFF" }}
              className="star-icon"
            >
              &#9733;
            </span>{" "}
            {Boatowner.user_rating?.toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OwnerProfileCard