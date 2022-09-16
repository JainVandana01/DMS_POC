import { render } from "@testing-library/react";
import App from "../";

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
  push: jest.fn(),
}));

describe("App", () => {
  it("renders App unchanged", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
