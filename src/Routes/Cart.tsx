import { useState, useEffect } from 'react';

const Cart = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollTop(scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const x = 0;
  const y = 1540;

  const calculateStyles = () => {
    const roundedScrollTop = Math.floor(scrollTop);

    if (roundedScrollTop <= x) {
      return {
        height: '90%',
        bottom: 0,
        top: 'auto',
      };
    } else if (roundedScrollTop >= x && roundedScrollTop <= y) {
      return {
        height: '100%',
        bottom: 0,
        top: 'auto',
      };
    } else {
      return {
        height: '90%',
        top: 0,
        bottom: 'auto',
      };
    }
  };

  return (
    <>
      <div className="container-cart" style={calculateStyles()}>
        <div className="cart">
          {/* Contenu du panier */}
          <h2>Panier</h2>
          {/* ... Ajoutez ici le contenu du panier */}
        </div>
      </div>
    </>
  );
};

export default Cart;
