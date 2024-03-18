import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/App.css';
import '../css/Card.css';
import '../css/mobile.css';

export interface Product {
  itemName: string;
  quantity: number;
  price: number;
  selectedprice: string;
}

function App() {


  return (
    <div className="app">
       <Header />
      <div className="main">
        <div className="gauche">
          <div className="content">
          </div>
          <div className="content">
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
