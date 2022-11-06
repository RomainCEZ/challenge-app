import { screen } from "@testing-library/react";
import { renderWithNewChallengeContext } from "../../../../tests/__utils__/customRenderers";
import NewChallenge from "./NewChallenge";

describe("NewChallenge", () => {
  it("should render", () => {
    renderWithNewChallengeContext(<NewChallenge />);
    const text = screen.getByText(/Claim your superiority !/i);
    expect(text).toBeInTheDocument();
  });
});
