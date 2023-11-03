import './detail.css'

const Features = (props) => {
    return (
      <div className="">
        <div className="location" style={{ display: "flex" }}>
          <>
            <div className="img-line">
              <img src={props.image} className="location-icon" alt="location" />
              {props.heading == "See you next time!" ? (
                ""
              ) : (
                <span className="verticle-line"></span>
              )}
            </div>
            <div className="content">
              <h5>{props.heading}</h5>
              <p>{props.para}</p>
              {props?.CheckInTime ? (
                <p className="set-font-size-15">
                  CHECK IN TIME: &nbsp;
                  <span className="" style={{ color: "#00BFFF" }}>
                    <b>{props.CheckInTime}</b>
                  </span>
                </p>
              ) : (
                ""
              )}
              {props?.CheckOutTime ? (
                <p className="set-font-size-15">
                  CHECK OUT TIME: &nbsp;
                  <span className="" style={{ color: "#00BFFF" }}>
                    <b>{props.CheckOutTime}</b>
                  </span>
                </p>
              ) : (
                ""
              )}
            </div>
          </>
        </div>
      </div>
    );
}

export default Features;