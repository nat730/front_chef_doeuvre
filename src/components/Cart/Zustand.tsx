import {create} from 'zustand';

type CartItem = {
  id: number;
  name: string;
  quantity:number
};

type Store = {
  cartItems: { [id: number]: CartItem };
  addItem: (item: CartItem) => void;
};

export const useStore = create<Store>((set) => ({
  cartItems: {},
  addItem: (item) => set((state) => ({ cartItems: { ...state.cartItems, [item.id]: item } })),
}));

// Object.keys()
// Object.values()