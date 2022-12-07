import React from 'react';
import { Products } from '../../App';
import { Product } from '../../json';

interface ProductCategoryRowProps {
  category: string;
}
const ProductCategoryRow: React.FC<ProductCategoryRowProps> = (props) => {
  const { category } = props;
  return (
    <tr>
      <td colSpan={2}>
        {category}
      </td>
    </tr>
  )
}

interface ProductRowProps {
  product: Product;
}
const ProductRow: React.FC<ProductRowProps> = (props) => {
  const { name, price, stocked } = props.product;
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  )
}

interface ProductTableProps {
  products: Products;
}
const ProductTable: React.FC<ProductTableProps> = (props) => {
  return (
    <table border={1}>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(props.products).map((key, index) => {

            return (
              <>
                <ProductCategoryRow category={key} key={index} />
                {
                  props.products[key].map(product => <ProductRow product={product} />)
                }
              </>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default ProductTable;