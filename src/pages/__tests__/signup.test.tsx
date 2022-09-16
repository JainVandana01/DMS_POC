import { fireEvent, render } from "@testing-library/react";
import { Provider } from "jotai";
import Signup from "../signup";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
  push: jest.fn(),
}));

const push = jest.fn();

describe("Signup", () => {
  it("renders Signup unchanged", () => {
    const { container } = render(
      <Provider>
        <Signup />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render input", () => {
    const { getByTestId } = render(<Signup />);
    const name = getByTestId("test-name").querySelector(
      "input"
    ) as HTMLInputElement;
    fireEvent.change(name, { target: { value: "name" } });
    expect(name.value).toBe("name");

    const email = getByTestId("test-email").querySelector(
      "input"
    ) as HTMLInputElement;
    fireEvent.change(email, { target: { value: "email" } });
    expect(email.value).toBe("email");

    const password = getByTestId("test-password").querySelector(
      "input"
    ) as HTMLInputElement;

    fireEvent.change(password, { target: { value: "password" } });
    expect(password.value).toBe("password");

    const toggle = getByTestId("test-toggle");
    fireEvent.click(toggle);
  });

  it("should render button", () => {
    useRouter.mockImplementationOnce(() => ({
      push,
    }));
    const { getByTestId } = render(<Signup />);
    const button = getByTestId("test-signup");
    fireEvent.click(button);
  });
});
