// App.tsx
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/card_horizontal';
import '../css/App.css';
import '../css/Card.css';
import '../css/mobile.css';
import Breadcrumbs from '../components/breadcrumb';

export interface Product {
  itemName: string;
  quantity: number;
  price: number;
  selectedprice: string;
}

function App() {
  const [commonCardData, setCommonCardData] = useState({
    imageUrl: '/image/spaghetti.jpg',
    description: 'pates',
    itemName: 'pates',
    price1: '12',
    price2: '18',
    pricePerKg1: '24',
    pricePerKg2: '36',
  });
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.itemName === product.itemName && item.price === product.price
    );

    if (existingProductIndex !== -1) {
      const updatedCart = cart.map((item, index) => {
        if (index === existingProductIndex) {
          return {
            ...item,
            quantity: item.quantity + product.quantity,
          };
        } else {
          return item;
        }
      });

      setCart(updatedCart);
    } else {
      const productToAdd: Product = product;
      setCart([...cart, productToAdd]);
    }
  };

  const updateCommonCardData = () => {
    setCommonCardData((prevData) => ({
      ...prevData,
      itemName: 'riz au sucre',
      price1: "14",
    }));
  };

  return (
    <div className="app">
       <Header cart={cart} />
       <Breadcrumbs paths={[
          { label: 'Connexion', url: '/connexion' },
       ]} />
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
