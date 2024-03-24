import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/App.css';
import '../css/Card.css';
import '../css/mobile.css';
import { useCallback, useEffect, useState } from 'react';
import UserMenu from '@/components/UserMenu';
import MainMenu from '@/components/MainMenu';
import { Card } from '@/components/ui/card';

export interface Product {
    id: number;
    name: string;
    description: string;
    unit_value: string;
    category_id: number;
    updated_at: string;
    created_at: string;
    newCatalogItem: {
      id: number;
      price: number;
      price_asso: number;
      image: string;
      product_id: number;
      updated_at: string;
      created_at: string;
      catalog_id: number | null;
    },
    categoryName: string;
}

function Accueil() {

  const [user, setUser] = useState<string | null>(null);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

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
         console.log('products', products);
       } catch (error) {
         console.log('error', error);
     }
   }
   getProducts();
 }, []);

  const toggleMainMenu = useCallback(
    () => {
      setIsMainMenuOpen(!isMainMenuOpen);
    }, [isMainMenuOpen])

    const toggleUserMenu = useCallback(() => {
      setIsUserMenuOpen(!isUserMenuOpen);
    }, [isUserMenuOpen])

  return (
    <div className="app">
      {isMainMenuOpen && <MainMenu toggleMainMenu={() => toggleMainMenu()}/>}
      {isUserMenuOpen && <UserMenu user={user} toggleUserMenu={() => toggleUserMenu()}/>}
       <Header username={user} toggleMainMenu={() => toggleMainMenu()} toggleUserMenu={() => toggleUserMenu()}/>
      <div className="main">
        <div className="content">
          {user && <h1>Bonjour {user}</h1>}
        </div>
        <div className="product-content">
          {products &&
            products.map((product, index) => (
              <Card key={index} className="card">
                {/* <img src={product.newCatalogItem.image} alt={product.name} /> */}
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.unit_value}</p>
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
