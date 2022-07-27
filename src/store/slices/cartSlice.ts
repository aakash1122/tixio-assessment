import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Product } from "../../types";

export type CartItemType = Product & {
  itemCount: number;
};

interface InitialCartState {
  cartItems: Record<string, CartItemType>;
  open: boolean;
}
const initialState: InitialCartState = {
  cartItems: {},
  open: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      // check if item is already in cart
      const isItemInCart = state.cartItems.hasOwnProperty(action.payload.id);
      if (isItemInCart) {
        const item = state.cartItems[action.payload.id];
        // increament count
        state.cartItems[action.payload.id] = {
          ...item,
          itemCount: item.itemCount + 1,
        };
      } else {
        const newItem = {
          ...action.payload,
          itemCount: 1,
        };
        state.cartItems[action.payload.id] = newItem;
      }

      // state.cartItems.push({ ...action.payload, itemCount: 1 });
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      //   const allItems = [...state.cartItems];
      //   const ramainingItems = allItems.filter(
      //     (item) => item.id !== action.payload
      //   );
      //   state.cartItems = ramainingItems;
      // },
    },
    toggleCart: (state) => {
      state.open = !state.open;
    },
  },
});

export const { addToCart, removeFromCart, toggleCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCartItems = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
