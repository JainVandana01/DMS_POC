import { render } from "@testing-library/react";
import CustomerDetails from "../customerDetails";

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
  push: jest.fn(),
}));

describe("App", () => {
  it("renders App unchanged", () => {
    const { container } = render(<CustomerDetails />);
    expect(container).toMatchSnapshot();
  });
});
