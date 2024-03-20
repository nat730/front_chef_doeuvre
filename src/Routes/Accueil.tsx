import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/App.css';
import '../css/Card.css';
import '../css/mobile.css';
import { useCallback, useEffect, useState } from 'react';
import UserMenu from '@/components/UserMenu';
import MainMenu from '@/components/MainMenu';

export interface Product {
  itemName: string;
  quantity: number;
  price: number;
  selectedprice: string;
}

function Accueil() {

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
              setUser(data.firstname);
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
      {isMainMenuOpen && <MainMenu toggleMainMenu={() => toggleMainMenu()}/>}
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

export default Accueil;
