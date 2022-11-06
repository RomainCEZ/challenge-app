import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavButton from "../../../components/buttons/NavButton";
import { renderWithProviderAndRoutes } from "../../__utils__/customRenderers";

describe("NavButton", () => {
  it("should display the button label", () => {
    renderWithProviderAndRoutes(<NavButton route={""}>button</NavButton>, {
      path: "/",
    });
    const label = screen.getByText(/button/i);
    expect(label).toBeInTheDocument();
  });
  it("should change the route", async () => {
    const { history } = renderWithProviderAndRoutes(
      <NavButton route={"new-route"}>button</NavButton>,
      {
        path: "/",
      }
    );
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(history.location.pathname).toBe("/new-route");
  });
  it("should get the class", () => {
    renderWithProviderAndRoutes(
      <NavButton route={""} className="test">
        button
      </NavButton>,
      {
        path: "/",
      }
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("test");
  });
});
