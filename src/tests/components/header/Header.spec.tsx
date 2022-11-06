import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Header from "../../../components/header/Header";
import { renderWithProviderAndRoutes } from "../../__utils__/customRenderers";

describe("header", () => {
  it("should display the header title", () => {
    render(<Header />, { wrapper: BrowserRouter });
    const title = screen.getByText(/I Challenge You !/i);
    expect(title).toBeInTheDocument();
  });
  it("should redirect to home page", async () => {
    const { history } = renderWithProviderAndRoutes(<Header />, {
      path: "/random-route",
      paramsPath: "/random-route",
    });

    const title = screen.getByRole("link");
    await userEvent.click(title);
    expect(history.location.pathname).toBe("/");
  });
});
