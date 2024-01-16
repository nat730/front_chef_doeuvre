import React, { useState } from 'react';
import '../css/Card.css';

interface CardProps {
  imageUrl: string;
  description: string;
  itemName: string;
  price1: string;
  price2: string;
  pricePerKg1: string;
  pricePerKg2: string;
  addToCart: (product: {
    itemName: string;
    quantity: number;
    price: number;
    selectedPrice: string;
  }) => void;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  description,
  itemName,
  price1,
  price2,
  pricePerKg1,
  pricePerKg2,
  addToCart,
}) => {
  const [quantity, _] = useState(1);
  const [selectedPrice, setSelectedPrice] = useState<'prixnormal' | 'prixasso'>('prixasso');

let casttonumber:number;
const handleAddToCart = (arg: string) => {

if (arg=='price1'){
  casttonumber=Number(price1)
  console.log("prout1",casttonumber);
  setSelectedPrice('prixasso')
  
}
else if (arg=='price2') {
    casttonumber=Number(price2)
    console.log("prout2",casttonumber);
    setSelectedPrice('prixnormal')
  }

  addToCart({
    itemName: itemName,
    quantity: quantity,
    price: casttonumber,
    selectedPrice: selectedPrice,
  });
  };

  return (
    <div className="card">
      <div className="image-container">
        <img src={imageUrl} alt={description} />
      </div>
      <div className="info-container">
        <h2 className="centered">{itemName}</h2>
        <div className="price-container">
          <p className="left-align">{price1}</p>
          <button onClick={() => {
            console.log("avant",addToCart.toString);
            handleAddToCart('price1');
            console.log("apres",addToCart.toString);
          }}>{price1}</button>
        </div>
        <div className="price-container">
          <p className="left-align">{pricePerKg1}/kg</p>
        </div>
        <div className="price-container">
          <p className="left-align">{price2}</p>
          <button onClick={() => {
            console.log("avant2",addToCart.toString);

            handleAddToCart('price2');
            console.log("apres2",addToCart.toString);
          }}>{price2}</button>
        </div>
        <div className="price-container">
          <p className="left-align">{pricePerKg2}/kg</p>
        </div>
      </div>
    </div>
  );
};

export default Card;