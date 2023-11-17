import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';
import '../css/App.css';
import Card from './cardhorizon';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='main'>
        <div className='gauche'>
      <h2>Alimentaire</h2>
        <div className="content">
        <Card imageUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Pasta_2006_2.jpg/1280px-Pasta_2006_2.jpg'} description={'pates'} itemName={'pates'} price1={'12€'} price2={'18€'} pricePerKg1={'24€'} pricePerKg2={'36€'}/>
      <Card imageUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Pasta_2006_2.jpg/1280px-Pasta_2006_2.jpg'} description={'pates'} itemName={'pates'} price1={'12€'} price2={'18€'} pricePerKg1={'24€'} pricePerKg2={'36€'}/>
      <Card imageUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Pasta_2006_2.jpg/1280px-Pasta_2006_2.jpg'} description={'pates'} itemName={'pates'} price1={'12€'} price2={'18€'} pricePerKg1={'24€'} pricePerKg2={'36€'}/>
      <Card imageUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Pasta_2006_2.jpg/1280px-Pasta_2006_2.jpg'} description={'pates'} itemName={'pates'} price1={'12€'} price2={'18€'} pricePerKg1={'24€'} pricePerKg2={'36€'}/>
      <Card imageUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Pasta_2006_2.jpg/1280px-Pasta_2006_2.jpg'} description={'pates'} itemName={'pates'} price1={'12€'} price2={'18€'} pricePerKg1={'24€'} pricePerKg2={'36€'}/>
      <Card imageUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Pasta_2006_2.jpg/1280px-Pasta_2006_2.jpg'} description={'pates'} itemName={'pates'} price1={'12€'} price2={'18€'} pricePerKg1={'24€'} pricePerKg2={'36€'}/>
      </div>
      
      <h2>Alimentaire</h2>
        <div className="content">
        <Card imageUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Pasta_2006_2.jpg/1280px-Pasta_2006_2.jpg'} description={'pates'} itemName={'pates'} price1={'12€'} price2={'18€'} pricePerKg1={'24€'} pricePerKg2={'36€'}/>
      <Card imageUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Pasta_2006_2.jpg/1280px-Pasta_2006_2.jpg'} description={'pates'} itemName={'pates'} price1={'12€'} price2={'18€'} pricePerKg1={'24€'} pricePerKg2={'36€'}/>
      <Card imageUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Pasta_2006_2.jpg/1280px-Pasta_2006_2.jpg'} description={'pates'} itemName={'pates'} price1={'12€'} price2={'18€'} pricePerKg1={'24€'} pricePerKg2={'36€'}/>
      <Card imageUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Pasta_2006_2.jpg/1280px-Pasta_2006_2.jpg'} description={'pates'} itemName={'pates'} price1={'12€'} price2={'18€'} pricePerKg1={'24€'} pricePerKg2={'36€'}/>
      <Card imageUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Pasta_2006_2.jpg/1280px-Pasta_2006_2.jpg'} description={'pates'} itemName={'pates'} price1={'12€'} price2={'18€'} pricePerKg1={'24€'} pricePerKg2={'36€'}/>
      <Card imageUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Pasta_2006_2.jpg/1280px-Pasta_2006_2.jpg'} description={'pates'} itemName={'pates'} price1={'12€'} price2={'18€'} pricePerKg1={'24€'} pricePerKg2={'36€'}/>
      </div>
      </div>
      <div className='basket'>
      <Cart />
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
