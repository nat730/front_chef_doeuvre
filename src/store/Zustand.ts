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
  addItem: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
};

type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
}

type MainMenuStore = {
  isMainMenuOpen: boolean;
  setIsMainMenuOpen: (isOpen: boolean) => void;
}

type UserMenuStore = {
  isUserMenuOpen: boolean;
  setIsUserMenuOpen: (isOpen: boolean) => void;
};

type CartMenu = {
  isCartMenuOpen: boolean;
  setIsCartMenuOpen: (isOpen: boolean) => void;
}

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


export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export const useMainMenuStore = create<MainMenuStore>((set) => ({
  isMainMenuOpen: false,
  setIsMainMenuOpen: (isOpen) => set({ isMainMenuOpen: isOpen }),
}));

export const useUserMenuStore = create<UserMenuStore>((set) => ({
  isUserMenuOpen: false,
  setIsUserMenuOpen: (isOpen) => set({ isUserMenuOpen: isOpen }),
}));

export const useCartMenuStore = create<CartMenu>((set) => ({
  isCartMenuOpen: false,
  setIsCartMenuOpen: (isOpen) => set({ isCartMenuOpen: isOpen }),
}));
