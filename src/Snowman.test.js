import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

it("renders without crashing", function() {
  render(<Snowman />);
});

it("renders end game on loss", function() {
  const { container, debug } = render(<Snowman />);
  // debug();

  // Make 6 wrong guesses
  const guess = container.querySelector("button[value='z']");
  // debug(guess);
  fireEvent.click(guess);
  fireEvent.click(guess);
  fireEvent.click(guess);
  fireEvent.click(guess);
  fireEvent.click(guess);
  fireEvent.click(guess);

  const nWrong = container.querySelector(".Snowman-nWrong");
  const buttonArea = container.querySelector(".Snowman-btn-area");
  const message = container.querySelector(".Snowman-endgame-msg");

  expect(nWrong).toContainHTML("6");
  expect(buttonArea.getAttribute("visibility")).toEqual("hidden");
  expect(message).toContainHTML("You lose");
});

it("matches snapshot", function() {
  const { container } = render(<Snowman />);
  expect(container).toMatchSnapshot();
});