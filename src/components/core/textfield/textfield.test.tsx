import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import Textfield from "./index";

describe("Textfield", () => {
  afterEach(() => cleanup());

  test("should render text field", () => {
    render(<Textfield variant="filled" type="text" />);
    const elem = screen.getByRole("textbox");
    expect(elem).toBeInTheDocument();
  });
});
