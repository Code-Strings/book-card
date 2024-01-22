import React from 'react';
import Page from '../../Page/Pagination/Page';

function SearchList({ items }) {
 // const filtered = items.map(items =>  <CardPage data={items} />); 
  return (
    <Page data={items}/>
  );
}

export default SearchList;