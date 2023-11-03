import Card from "react-bootstrap/Card";
import { useMediaQuery } from "react-responsive";

function FavouriteDestination(props) {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
  return (
    <Card
      style={{
        backgroundImage: `url(${props.image})`,
        height:isMobile? "95%":"100%",
        width: isMobile? "100%": "90%",
        backgroundSize: "cover",
        borderRadius:isMobile?"5px": "25px",
        borderStyle: "none",
        position: "relative",
      }}
    >
      <div
        className="shaded-area"
        style={{
          content: "",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "50%",
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
          borderRadius: isMobile?"5px": "25px",
        }}
      ></div>

      <div className="card-body">
        <h5
          className="card-title name"
          style={{
            textAlign: "left",
            position: "relative",
            top: "70%",
            color: "white",
            zIndex: 1,
            fontFamily: "Playfair Display",
            fontSize: "1.9em",
          }}
        >
          {props.title}
        </h5>
        <p
          className="card-text"
          style={{
            textAlign: "left",
            position: "relative",
            top: "70%",
            color: "white",
            zIndex: 1,
            fontFamily: "Open Sans",
            fontSize: "1.0em",
          }}
        >
          {props.description}
        </p>
      </div>
    </Card>
  );
}

export default FavouriteDestination;


















 // <Card style={{ width: "18rem" }}>
    //   <div class="col-md-12">
    //     <div class="featured-carousel owl-carousel">
    //       <div class="item">
    //         <div class="work">
    //           <div
    //             class="img d-flex align-items-end justify-content-center"
    //             style={{
    //               backgroundImage: `url(${props.image})`,
    //               // Other styles can be added here
    //             }}
    //           >
    //             <div class="text w-100">
    //               <span class="cat">{props.title}</span>
    //               <p>
    //               {props.description} 
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Card>
