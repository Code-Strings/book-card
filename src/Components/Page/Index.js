import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
//import Test from "../Card/Test";
import Card from "../Card/Index";

function Page() {
  return (
    <Container fluid>
      <Row className="mb-5">
        <Col>
          <Card />
        </Col>
        <Col>
          <Card />
        </Col>
        <Col>
          <Card />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <Card />
        </Col>
        <Col>
          <Card />
        </Col>
        <Col>
          <Card />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <Card />
        </Col>
        <Col>
          <Card />
        </Col>
        <Col>
          <Card />
        </Col>
      </Row>
    </Container>
  );
}

export default Page;
