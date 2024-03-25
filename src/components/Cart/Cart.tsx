import './styles.css'
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useCallback, useState } from "react";

interface CartProps {
  toggleCart: () => void;
}

const Cart = ({toggleCart}: CartProps) => {

  const [cartRandomValue, setCartRandomValue] = useState<number>(0);

  const handleValueChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setCartRandomValue(newValue);
  }, []);

  const handleGenerateRandomCart = useCallback(async () => {
    // il faut ajouter une verif pour s'asssurer que cartRandomValue n'est pas égale à 0 ou est nul
    try {
      const response = await fetch('http://localhost:3000/api/cart/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value: cartRandomValue }),
    });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  return (
    <>
      <div className='cart-menu'>
        <div className="left-cart-menu">
          <div className='cart-menu-close'>
            <X size={25} strokeWidth={2} className="close-cart-menu" onClick={() => toggleCart()}/>
          </div>
        </div>
        <div className="right-cart-menu">
          <div className="cart-menu-top-container">
            <div className="cart-menu-title-container">
              <h1 className="cart-menu-title">Mon Panier</h1>
            </div>
          </div>
          <div className="cart-menu-content">
            <div className="cart-menu-profil-content">
              <Input placeholder="Entrer une somme" type="number" onChange={handleValueChange} />
              <Button onClick={handleGenerateRandomCart}>Générer un panier</Button>
            </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Cart;
