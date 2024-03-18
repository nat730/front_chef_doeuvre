import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/App.css';
import '../css/Card.css';
import '../css/mobile.css';
import { useEffect, useState } from 'react';

export interface Product {
  itemName: string;
  quantity: number;
  price: number;
  selectedprice: string;
}

function App() {

  const [user, setUser] = useState<string | null>(null);

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
        console.log(user);
      } else {
        console.log('no token');
      }
    }, []
  );

  return (
    <div className="app">
       <Header />
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
