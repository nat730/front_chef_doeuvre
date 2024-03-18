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
          console.log('fetching user info');
          const response = await fetch('http://localhost:3000/api/auth/local/user/me', {
            headers: {
              'Application-Type': 'application/json',
            }
          });
        const data = await response.json();
        if(!data.error) {
          console.log(data);
          setUser(data.firstName);
        }
      };
      getUserInfo();
    }, []);

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
