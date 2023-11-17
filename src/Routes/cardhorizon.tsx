import '../css/Card.css';

interface CardProps {
    imageUrl: string;
    description: string;
    itemName: string;
    price1: string;
    price2: string;
    pricePerKg1: string;
    pricePerKg2: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, description, itemName, price1, price2, pricePerKg1, pricePerKg2 }) => {
    return (
        <div className="card">
            <div className="image-container">
                <img src={imageUrl} alt={description} />
            </div>
            <div className="info-container">
                <h2 className="centered">{itemName}</h2>
                <div className="price-container">
                    <p className="left-align">{price1}</p>
                    <p className="right-align">{price2}</p>
                </div>
                <div className="price-container">
                    <p className="left-align">{pricePerKg1}/kg</p>
                    <p className="right-align">{pricePerKg2}/kg</p>
                </div>
            </div>
        </div>
    );
};

export default Card;