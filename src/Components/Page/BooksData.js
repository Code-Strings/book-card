import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import "./BooksData.css";

export default function BooksData() {
  const [bookData, setData] = useState({});
  const [isLoading, setLoad] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json",
      )
      .then((res) => {
        setData(res.data);
        setLoad(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Page data={bookData} isLoading={isLoading} />
    </Container>
  );
}
