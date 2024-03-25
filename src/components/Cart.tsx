import { X } from "lucide-react";

interface CartProps {
  toggleCart: () => void;
}

const Cart = ({toggleCart}: CartProps) => {

  return (
    <div className='user-menu'>
      <div className="left-user-menu">
        <div className='user-menu-close'>
          <X size={25} strokeWidth={2} className="close-user-menu" onClick={() => toggleCart()}/>
        </div>
      </div>
      <div className="right-user-menu">
        <div className="user-menu-top-container">
          <div className="user-menu-title-container">
            <h1 className="user-menu-title">Mon Panier</h1>
          </div>
        </div>
        <div className="user-menu-content">
          <div className="user-menu-profil-content"></div>
      </div>
    </div>
    </div>
  );
}

export default Cart;
