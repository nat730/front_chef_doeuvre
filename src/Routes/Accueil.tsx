import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/App.css';
import '../css/Card.css';
import '../css/mobile.css';
import { useCallback, useEffect, useState } from 'react';
import UserMenu from '@/components/UserMenu';
import MainMenu from '@/components/MainMenu';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface Product {
    id: number;
    name: string;
    description: string;
    category_id: number;
    unit_value: string;
    created_at: string;
    updated_at: string;
    CatalogItems: [
      {
        id: number;
        price: number;
        price_by_unity_asso: number;
        image: string;
        product_id: number;
        updated_at: string;
        created_at: string;
        catalog_id: number | null;
      }
    ]
    categoryName: string;
}

function Accueil() {

  const [user, setUser] = useState<string | null>(null);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  useEffect(
    () => {
      const getUserInfo = async () => {
          try {
            const response = await fetch('http://localhost:3000/api/auth/local/user/me', {
              headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
              }
            });
            const data = await response.json();
            if(data) {
              setUser(data.firstname);
            }
          } catch (error) {
            console.log('error', error);
          }
        }
        if (localStorage.getItem('token')) {
        getUserInfo();
      } else {
        console.log('no token');
      }
    }, []
  );

  useEffect(
    () => {
     const getProducts = async () => {
       try {
         const response = await fetch('http://localhost:3000/api/productcatalogitem', {
           headers: {
             'Authorization': 'Bearer ' + localStorage.getItem('token'),
           }
         });
         const data = await response.json();
         setProducts(data);
         console.log('data', data);
       } catch (error) {
         console.log('error', error);
     }
   }
   getProducts();
   console.log('products', products);
 }, []);

  const toggleMainMenu = useCallback(
    () => {
      setIsMainMenuOpen(!isMainMenuOpen);
    }, [isMainMenuOpen]
  )

  const toggleUserMenu = useCallback(() => {
      setIsUserMenuOpen(!isUserMenuOpen);
    }, [isUserMenuOpen]
  )

  const handleQuantityChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
    setSelectedProduct(e.target.name);
  }, []);

  const handleAddToCartClick = useCallback(
    async () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '{}');
      console.log('cart', {product: selectedProduct, quantity: quantity});
      if(!cart) {
        localStorage.setItem('cart', JSON.stringify([{product: selectedProduct, quantity: quantity}]));
      } else {
        localStorage.setItem('cart', JSON.stringify({product: products, quantity: quantity}, ...cart))
      }
    }, []);

  return (
    <div className="app">
      {isMainMenuOpen && <MainMenu toggleMainMenu={() => toggleMainMenu()}/>}
      {isUserMenuOpen && <UserMenu user={user} toggleUserMenu={() => toggleUserMenu()}/>}
       <Header username={user} toggleMainMenu={() => toggleMainMenu()} toggleUserMenu={() => toggleUserMenu()}/>
      <div className="main">
        <div className="content">
          {user && <h1>Bonjour {user}</h1>}
        </div>
        <div className='product-category'>
          {products &&
            products.map((product, index) => (
              <Card key={index} className="product-card">
                {product.CatalogItems !== undefined &&
                  product.CatalogItems.map((item, index) => (
                    <img key={index} src={item.image} alt={product.name} />
                  ))
                }
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                {product.CatalogItems.map((item, index) => (
                  <p key={index}>{item.price} € / {product.unit_value}</p>
                ))
                }
                <div className='product-cta'>
                  <input type="number" className='input-quantity' name={product.name} onChange={handleQuantityChange}/>
                  <Button onClick={handleAddToCartClick}>Ajouter au panier</Button>
                </div>
              </Card>
            ))
          }
        </div>
        <div className="basket">
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Accueil;
