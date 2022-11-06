import { act, renderHook } from "@testing-library/react";
import useChallengeValidation from "./useChallengeValidation";

describe("useChallengeValidation", () => {
  const EMPTY_INITIAL_STATE = {
    champion: "",
    challenger: "",
    specialty: "",
  };
  const CUSTOM_INITIAL_STATE = {
    champion: "champion error",
    challenger: "challenger error",
    specialty: "specialty error",
  };

  it("should handle initial state", () => {
    const { result } = renderHook(() => useChallengeValidation());
    expect(result.current.errors).toStrictEqual(EMPTY_INITIAL_STATE);
  });

  it("should handle custom initial state", () => {
    const { result } = renderHook(() =>
      useChallengeValidation(CUSTOM_INITIAL_STATE)
    );
    expect(result.current.errors).toStrictEqual(CUSTOM_INITIAL_STATE);
  });
  it("should handle resetting input state", () => {
    const { result } = renderHook(() =>
      useChallengeValidation(CUSTOM_INITIAL_STATE)
    );
    act(() => result.current.resetInput("champion"));
    expect(result.current.errors.champion).toBe("");
  });
  it("should handle valid champion name", () => {
    const { result } = renderHook(() => useChallengeValidation());
    act(() => {
      result.current.testInput({ champion: "test champion" });
    });
    expect(result.current.errors.champion).toBe("");
  });
  it("should handle invalid champion name", () => {
    const { result } = renderHook(() => useChallengeValidation());
    act(() => {
      result.current.testInput({ champion: "_çè(-" });
    });
    expect(result.current.errors.champion).toBe("Invalid name !");
  });
});
