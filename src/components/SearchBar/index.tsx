import React from 'react';




interface SearchBarProps {

}
const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <div>
      <input placeholder='Search...' />
      <div>
        <input type="checkbox" name="onlyStock" />
        <span>Only show products in stock</span>
      </div>
    </div>
  )
}


export default SearchBar;
