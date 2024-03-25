import './styles.css'
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { IProduct } from '@/definition';

interface IProductCard {
  products: IProduct[] | null;
  onAddToCart: (product: IProduct, quantity: number) => void;
}

const ProductCard = ({ products, onAddToCart }: IProductCard) => {
  const handleAddToCart = (product: IProduct, event: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(event.target.value, 10);
    onAddToCart(product, quantity);
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
                <p key={index}>{item.price} € / {product.unit_value}</p>
              ))}
              <div className='product-cta'>
                <input type="number" className='input-quantity' name={product.name} onChange={(e) => handleAddToCart(product, e)} />
                <Button>Ajouter au panier</Button>
              </div>
            </Card>
          ))
        }
      </div>
    </>
  );
};

export default ProductCard;
