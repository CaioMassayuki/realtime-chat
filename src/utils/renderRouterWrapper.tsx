import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router";

export const renderRouterWrapper = (Component: React.ReactNode) => {
  const history = createMemoryHistory();
  return {...render(
    <Router location={history.location} navigator={history}>
      {Component}
    </Router>
  ), history};
};
