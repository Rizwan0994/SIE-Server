import Card from "react-bootstrap/Card";
import '../global.css'
import { useMediaQuery } from "react-responsive";



 const CardImage = {
  width: "67%",
  
  marginRight: "auto",
  marginLeft: "auto",
};

const CardTitle={
    fontWeight:"700",
    paddingTop:"4%",
    fontSize:"1.4em"
    
}


function FeatureWorks(props) {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const CardText = {
    textAlign: "center",
    width: "17rem",
    fontFamily: "Open Sans",
    borderStyle: "none",
    marginLeft: isMobile ? "auto" : "",
    marginRight: isMobile ? "auto" : "",
  };
  return (
    <Card style={CardText}>
      <Card.Img variant="top" src={props.imageSource} style={CardImage} />
      <Card.Body>
        <Card.Title className="font-opensense" style={CardTitle}>
          {props.title}
        </Card.Title>
        <Card.Text className="font-opensense"> {props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FeatureWorks;
