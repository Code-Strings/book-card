import React from 'react';
import CardPage from '../../Page/Index';

function SearchList({ items }) {
  const filtered = items.map(items =>  <CardPage data={items} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;