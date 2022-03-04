import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";

import { SingleItem } from "../components";

test("basic single item test", async () => {
  render(
    <BrowserRouter>
      <SingleItem
        car={{
          _id: 1,
          make: "Volkswagen",
          model: "Jetta III",
          year_model: 1995,
          price: 12947.52,
          licensed: true,
          date_added: "2018-09-18",
        }}
        hide={false}
      />
    </BrowserRouter>
  );

  // check if the component is in the document
  const out = await waitFor(() => screen.findByTestId(`listitem-1`));
  expect(out).toBeInTheDocument();
});
