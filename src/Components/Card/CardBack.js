/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./Card.css";

function CardBack(props) {
  return (
    <div className="flip-card-back">
      <Card  >
        <Card.Img
          variant="top"
          src="https://cdn-icons-png.flaticon.com/512/4072/4072307.png"
          style={{ width: "30%" ,margin:"20px"}}
          alt="book image"
        />
        <Card.Body>
          <Card.Title>Book Details</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </Card.Text>
          <button className="custom-button" onClick={props.handleFlip}>Back</button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardBack;
