import { useStore } from "@/components/Cart/Zustand";
import ShopSteps from "@/components/ShopSteps/ShopSteps";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";


const CartValidation = () => {

  const navigate = useNavigate();
  const { cartItems } = useStore();

  const handleValidationClick = () => {
    navigate('/delivery');
  }


  return (
    <>
      <h1>Détail de votre panier</h1>
      <p><a onClick={() => navigate('/connexion')}>Connectez-vous</a> pour sauvegarder votre panier</p>
      <ShopSteps />
      <ul>
        {Object.values(cartItems).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Button onClick={handleValidationClick}>Valider mon panier</Button>
    </>
  )
};

export default CartValidation;
