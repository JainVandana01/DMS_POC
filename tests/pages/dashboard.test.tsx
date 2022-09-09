import { it } from "node:test";
import React from "react";
import "@testing-library/jest-dom";

const MockData = [
  { label: "Pre-Booking", id: 1 },
  { label: "Order-Booking", id: 2 },
  { label: "Payment Receipts", id: 3 },
  { label: "Booking Follow-up", id: 4 },
  { label: "Contract Managment", id: 5 },
  { label: "Statement of Account", id: 6 },
  { label: "Allotment", id: 7 },
  { label: "PDI", id: 8 },
];

describe("The dashboard Page", () => {
  // it("Dashboard Page renders correctly", () => {
  //   const { container } = render(<Home />);

  //   // const heading = screen.getByRole("heading", {
  //   //   name: /welcome to next\.js!/i,
  //   // });

  //   // expect(heading).toBeInTheDocument();

  //   // expect(container).toMatchSnapshot();
  // });
  it("render order list correctly", () => {
    jest.mock("react-query", () => ({
      useQuery: jest.fn().mockReturnValue({
        data: { ...MockData },
        isLoading: false,
        error: {},
      }),
    }));
  });
});
