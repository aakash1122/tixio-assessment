import {
  cleanup,
  getAllByTestId,
  getByTestId,
  screen,
} from "@testing-library/react";
import { describe, expect } from "vitest";
import { products } from "@/data";
import { renderWithProviders } from "@/utils/test-utils";
import Cart from ".";
import { CartItems } from "@/store/slices/cartSlice";

const initState = {
  open: true,
  cartItems: {},
  wishList: [],
};

const cartItems: CartItems = {
  abc: {
    ...products[0],
    itemCount: 1,
    id: "abc",
    price: 30,
  },
  asd: {
    ...products[2],
    id: "asd",
    itemCount: 1,
    price: 50,
  },
};

describe("cart", () => {
  afterEach(() => {
    cleanup();
  });

  test("should be empty", () => {
    const { getByText } = renderWithProviders(<Cart />, {
      preloadedState: {
        cart: initState,
      },
    });
    expect(getByText(/No Item in cart/, { exact: true })).toBeTruthy();
  });

  test("should render cart items", () => {
    const { getAllByTestId, getByTestId } = renderWithProviders(<Cart />, {
      preloadedState: {
        cart: {
          ...initState,
          cartItems: cartItems,
        },
      },
    });

    const items = getAllByTestId("cart-item");
    expect(items.length).toBe(2);
    console.log(getByTestId("cart-sub-total"));
    expect(getByTestId("cart-sub-total")).toHaveTextContent("80");
  });
});
