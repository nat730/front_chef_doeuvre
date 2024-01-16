// App.tsx
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './card_horizontal';
import '../css/App.css';
import '../css/Card.css';
import '../css/mobile.css';

interface Product {
  itemName: string;
  quantity: number;
  price: number;
  selectedPrice: string;
}


function App() {
  const [commonCardData, setCommonCardData] = useState({
    imageUrl: '../../public/image/spaghetti.jpg',
    description: 'pates',
    itemName: 'pates',
    price1: '12',
    price2: '18',
    pricePerKg1: '24',
    pricePerKg2: '36',
  });
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const existingProductIndex = cart.findIndex((item) => item.itemName === product.itemName);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += product.quantity;
      setCart(updatedCart);
    } else {
      const productToAdd: Product = product;
      setCart([...cart, productToAdd]);
    }
  };

  const updateCommonCardData = () => {
    setCommonCardData((prevData) => ({
      ...prevData,
      itemName: 'Updated Item Name',
      price1: 'Updated Price 1',
    }));
  };

  return (
    <div className="app">
       <Header cart={cart} /> 
      <div className="main">
        <div className="gauche">
          <div className="content">
            {[...Array(2)].map((_, index) => (
              <Card key={index} {...commonCardData} addToCart={addToCart} />
            ))} 
          </div>
          <div className="content">
            <button onClick={updateCommonCardData}>Update Common Card Data</button>
          </div>
        </div>
        <div className="basket">
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;