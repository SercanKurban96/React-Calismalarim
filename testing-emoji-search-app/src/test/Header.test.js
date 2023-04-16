import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("Header Test", () => {
  let emojiSearch;
  beforeEach(() => {
    render(<App />);
    emojiSearch = screen.getByText("Emoji Search");
  });

  test("Document should be have HeaderComponent", () => {
    expect(emojiSearch).toBeInTheDocument();
  });
});
