import Footer from '@/components/Footer/Footer';
import '@/css/App.css';
import '@/css/Card.css';
import '@/css/mobile.css';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';
import { useStore } from '@/store/Zustand';
import { IProduct } from '@/definition';
import Header from '@/components/Header/Header';


function Accueil() {

  const [user, setUser] = useState<string | null>(null);
  const [products, setProducts] = useState<IProduct[] | null>(null);

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

    const { addItem } = useStore();

    const handleAddToCart = (product: IProduct, quantity: number) => {
      const price = product.CatalogItems[0].price_by_unity;
      addItem({ id: product.id, price, name: product.name, quantity });
    };

  return (
    <div className="app">
      <div className="main">
        <Header />
        <div className="content">
          {user && <h1>Bonjour {user}</h1>}
        </div>
        <div className="basket">
        </div>
      </div>
      <ProductCard products={products} onAddToCart={handleAddToCart}/>
      <Footer />
    </div>
  );
}

export default Accueil;
