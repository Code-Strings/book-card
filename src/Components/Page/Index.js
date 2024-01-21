import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FlipCard from "../Card/Index";

function CardPage(props) {
  console.log("Check here data n CardPage: ", props.data)
  return (
    <Container>
    <Row>
      {props.data.length>1 ? props.data.map((item, index) =>
        <Col>
          <FlipCard BookData={item} key={`card-${index}`} />
        </Col>
      ):<Col>
      <FlipCard BookData={props.data} key={`card-index`} />
    </Col>}
    </Row>
    </Container>
  );
}

export default CardPage;
