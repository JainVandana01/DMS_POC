import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import OrdersBooking from "../../pages/OrdersBooking";
import { useQuery } from "react-query";
import * as api from "../../utils/usersApi";

jest.mock("react-query");

describe("OrdersBooking", () => {
  it("when isloading is true then loading text should be displayed", () => {
    useQuery.mockReturnValue({
      isLoading: true,
      error: null,
      data: null,
    });

    // Act
    render(<OrdersBooking />);

    //Assertion
    const text = screen.queryByTestId("loading-text").innerHTML;
    console.log(text);
    expect(text).toBe("Loading...");
  });

  it("when loading is false and data exist then render list of data", () => {
    //Arrange
    useQuery.mockReturnValue({
      isLoading: false,
      error: null,
      data: [
        {
          name: "Leanne Graham",
          email: "Sincere@april.biz",
          id: 1,
          phone: "1-770-736-8031 x56442",
          username: "Bret",
          website: "hildegard.org",
        },
      ],
    });

    const {debug} =render(<OrdersBooking />);

     debug();

    const text = screen.getAllByTestId("list-item").map((li) => li.textContent);
     console.log("list", text);

    expect(text).toEqual([ 'Leanne Graham11-770-736-8031 x56442BretSincere@april.biz' ]);
  });
});
