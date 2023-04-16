import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("Emoji Filter", () => {
  let emojiFilter;
  beforeEach(() => {
    render(<App />);
    emojiFilter = screen.getByLabelText("inputTest");
  });

  test("render after filter", () => {
    const emoji = "Laughing";
    fireEvent.click(emojiFilter, emoji);
    expect(screen.getByText(emoji)).toBeInTheDocument();
  });
});
