import React from 'react'
import img from '../../../images/bluecard.svg'
import RoundedFilledButton from '../../UI/RoundedFilledButton/RoundedFilledButton';

const container = {
    height:"50%",
    width:"80vw",
    minHeight:"450px",
       minWidth:"1200px",
       maxWidth:"",
  backgroundColor: "#0066FF",
  marginBottom:"4%"
}; 
function BlueContainer() {
  return (
    <div style={{backgroundColor:"#0066FF"}}>
    <div className="container-fluid" style={container}>
      <div className="row  justify-content-center align-items-center p-3">
        <div className="col-3">
          <h3
            style={{
              textAlign: "left",
              color: "white",
              fontFamily: "Playfair Display",
              fontSize: "28px",
            }}
          >
            Are you a boat owner?
          </h3>
          <p
            style={{
              fontFamily: "Open Sans",
              textAlign: "left",
              color: "white",
              fontFamily: "Open Sans",
              fontSize: "16px",
            }}
          >
            Text about what Sail it Easy offers to owners and mention the
            competitive advantage. Text about what Sail it Easy offers to owners
            and mention the competitive advantage.
          </p>
          <h3
            style={{
              textAlign: "left",
              color: "white",
              fontFamily: "Open Sans",
              fontSize: "1.4em",
            }}
          >
            Sounds interesting?
          </h3>
          <p
            style={{
              textAlign: "left",
              color: "white",
              fontFamily: "Open Sans",
              fontSize: "0.9em",
            }}
          >
            Learn more about our growth tools.
          </p>
          <RoundedFilledButton
            // style={{ color: "#0066FF", fontSize: "16px" }}
            fontWeight={"700"}
            backgroundColor={"#FFEE58"}
            name={"Show me"}
            color={"#0066FF"}
          />
        </div>
        <div className="col-5" style={{ marginBottom: "-8%", marginLeft:"10%" }}>
          <div style={{ marginTop: "18%" }}>
            <img
              src={img}
              //   className="img-fluid"
              alt="Your Image"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default BlueContainer