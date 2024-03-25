import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/App.css';
import '../css/Card.css';
import '../css/mobile.css';
import { useCallback, useEffect, useState } from 'react';
import UserMenu from '@/components/UserMenu';
import MainMenu from '@/components/MainMenu';
import Cart from '@/components/Cart';
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
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState<Product[] | null>(null);

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
    }, [isUserMenuOpen])

    const toggleCart = useCallback(() => {
      setIsCartOpen(!isCartOpen);
    }, [isCartOpen])

  return (
    <div className="app">
      {isMainMenuOpen && <MainMenu toggleMainMenu={() => toggleMainMenu()}/>}
      {isUserMenuOpen && <UserMenu user={user} toggleUserMenu={() => toggleUserMenu()}/>}
      {isCartOpen && <Cart toggleCart={() => toggleCart()}/>}
       <Header username={user} toggleMainMenu={() => toggleMainMenu()} toggleUserMenu={() => toggleUserMenu()} toggleCart={() => toggleCart()}/>
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
                  <input type="number" className='input-quantity' name={product.name}/>
                  <Button>Ajouter au panier</Button>
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
