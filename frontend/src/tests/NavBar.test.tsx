import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { NavBar } from "../components";

const MockApp = () => {
  return (
    <BrowserRouter>
      <NavBar cartLength={1} hide={false} setHide={jest.fn()} />
    </BrowserRouter>
  );
};

test("basic navbar checkbox test", async () => {
  render(<MockApp />);
  const checkbox = screen
    .getByTestId("checkbox")
    // eslint-disable-next-line testing-library/no-node-access
    .querySelector('input[type="checkbox"]');
  // check if the state is not checked
  expect(checkbox).not.toBeChecked();
});

test("basic links test", async () => {
  render(<MockApp />);
  let link = screen.getByTestId("link");

  //   check if the element is in the doc and has attr href
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href");
});
