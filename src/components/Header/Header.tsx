import { useCartMenuStore, useMainMenuStore, useUserMenuStore, useUserStore } from '@/store/Zustand'
import './styles.css'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CircleUserIcon, Menu, ShoppingCart, UserCheck } from 'lucide-react'
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

const Header = () => {

  const navigate = useNavigate();
  const { user } = useUserStore();
  const { isMainMenuOpen, setIsMainMenuOpen } = useMainMenuStore();
  const { isUserMenuOpen, setIsUserMenuOpen } = useUserMenuStore();
  const { isCartMenuOpen, setIsCartMenuOpen } = useCartMenuStore();

  const toggleMainMenu = useCallback(() => {
    setIsMainMenuOpen(!isMainMenuOpen);
    console.log(isMainMenuOpen);
  }, [isMainMenuOpen, setIsMainMenuOpen]);

  const toggleUserMenu = useCallback(() => {
    setIsUserMenuOpen(!isUserMenuOpen);
    console.log(isUserMenuOpen);
  }, [isUserMenuOpen, setIsUserMenuOpen]);

  const toggleCart = useCallback(() => {
    setIsCartMenuOpen(!isCartMenuOpen);
    console.log(isCartMenuOpen);
  }, [isCartMenuOpen, setIsCartMenuOpen]);

  const handleConnexionClick = useCallback(
    () => {
      navigate('/connexion');
    }, [navigate])


  return (
    <header className="header-content">
      <Menu size={25} strokeWidth={2} className="menu-header" onClick={toggleMainMenu}/>
      <div className='main-title-container'>
        <Avatar>
          <AvatarImage src="/image/9k.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="Title">Drive Solidaire</h1>
      </div>
      <div className='icons-header-container'>
        {!user && <CircleUserIcon size={25} strokeWidth={2} className="user-header" onClick={() => handleConnexionClick()}/>}
        {user && <UserCheck size={25} strokeWidth={2} className="user-header" onClick={toggleUserMenu}/>}
        <div className='cart-icon-container'>
          <ShoppingCart size={25} strokeWidth={2} className="basket-header" onClick={toggleCart}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
