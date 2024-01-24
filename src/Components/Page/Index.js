import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FlipCard from "../Card/Index";

function CardPage(props) {
  return (
    <Container>
    <Row>
      {props.data.length>0 ? props.data.map((item, index) =>
        <Col>
          <FlipCard BookData={item} key={`card-${index}`} />
        </Col>
      ):<h4>No Such Books found! </h4>}
    </Row>
    </Container>
  );
}

export default CardPage;
