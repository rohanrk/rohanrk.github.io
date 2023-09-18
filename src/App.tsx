import * as React from "react";
import { render } from "react-dom";
import Page from "./pages/Page"

const App = () => {
  return <Page />;
};

render(<App />, document.getElementById("root"));
