import { fireEvent, render } from "@testing-library/react";
import { Provider } from "jotai";
import Login from "../login";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
  push: jest.fn(),
}));

const inputMock = jest.fn();
const push = jest.fn();

describe("Login", () => {
  it("renders login unchanged", () => {
    const { container } = render(
      <Provider>
        <Login />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render input", () => {
    const { getByTestId } = render(<Login />);
    const field = getByTestId("test-username").querySelector(
      "input"
    ) as HTMLInputElement;
    fireEvent.change(field, { target: { value: "google it" } });
    expect(field.value).toBe("google it");
    const password = getByTestId("test-password").querySelector(
      "input"
    ) as HTMLInputElement;

    fireEvent.change(password, { target: { value: "password" } });
    expect(password.value).toBe("password");
    expect(inputMock.mock.calls).toHaveLength(0);

    const toggle = getByTestId("test-toggle");
    fireEvent.click(toggle);
  });

  it("should render button", () => {
    useRouter.mockImplementationOnce(() => ({
      push,
    }));
    const { getByTestId } = render(<Login />);

    const button = getByTestId("test-login");
    fireEvent.click(button);
  });
});
