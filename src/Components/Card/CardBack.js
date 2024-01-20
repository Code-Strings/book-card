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
          src="https://cdn-icons-png.flaticon.com/128/3145/3145497.png"
          style={{ width: "30%" ,margin:"20px"}}
          alt="book image"
        />
        <Card.Body>
          <a className="link" href={props.data.link}>{props.data.link}</a>
          <h6>
            Author: {props.data.author}
          </h6>
          <h6>
            Country of Origin: {props.data.country}
          </h6>
          <button className="custom-button" onClick={props.handleFlip}>Back</button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardBack;
