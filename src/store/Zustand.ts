import {create} from 'zustand';

export type CartItem = {
  id: number;
  name: string;
  price:number;
  quantity:number;
};

export type User = {
  firstname: string;
}

type Store = {
  cartItems: { [id: number]: CartItem };
  user: User | null;
  isMainMenuOpen: boolean;
  isUserMenuOpen: boolean;
  isCartOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
  setUser: (user: User) => void;
  setIsMainMenuOpen: (isOpen: boolean) => void;
  setIsUserMenuOpen: (isOpen: boolean) => void;
  setIsCartOpen: (isOpen: boolean) => void;
};

export const useStore = create<Store>((set) => ({
  cartItems: {},
  user: null,
  isMainMenuOpen: false,
  isUserMenuOpen: false,
  isCartOpen: false,
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
  setUser: (user) => set({ user }),
  setIsMainMenuOpen: (isOpen) => set({ isMainMenuOpen: isOpen }),
  setIsUserMenuOpen: (isOpen) => set({ isUserMenuOpen: isOpen }),
  setIsCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
  }));
