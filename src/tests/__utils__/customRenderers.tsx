import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { store } from "../../app/store";
import { NewChallengeProvider } from "../../features/challenge/pages/newChallenge/context/NewChallengeContext";
import inMemoryApi from "./InMemoryApi";

interface TestRenderInfo {
  path: string;
  paramsPath?: string;
}

export const renderWithProvider = (
  children: JSX.Element,
  { path = "/", paramsPath }: TestRenderInfo
) => {
  const history = createMemoryHistory({ initialEntries: [paramsPath || path] });
  return {
    history,
    ...render(
      <Router location={history.location} navigator={history}>
        {children}
      </Router>
    ),
  };
};

export const renderWithProviderAndRoutes = (
  component: JSX.Element,
  { path = "/", paramsPath }: { path: string; paramsPath?: string }
) => {
  return renderWithProvider(
    <Routes>
      <Route path={path} element={component}></Route>
    </Routes>,
    { path, paramsPath }
  );
};

export const renderWithNewChallengeContext = (children: JSX.Element) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <NewChallengeProvider api={inMemoryApi}>
          {children}
        </NewChallengeProvider>
      </BrowserRouter>
    </Provider>
  );
};
