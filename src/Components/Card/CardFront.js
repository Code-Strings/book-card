/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Card.css";

function CardFront(props) {
  return (
    <div className="flip-card-front" >
      <Card >
        <Card.Img
          variant="top"
          src="https://cdn-icons-png.flaticon.com/512/4072/4072131.png" 
          style={{ width: "30%", margin: "20px",color:"white"}}
          alt="book image"
        />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>
            Published Year: {props.data.year}
          </Card.Text>
          <button className="custom-button button" onClick={props.handleFlip}>Book Info</button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardFront;
