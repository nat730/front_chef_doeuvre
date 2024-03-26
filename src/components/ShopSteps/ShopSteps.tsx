import './styles.css'
import { CreditCard, MapPin, ShoppingCart } from "lucide-react";

const ShopSteps = () => {
  return (
    <div className="steps-container">
      <ShoppingCart size={50} />
      <MapPin size={50} />
      <CreditCard size={50} />
    </div>
  );
}

export default ShopSteps;
