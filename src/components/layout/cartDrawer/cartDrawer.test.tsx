import { cleanup } from "@testing-library/react";
import { describe, expect } from "vitest";
import { products } from "@/data";
import { renderWithProviders } from "@/utils/test-utils";
import Cart from ".";
import {
  CartItems,
  addToCart,
  reduceCartItemCount,
  removeFromCart,
} from "@/store/slices/cartSlice";

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
    expect(getByTestId("cart-sub-total")).toHaveTextContent("80");
  });

  test("should increament cart item count and subtotal", () => {
    const { getAllByTestId, getByTestId, store } = renderWithProviders(
      <Cart />,
      {
        preloadedState: {
          cart: {
            ...initState,
            cartItems: {
              [products[0].id]: { ...products[0], itemCount: 1 },
              [products[1].id]: { ...products[1], itemCount: 1 },
            },
          },
        },
      }
    );

    const items = getAllByTestId("cart-item");
    expect(items.length).toBe(2);
    expect(getByTestId("cart-sub-total")).toHaveTextContent("300");

    store.dispatch(addToCart(products[0]));
    // cart item should be same
    expect(items.length).toBe(2);
    // total should be increased
    expect(getByTestId("cart-sub-total")).toHaveTextContent("500");
    expect(getByTestId(`${[products[0].id]}-count`)).toHaveTextContent("02");
  });

  test("should increment & decrement item count", () => {
    const { getByTestId, store } = renderWithProviders(<Cart />, {
      preloadedState: {
        cart: {
          ...initState,
          cartItems: {
            [products[0].id]: { ...products[0], itemCount: 1 },
            [products[1].id]: { ...products[1], itemCount: 2 },
          },
        },
      },
    });

    expect(getByTestId("cart-sub-total")).toHaveTextContent("400");
    expect(getByTestId(`${[products[0].id]}-count`)).toHaveTextContent("01");
    expect(getByTestId(`${[products[1].id]}-count`)).toHaveTextContent("02");

    // increase count
    store.dispatch(addToCart(products[0]));
    expect(getByTestId(`${[products[0].id]}-count`)).toHaveTextContent("02");
    expect(getByTestId("cart-sub-total")).toHaveTextContent("600");

    // decrese count
    store.dispatch(reduceCartItemCount(products[1]));
    expect(getByTestId(`${[products[1].id]}-count`)).toHaveTextContent("01");
    expect(getByTestId("cart-sub-total")).toHaveTextContent("500");
    expect(getByTestId(`${products[1].id}-reduce-cart`)).toHaveAttribute(
      "disabled"
    );
  });

  test("should remove item from cart", () => {
    const { getAllByTestId, getByTestId, store } = renderWithProviders(
      <Cart />,
      {
        preloadedState: {
          cart: {
            ...initState,
            cartItems: {
              [products[0].id]: { ...products[0], itemCount: 1 },
              [products[1].id]: { ...products[1], itemCount: 1 },
            },
          },
        },
      }
    );

    const items = getAllByTestId("cart-item");
    expect(items.length).toBe(2);
    expect(getByTestId("cart-sub-total")).toHaveTextContent("300");
    // remove from cart
    store.dispatch(removeFromCart(products[0].id));
    expect(getAllByTestId("cart-item").length).toBe(1);
    expect(getByTestId("cart-sub-total")).toHaveTextContent("100");
  });
});
