import './styles.css'
import { Minus, X } from "lucide-react";
import { CartItem, useCartMenuStore, useStore } from "../../store/Zustand";

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
          <div className="user-menu-content">
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
        </div>
      </div>
    </>
  );
}

export default Cart;
