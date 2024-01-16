// Cart.tsx
import React from 'react';

interface CartProps {
  cart: { itemName: string; quantity: number; price: number }[];
}

const Cart: React.FC<CartProps> = ({ cart }) => {
  return (
    <div className="container-cart">
      <div className="cart">
        <h2>Panier</h2>
        {cart.map((item, index) => (
          <div key={index}>
            <p>{item.itemName}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
