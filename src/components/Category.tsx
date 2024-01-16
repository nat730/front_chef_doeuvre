import React from 'react';
import Product, { ProductProps } from './Product';

interface CategoryProps {
 title: string;
 products: ProductProps[];
}

const Category: React.FC<CategoryProps> = ({ title, products }) => (
 <div>
    <h2>{title}</h2>
    <ul>
      {products.map(product => (
        <li key={product.name}>
          <Product {...product} />
        </li>
      ))}
    </ul>
 </div>
);

export default Category;