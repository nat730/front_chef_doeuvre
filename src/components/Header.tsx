import { useState } from 'react';
import Cart from '../Routes/Cart';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CircleUserIcon, Menu, ShoppingCart } from 'lucide-react';


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
      <Menu size={25} strokeWidth={2} className="menu-header" />
      <div className='main-title-container'>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="Title">Drive Solidaire</h1>
      </div>
      {isCartOpen && <Cart cart={cart} />}
      <div className='icons-header-container'>
        <CircleUserIcon size={25} strokeWidth={2} className="user-header" />
        <div className='cart-icon-container'>
          <ShoppingCart size={25} strokeWidth={2} className="basket-header" onClick={toggleCart}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
