import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GlassButton from "../../../components/buttons/GlassButton";

describe("GlassButton", () => {
  it("should display the button label", () => {
    render(<GlassButton>button</GlassButton>);
    const label = screen.getByText(/button/i);
    expect(label).toBeInTheDocument();
  });
  it("should call the function", async () => {
    const callback = jest.fn();
    render(<GlassButton handleClick={callback}>button</GlassButton>);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(callback).toHaveBeenCalled();
  });
  it("should not call the function", async () => {
    const callback = jest.fn();
    render(
      <GlassButton handleClick={callback} disabled={true}>
        button
      </GlassButton>
    );
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(callback).not.toHaveBeenCalled();
  });
  it("should get the class", () => {
    render(<GlassButton className="test">button</GlassButton>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("test");
  });
});
