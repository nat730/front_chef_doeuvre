import React from 'react';

export interface ProductProps {
 name: string;
 price: number;
 quantity: number;
 currency: string;
}

const Product: React.FC<ProductProps> = ({ name, price, quantity, currency }) => (
 <div>
    <h3>{name}</h3>
    <p>Prix: {price} {currency}</p>
    <p>Quantité: {quantity}</p>
 </div>
);

export default Product;