import './styles.css'
import { Minus, X } from "lucide-react";
import { CartItem, useCartMenuStore, useStore } from "../../store/Zustand";
import { Button } from '../ui/button';

const Cart = () => {
  const { cartItems, removeItem } = useStore();
  const { isCartMenuOpen, setIsCartMenuOpen } = useCartMenuStore();

  const handleRemoveItem = (item: CartItem) => {
    removeItem(item);
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
              <div key={item.id} className='cart-item'>
                <div className='cart-item-description'>
                  <div>{item.name}</div>
                  <div>{item.quantity}</div>
                </div>
                <Button onClick={() => handleRemoveItem(item)}>
                  <Minus size={20} strokeWidth={2} />
                </Button>
              </div>
            ))}
          </div>
            <div className='cart-menu-footer'>
              <div>

              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
