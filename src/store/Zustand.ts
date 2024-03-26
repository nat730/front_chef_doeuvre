import {create} from 'zustand';

export type CartItem = {
  id: number;
  name: string;
  price:number;
  quantity:number;
};

type Store = {  
  cartItems: { [id: number]: CartItem };
  addItem: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
};

export const useStore = create<Store>((set) => ({
  cartItems: {},
  addItem: (item) => set((state) => {
    const newCartItems = { ...state.cartItems };
    console.log(newCartItems,"newcart");
    
    if (newCartItems[item.id]) {
      newCartItems[item.id].quantity += item.quantity;
    } else {
      newCartItems[item.id] = item;
    }
    return { cartItems: newCartItems };
  }),
  removeItem: (item) => set((state) => {
    const newCartItems = { ...state.cartItems };
    delete newCartItems[item.id];
    return { cartItems: newCartItems };
  }),
  }));