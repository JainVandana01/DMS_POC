import { it } from "node:test";
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "../../pages/index";

describe("The dashboard Page", () => {
  it("Dashboard Page renders correctly", () => {
    const { container } = render(<Home />);

    // const heading = screen.getByRole("heading", {
    //   name: /welcome to next\.js!/i,
    // });

    // expect(heading).toBeInTheDocument();

    // expect(container).toMatchSnapshot();
  });
});
