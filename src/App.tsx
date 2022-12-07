import React from 'react';
import { SearchBar, ProductTable } from './components';
import ProductData, { Product } from './json';

const p: Products = {};
ProductData.map((value) => {
  (!p[value.category]) && (p[value.category] = []);
  p[value.category].push(value);
})

export interface Products {
  [category: string]: Product[];
}

class FilterableProductTable extends React.Component<any, any> {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={p} />
      </div>
    )
  }

}

function App() {
  return (
    <FilterableProductTable />
  );
}

export default App;
