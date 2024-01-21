/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
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
          <a className="link" href={props.data.link}>{props.data.title}</a>
          <p className="mb-0">
            Author: {props.data.author}
          </p>
          <p className="mb-0">
            Country of Origin: {props.data.country}
          </p>
          <p>
            Language: {props.data.language}
          </p>
          <button className="custom-button button" onClick={props.handleFlip}>Back</button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardBack;
