import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Header } from "./navbar";
import { renderWithProviders } from "../../utils/test-utils";
import { products } from "../../data";
// import store from "../../store";
import { addToCart, removeFromCart } from "../../store/slices/cartSlice";

describe("Header", () => {
  test("should render badge count ", () => {
    const state = {
      cart: {
        wishList: ["1", "2", "3"],
        cartItems: {
          dsafds: {
            ...products[0],
            itemCount: 1,
          },
        },
        open: false,
      },
    };
    renderWithProviders(<Header />, {
      preloadedState: state,
    });
    // 3 for the wishlist
    expect(screen.getByText(/03/)).toBeInTheDocument();
    // 1 for the cart
    expect(screen.getByText(/01/)).toBeInTheDocument();
  });

  test("should update badge count on action", async () => {
    const { store } = renderWithProviders(<Header />);

    store.dispatch(addToCart(products[0]));
    const cartCount = await screen.findByTestId("cart-count");
    expect(cartCount).toBeInTheDocument();

    store.dispatch(addToCart(products[1]));
    expect(cartCount).contains(/02/);

    store.dispatch(removeFromCart(products[0].id));
    expect(cartCount).contains(/01/);
  });

  test("should not update badge count", () => {
    const { store } = renderWithProviders(<Header />);

    expect(screen.queryByText("cart-count")).toBe(null);
    store.dispatch(addToCart(products[0]));

    const cartCount = screen.findByTestId("cart-count");
    expect(cartCount).contains(/01/);
    // adding same element
    store.dispatch(addToCart(products[0]));
    expect(cartCount).contains(/01/);
  });
});
