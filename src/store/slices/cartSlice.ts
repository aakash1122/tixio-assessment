import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { RootState } from "..";
import { Product } from "../../types";

export type CartItemType = Product & {
  itemCount: number;
};
export type CartItems = Record<string, CartItemType>;

interface InitialCartState {
  cartItems: CartItems;
  wishList: string[];
  open: boolean;
}
const initialState: InitialCartState = {
  cartItems: {},
  open: false,
  wishList: [],
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

      toast.success("Added to cart", { icon: "✅" });
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

      toast.error("removed from cart");
    },
    toggleFromWishList: (state, action: PayloadAction<string>) => {
      const productIndex = state.wishList.indexOf(action.payload);
      if (productIndex === -1) {
        state.wishList.push(action.payload);
      } else {
        let wishlist = [...state.wishList];
        wishlist.splice(productIndex, 1);
        state.wishList = wishlist;
      }
    },
    toggleCart: (state) => {
      state.open = !state.open;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  toggleCart,
  reduceCartItemCount,
  toggleFromWishList,
} = cartSlice.actions;

export const selectCartItems = (state: RootState) =>
  Object.values(state.cart.cartItems);

export const selectCartCount = (state: RootState) =>
  Object.values(state.cart.cartItems).length;

export const selectWishlist = (state: RootState) => state.cart.wishList;

export default cartSlice.reducer;
