import Footer from '@/components/Footer/Footer';
import '@/css/App.css';
import '@/css/Card.css';
import '@/css/mobile.css';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';
import { useUserStore, useStore } from '@/store/Zustand';
import { IProduct } from '@/definition';


function Accueil() {
  const { user } = useUserStore()
  const { addItem } = useStore();
  const [products, setProducts] = useState<IProduct[] | null>(null);

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



    const handleAddToCart = (product: IProduct, quantity: number) => {
      const price = product.CatalogItems[0].price_by_unity;
      addItem({ id: product.id, price, name: product.name, quantity });
    };

  return (
    <div className="app">
      <div className="main">
        <div className="content">
          {user && <h1>Bonjour {user.firstname}</h1>}
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
