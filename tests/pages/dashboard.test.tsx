import { it } from "node:test";
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Dashboard from "../../pages/dashboard";
import { QueryClient, QueryClientProvider } from "react-query";
import { fetchOrderList } from "../../api/fetchFunction";
import axios from "axios";

const queryClient = new QueryClient();
jest.mock("axios");

describe("describe dashboard page", () => {
  test("renders the home page", () => {
    <QueryClientProvider client={queryClient}>
      render(
      <Dashboard />
      );
    </QueryClientProvider>;
  });
});
describe("fetch order list", () => {
  it("fetches successfully data from an API", async () => {
    const data = { name: "Starlink 4-2 (v1.5) & Blue Walker 3" };
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(
      data
    );

    await expect(fetchOrderList).resolves.toEqual(data);
  });

  it("fetches erroneously data from an API", async () => {
    const errorMessage = "Network Error";

    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(
      new Error(errorMessage)
    );

    await expect(fetchOrderList).rejects.toThrow(errorMessage);
  });
});
