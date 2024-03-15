import { useState } from 'react';
import Cart from '../Routes/Cart';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


interface HeaderProps {
  cart: { itemName: string; quantity: number; price: number }[];
}

const Header: React.FC<HeaderProps> = ({ cart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="header-content">
      <div className="user">username</div>
      <div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="Title">Drive Solidaire</h1>
      </div>
      {isCartOpen && <Cart cart={cart} />}
      <button className="basket_Header" onClick={toggleCart}>
        panier
      </button>
    </header>
  );
};

export default Header;
