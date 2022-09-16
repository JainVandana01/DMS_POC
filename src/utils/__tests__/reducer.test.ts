import { act, renderHook } from "@testing-library/react-hooks";
import { useAtom } from "jotai";
import { loginReducer } from "../reducer";

test("should increment counter", () => {
  const { result } = renderHook(() => useAtom(loginReducer));

  act(() => {
    result.current[1]("INCREASE");
  });
  expect(result.current[0]).toBe(1);

  act(() => {
    result.current[1]("DECREASE");
  });
  expect(result.current[0]).toBe(0);

  act(() => {
    result.current[1](undefined);
  });
  expect(result.current[0]).toBe(0);
});
