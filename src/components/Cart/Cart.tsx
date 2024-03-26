import './styles.css'
import { Minus, X } from "lucide-react";
import { CartItem, useStore } from "./Zustand";


interface CartProps {
  toggleCart: () => void;
}

const Cart = ({ toggleCart }: CartProps) => {
  const { cartItems, removeItem } = useStore();

  const handleRemoveItem = (item: CartItem) => {
    removeItem(item);
  };

  return (
    <>
      <div className='cart-menu'>
        <div className="left-cart-menu">
          <div className='cart-menu-close'>
            <X size={25} strokeWidth={2} className="close-cart-menu" onClick={() => toggleCart()} />
          </div>
        </div>
        <div className="right-cart-menu">
          <div className="cart-menu-top-container">
            <div className="cart-menu-title-container">
              <h1 className="cart-menu-title">Mon Panier</h1>
            </div>
            <ul>
          {Object.values(cartItems).map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => handleRemoveItem(item)}>
                <Minus size={25} strokeWidth={2} />
              </button>
            </li>
          ))}
        </ul>
          </div>
          <div className="user-menu-content">
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
