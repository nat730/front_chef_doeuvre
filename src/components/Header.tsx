import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CircleUserIcon, Menu, ShoppingCart } from 'lucide-react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {

  const navigate = useNavigate();

  const handleConnexionClick = useCallback(
    () => {
      navigate('/connexion');
    }, [navigate])

  return (
    <header className="header-content">
      <Menu size={25} strokeWidth={2} className="menu-header" />
      <div className='main-title-container'>
        <Avatar>
          <AvatarImage src="/image/9k.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="Title">Drive Solidaire</h1>
      </div>
      <div className='icons-header-container'>
        <CircleUserIcon size={25} strokeWidth={2} className="user-header" onClick={handleConnexionClick}/>
        <div className='cart-icon-container'>
          <ShoppingCart size={25} strokeWidth={2} className="basket-header"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
