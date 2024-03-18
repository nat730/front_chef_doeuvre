import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/App.css';
import '../css/Card.css';
import '../css/mobile.css';
import { useCallback, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import UserMenu from '@/components/UserMenu';

export interface Product {
  itemName: string;
  quantity: number;
  price: number;
  selectedprice: string;
}

function App() {

  const [user, setUser] = useState<string | null>(null);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(
    () => {
      const getUserInfo = async () => {
          try {
            const response = await fetch('http://localhost:3000/api/auth/local/user/me', {
              headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
              }
            });
            const data = await response.json();
            if(data) {
              console.log(data);
              setUser(data.firstname);
              console.log(user);
            } else {
              console.log('no user info');
            }
          } catch (error) {
            console.log('error', error);
          }
        }
        if (localStorage.getItem('token')) {
        getUserInfo();
      } else {
        console.log('no token');
      }
    }, []
  );

  const toggleMainMenu = useCallback(
    () => {
      setIsMainMenuOpen(!isMainMenuOpen);
    }, [isMainMenuOpen])

    const toggleUserMenu = useCallback(() => {
      setIsUserMenuOpen(!isUserMenuOpen);
    }, [isUserMenuOpen])

  return (
    <div className="app">
      {isMainMenuOpen && <div className='main-menu'>
        <div className="main-menu-top-container">
          <div className='main-menu-close'>
            <X size={25} strokeWidth={2} className="close-main-menu" onClick={() => toggleMainMenu()}/>
          </div>
          <div className="main-menu-title-container">
            <h1 className="main-menu-title">Drive solidaire</h1>
          </div>
        </div>
        <div className="main-menu-content">
          <h1>Accueil</h1>
          <h1>Produits</h1>
          <h1>Catégories</h1>
          <h1>Connexion</h1>
        </div>
      </div>}
      {isUserMenuOpen && <UserMenu user={user} toggleUserMenu={() => toggleUserMenu()}/>}
       <Header username={user} toggleMainMenu={() => toggleMainMenu()} toggleUserMenu={() => toggleUserMenu()}/>
      <div className="main">
        <div className="gauche">
          <div className="content">
          </div>
          <div className="content">
          {user && <h1>Bonjour {user}</h1>}
          </div>
        </div>
        <div className="basket">
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
