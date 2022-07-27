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
    },
    reduceCartItemCount: (state, action: PayloadAction<Product>) => {
      const item = state.cartItems[action.payload.id];
      // decreament count
      state.cartItems[item.id] = {
        ...item,
        itemCount: item.itemCount - 1,
      };
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const prevItems = { ...state.cartItems };

      if (action.payload in prevItems) {
        delete prevItems[action.payload];
      }
      state.cartItems = {
        ...prevItems,
      };
    },

    toggleCart: (state) => {
      state.open = !state.open;
    },
  },
});

export const { addToCart, removeFromCart, toggleCart, reduceCartItemCount } =
  cartSlice.actions;

export const selectCartItems = (state: RootState) =>
  Object.values(state.cart.cartItems);

export const selectCartCount = (state: RootState) =>
  Object.values(state.cart.cartItems).length;

export default cartSlice.reducer;
