import '@/css/CartValidation.css';
import '@/components/Cart/styles.css';
import ShopSteps from "@/components/ShopSteps/ShopSteps";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/store/Zustand";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";



const CartValidation = () => {

  const { cartItems } = useStore();
  const navigate = useNavigate();

  const handleValidationClick = () => {
    navigate('/delivery');
  }


  return (
    <div className="cart-validation-container">
      <ShopSteps />
      <div className="cart-validation-top-container">
        <h1>Détail de votre panier</h1>
        <p><a onClick={() => navigate('/connexion')}>Connectez-vous</a> pour sauvegarder votre panier</p>
      </div>
      <div className="cart-validation-content">
        {Object.values(cartItems).map((item) => (
          <Card key={item.id} className='cart-item'>
            <CardContent className='cart-item-description'>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.price} €</CardDescription>
              <CardDescription>Quantité : {item.quantity}</CardDescription>
            </CardContent>
            <CardContent className='cart-validation-total-item'>
              {item.quantity * item.price} €
            </CardContent>
          </Card>
        ))}
      </div>
      <div className='validation-button-container'>
        <Button onClick={handleValidationClick}>Valider mon panier</Button>
      </div>
    </div>
  )
};

export default CartValidation;
