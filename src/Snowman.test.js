import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

it("renders without crashing", function() {
  render(<Snowman />);
});

it("renders end game on loss", function() {
  const { container, debug } = render(<Snowman words={["apple"]} />);
  // debug();

  // Make 6 wrong guesses
  const wrongLtrArr = ["b","c","d","f", "z", "h"];
  wrongLtrArr.map(l => {fireEvent.click(container.querySelector(`button[value='${l}']`))});

  const nWrong = container.querySelector(".Snowman-nWrong");
  const buttonArea = container.querySelector(".Snowman-btn-area");
  const message = container.querySelector(".Snowman-endgame-msg");

  expect(nWrong).toContainHTML("6");
  expect(buttonArea.getAttribute("style")).toEqual(`visibility: hidden;`);
  expect(message).toContainHTML("You lose");
});

it("matches snapshot", function() {
  const { container } = render(<Snowman />);
  expect(container).toMatchSnapshot();
});