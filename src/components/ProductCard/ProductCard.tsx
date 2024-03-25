import './styles.css'
import { IProduct } from "@/Routes/Accueil";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

interface IProductCard {
  products: IProduct[] | null;
}

const ProductCard = ({products}: IProductCard) => {

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
              <input type="number" className='input-quantity' name={product.name} />
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
