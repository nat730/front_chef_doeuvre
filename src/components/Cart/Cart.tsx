import './styles.css'
import '@/css/globals.css'
import { Minus, Plus, X } from "lucide-react";
import { CartItem, useCartMenuStore, useStore } from "../../store/Zustand";
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, addOneItem, removeOneItem, removeItem } = useStore();
  const { isCartMenuOpen, setIsCartMenuOpen } = useCartMenuStore();

  const handleRemoveItem = (item: CartItem) => {
    removeItem(item);
  };

  const handleCartButtonClick = () => {
    setIsCartMenuOpen(!isCartMenuOpen);
    navigate('/cart');
  };

  const handleShopButtonClick = () => {
    setIsCartMenuOpen(!isCartMenuOpen);
    navigate('/');
  };

  const handleRemoveOneItem = (item: CartItem) => {
    removeOneItem(item);
  };

  const handleAddOneItem = (item: CartItem) => {
    addOneItem(item);
  };

  return (
    <>
      <div className='cart-menu'>
        <div className="left-cart-menu">
          <div className='cart-menu-close'>
            <X size={25} strokeWidth={2} className="close-cart-menu" onClick={() => setIsCartMenuOpen(!isCartMenuOpen)} />
          </div>
        </div>
        <div className="right-cart-menu">
          <div className="cart-menu-top-container">
            <div className="cart-menu-title-container">
              <h1 className="cart-menu-title">Mon Panier</h1>
            </div>
          </div>
          <div className="cart-menu-content">
            {Object.values(cartItems).map((item) => (
              <Card key={item.id} className='cart-item'>
                <CardContent className='cart-item-description'>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{item.price} €</CardDescription>
                </CardContent>
                <Button onClick={() => handleRemoveItem(item)} className='cart-menu-minus-button'>
                  <Minus size={10} strokeWidth={2} onClick={() => handleRemoveOneItem(item)}/>
                </Button>
                <div>{item.quantity}</div>
                <Button>
                  <Plus size={10} strokeWidth={2} onClick={() => handleAddOneItem(item)}/>
                </Button>
              </Card>
            ))}
          </div>
            <div className='cart-menu-footer'>
              <div className='cart-menu-footer-total'>
                <div>
                  Prix total
                </div>
                <div>
                  {Object.values(cartItems).reduce((acc, item) => acc + item.price * item.quantity, 0)} €
                </div>
              </div>
              <div className='cart-menu-footer-buttons-container'>
                <Button onClick={handleCartButtonClick}>Voir mon panier</Button>
                <Button className='cart-menu-footer-shop-button' onClick={handleShopButtonClick}>Continuer mes achats</Button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
