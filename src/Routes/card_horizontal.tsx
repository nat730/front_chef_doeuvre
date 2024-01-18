import { useState } from 'react';
import '../css/Card.css';
import { Product } from './Accueil';

interface CardProps {
  imageUrl: string;
  description: string;
  itemName: string;
  price1: string;
  price2: string;
  pricePerKg1: string;
  pricePerKg2: string;
  addToCart: (product: Product) => void;
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

  let casttonumber: number;
  const handleAddToCart = (arg: string) => {

    if (arg == 'price1') {
      casttonumber = Number(price1)
      setSelectedPrice('prixasso')

    }
    else if (arg == 'price2') {
      casttonumber = Number(price2)
      setSelectedPrice('prixnormal')
    }

    addToCart({
      itemName: itemName,
      quantity: quantity,
      price: casttonumber,
      selectedprice: selectedPrice
    });
  };

  return (
    <div className="card">
      <div className="image-container">
        <img src={imageUrl} alt={description} />
      </div>
      <div className="info-container">
        <div>
          <h3 className="centered">{itemName}</h3>
        </div>
        <div className="prices-containers">
          <div className="price-container">
            <p className="left-align">{price1}</p>
            <p className="left-align">{pricePerKg1}/kg</p>
            <button onClick={() => {
              handleAddToCart('price1');
            }}>{price1}</button>
          </div>
          <div className="price-container">
            <p className="left-align">{price2}</p>
            <p className="left-align">{pricePerKg2}/kg</p>
            <button onClick={() => {
              handleAddToCart('price2');
            }}>{price2}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;