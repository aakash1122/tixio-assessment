import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import Button from "./index";

describe("Button", () => {
  afterEach(() => cleanup());

  it("should render button", () => {
    render(<Button variant="filled">Hello Universe</Button>);
    const elem = screen.getByText("Hello Universe");
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass("bg-primary text-white");
  });

  it("should run function on click", () => {
    const mock = vi.fn();
    render(
      <Button variant="filled" onClick={mock}>
        click
      </Button>
    );
    const elem = screen.getByText("click");
    fireEvent.click(elem);
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("should recieve custom class", () => {
    render(
      <Button variant="filled" css="hello-css">
        click
      </Button>
    );
    const elem = screen.getByText("click");
    expect(elem).toHaveClass("hello-css");
  });
});
