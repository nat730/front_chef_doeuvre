import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CartValidation = () => {

  const navigate = useNavigate();

  const handleValidationClick = () => {
    navigate('/delivery');
  }

  return (
    <>
      <h1>Détail de votre panier</h1>
      <p><a onClick={() => navigate('/connexion')}>Connectez-vous</a> pour sauvegarder votre panier</p>
      <Button onClick={handleValidationClick}>Valider mon panier</Button>
    </>
  )
};

export default CartValidation;
