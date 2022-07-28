import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import Badge from "./index";

describe("Textfield", () => {
  afterEach(() => cleanup());

  test("should render badge with value of 10", () => {
    render(<Badge count={10} />);
    const elem = screen.getByTestId("badge-count");
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveTextContent("10");
  });

  test("should fire funciton on click", () => {
    const clickFn = vi.fn();
    render(<Badge count={10} onClick={clickFn} />);
    const elem = screen.getByTestId("badge-count");
    fireEvent.click(elem);
    expect(clickFn).toHaveBeenCalledOnce();
  });
});
