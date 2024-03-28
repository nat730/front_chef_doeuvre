import './styles.css'
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { IProduct } from '@/definition';
import { Input } from '../ui/input';
import { useState } from 'react';

interface IProductCard {
  products: IProduct[] | null;
  onAddToCart: (product: IProduct, quantity: number) => void;
}

const ProductCard = ({ products, onAddToCart }: IProductCard) => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const handleQuantityChange = (productId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = event.target.value;
    if (/^\d+$/.test(newQuantity)) { // vérifie si la valeur est un nombre entier
      setQuantities({ ...quantities, [productId]: parseInt(newQuantity, 10) });
    }
  };

  const handleAddToCart = (product: IProduct) => {
    const productQuantity = quantities[product.id] || 1; // utilise 1 comme quantité par défaut si aucune quantité n'est définie pour le produit
    onAddToCart(product, productQuantity);
  };


  return (
    <>
      <div className='product-category'>
        {products &&
          products.map((product, index) => (
            <Card key={index} className="product-card">
              {product.CatalogItems &&
                product.CatalogItems.map((item, index) => (
                  <img key={index} src={item.image} alt={product.name} />
                ))
              }
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              {product.CatalogItems.map((item, index) => (
                <p key={index}>{item.price_by_unity} € / {product.unit_value}</p>
              ))}
              <div className='product-cta'>
                <Input type="number" className='input-quantity' name={product.name} value={quantities[product.id] || 1} onChange={(event) => handleQuantityChange(product.id.toString(), event)} />
                <Button onClick={() => handleAddToCart(product)}>Ajouter au panier</Button>
              </div>
            </Card>
          ))
        }
      </div>
    </>
  );
};

export default ProductCard;
