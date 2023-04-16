import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import emojiList from "../emojiList.json";
import App from "../App";

describe("emoji-list-render", () => {
  let emojiList;
  beforeEach(() => {
    render(<App />);
    emojiList = [...document.querySelectorAll(".emoji-item")].slice(0, 10);
  });

  test("Emoji list render", () => {
    emojiList.map((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
