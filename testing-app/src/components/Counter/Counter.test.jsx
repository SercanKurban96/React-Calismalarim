import { render, screen, fireEvent } from "@testing-library/react";

import Counter from "./index";
//it komutu da kullanılabilir. it ile test aynı işlevi yapar.

describe("Counter Tests", () => {
  let increaseBtn, decreaseBtn, count;

  beforeEach(() => {
    console.log("Her testten önce çalışacağım!");
    render(<Counter />);
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText("Decrease");
    count = screen.getByText("0");
  });

  beforeAll(() => {
    console.log("İlk başta bir kere çalışacağım!");
  });

  afterEach(() => {
    console.log("Her testten sonra çalışacağım!");
  });

  afterAll(() => {
    console.log("En son bir kere çalışacağım!");
  });

  test("increase btn", () => {
    fireEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  test("decrease btn", () => {
    fireEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});
