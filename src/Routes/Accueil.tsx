import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/App.css';
import '../css/Card.css';
import '../css/mobile.css';
import { useCallback, useEffect, useState } from 'react';
import { X } from 'lucide-react';

export interface Product {
  itemName: string;
  quantity: number;
  price: number;
  selectedprice: string;
}

function App() {

  const [user, setUser] = useState<string | null>(null);
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

    const toggleUserMenu = useCallback(() => {
      console.log("toggleMenu");
      setIsUserMenuOpen(!isUserMenuOpen);
    }, [isUserMenuOpen])

  return (
    <div className="app">
        {isUserMenuOpen && <div className='user-menu'>
          <div className="user-menu-top-container">
            <div className='user-menu-close'>
              <X size={25} strokeWidth={2} className="close-user-menu" onClick={() => toggleUserMenu()}/>
            </div>
            <div className="user-menu-title-container">
              <h1 className="user-menu-title">Bonjour {user}</h1>
            </div>
          </div>
          <div className="user-menu-content">
            <div className="user-menu-profil-content">
              <h1>Mon profil</h1>
              <h2 className='user-menu-secondary-title'>Mon compte</h2>
              <h2 className='user-menu-secondary-title'>Mes préférences</h2>
              <h2 className='user-menu-secondary-title'>Mon compte</h2>
            </div>
            <div className="user-menu-orders-content">
              <h1>Mes commandes</h1>
              <h2 className='user-menu-secondary-title'>Mon historique de commande</h2>
              <h2 className='user-menu-secondary-title'>Mes commandes en cours</h2>
            </div>
          </div>
        </div>}
       <Header username={user} toggleUserMenu={() => toggleUserMenu()}/>
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
