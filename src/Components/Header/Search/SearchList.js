import React from 'react';
import Page from '../../Page/Pagination/Page';

function SearchList({ items }) {
  return (
    <Page data={items}/>
  );
}

export default SearchList;