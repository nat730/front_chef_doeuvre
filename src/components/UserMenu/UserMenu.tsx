import { useUserMenuStore, useUserStore } from '@/store/Zustand';
import './styles.css'
import { X } from "lucide-react";


const UserMenu = () => {

  const { user } = useUserStore();
  const { isUserMenuOpen, setIsUserMenuOpen } = useUserMenuStore();

  return (
    <div className='user-menu'>
      <div className="left-user-menu">
        <div className='user-menu-close'>
          <X size={25} strokeWidth={2} className="close-user-menu" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}/>
        </div>
      </div>
      <div className="right-user-menu">
        <div className="user-menu-top-container">
          <div className="user-menu-title-container">
             {user && <h1 className="user-menu-title">Bonjour {user.firstname}</h1>}
          </div>
        </div>
        <div className="user-menu-content">
          <div className="user-menu-profil-content">
            <h1>Mon profil</h1>
            <div className="user-menu-secondary-title-container">
              <h2 className='user-menu-secondary-title'>Mon compte</h2>
              <h2 className='user-menu-secondary-title'>Mes préférences</h2>
              <h2 className='user-menu-secondary-title'>Mon compte</h2>
            </div>
          </div>
          <div className="user-menu-orders-content">
            <h1>Mes commandes</h1>
            <div className="user-menu-secondary-title-container">
              <h2 className='user-menu-secondary-title'>Mon historique de commande</h2>
              <h2 className='user-menu-secondary-title'>Mes commandes en cours</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default UserMenu;
