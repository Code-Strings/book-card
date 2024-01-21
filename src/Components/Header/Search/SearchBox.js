import "./SearchBox.css";
import React, { useState } from "react";
import SearchList from "./SearchList";
const SearchBox = (props) => {
  const [filterValue, setFilterValue] = useState([]);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    const filterArray = props.data.filter((e) => {
      return e.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (searchValue === "") {
      setFilterValue([]);
    } else {
      setFilterValue(filterArray);
    }
  };

  console.log("inside SearchBox: ",filterValue)

  return (
    <div>
      <input
        type="text"
        placeholder={props.Placeholder}
        onChange={handleSearch}
      />
      {filterValue.length !== 0 ? null : <p> Enter the key word</p>}
      <div>
        <SearchList items={filterValue}/>
      </div>
    </div>
  );
};
export default SearchBox;
