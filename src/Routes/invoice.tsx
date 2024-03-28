import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface OrderItem {
    id: number;
    quantity: number;
    weight_unity: number;
    unity_symbol: string;
    price_by_unity: number;
    price_by_unity_asso: number;
    price_per_kg: number;
    price_per_kg_asso: number;
    product:
    {
        name: string;
    };
    order:
    {
        customer_id: number
        id: number,
    }
}


const InvoicePage = () => {
    const [orderItem, setOrderItem] = useState<OrderItem>();
    const token = localStorage.getItem('token');
    const params = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            console.log(params,"a");

            try {
                const response = await fetch(`http://localhost:3000/api/invoice/${params}`, {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                    }
                });
                console.log(response);
                
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération de l'OrderItem");
                }
                const data = await response.json();
                setOrderItem(data);
            } catch (error) {
                console.error("Erreur lors de la récupération de l'OrderItem", error);
            }
        };

        fetchData();
    }, [params]);

    return (
        orderItem &&
        <div>
            <h1>Facture</h1>
            <p>ID de la commande : {orderItem.id}</p>
            <p>produts : {orderItem.product.name}</p>
            <p>Quantité : {orderItem.quantity}</p>
            <p>Prix unitaire : {orderItem.price_by_unity} €</p>
            <p>Poids unitaire : {orderItem.weight_unity} {orderItem.unity_symbol}</p>
            <p>Prix au kilo : {orderItem.price_per_kg} €/{orderItem.unity_symbol}</p>
            <p>Prix total : {orderItem.quantity * orderItem.price_by_unity} €</p>
        </div>
    );
};

export default InvoicePage;
