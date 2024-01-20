import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
//import Test from "../Card/Test";
import useFetch from "../CustomHooks/useFetch";
import FlipCard from "../Card/Index";

function CardPage() {
  const { data } = useFetch();
  console.log("Check here data n Page: ", data)
  return (
    <>
      {data.map((item, index) =>
            <FlipCard BookData={item} key={`card-${index}`} />
      )}
    </>
  );
}

export default CardPage;
