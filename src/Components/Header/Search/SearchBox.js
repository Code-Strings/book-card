import "./SearchBox.css";
import React, { useEffect, useState } from "react";
import SearchList from "./SearchList";
import useFetch from "../../CustomHooks/useFetch";
import { Col, Container, Row } from "react-bootstrap";

const SearchBox = (props) => {
  const { data } = useFetch();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  let string = "";

  const handleSearch = e => {
    setSearchTerm(e.target.value);
    if(e.target.value.length !==0)string="Enter the key word";
  };

  useEffect(() => {
    const results = data.filter(item =>
      //Searching card based on "title" and "author" for minimum of 1 entry
      item.title.toLowerCase().includes(searchTerm) || item.author.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, data]);

  return (
    <>
      <Container style={{display:"flex",justifyContent:"center",paddingTop:"40px"}} fluid>
        <Row>
          <Col>
            <input
              className="custom-input"
              type="text"
              placeholder="Search...."
              value={searchTerm}
              onChange={handleSearch}
            />
           <button type="submit" class="icon"></button>
          </Col>
        </Row>

      </Container>
      <p>{string}</p>
      <div>
       <SearchList items={searchResults} />
      </div>
    </>
  );
};
export default SearchBox;
