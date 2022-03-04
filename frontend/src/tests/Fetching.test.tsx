import "@testing-library/jest-dom/extend-expect";

import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { App } from "../App";
import { data } from "./warehouses";

// setup a server for test-fetching
const server = setupServer(
  rest.get("https://cognizanttesting.herokuapp.com/", (req, res, ctx) => {
    return res(ctx.json(data));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const MockApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

test("basic app fetching test", async () => {
  render(<MockApp />);

  const out = await waitFor(() => screen.findByTestId(`listitem-1`));
  // expects out element to be in the document
  expect(out).toBeInTheDocument();
});
