import * as React from "react";
import { render } from "react-dom";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import { PageType } from "./util/types";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/career",
        element: <Todo />,
      },
      {
        path: "/projects",
        element: <Todo />,
      },
      {
        path: "/art",
        element: <Todo />,
      },
    ],
  },
]);

interface AppProps {}

interface AppState {
  page: PageType;
}

class App extends React.Component {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      // <React.StrictMode>
      //   <RouterProvider router={router} />
      // </React.StrictMode>
      <Home />
    );
  }
}

function Layout(): React.ReactElement {
  return (
    <div id="container">
      <Sidebar />
      <Header title="Rohan's Personal Site" />
      <Outlet />
    </div>
  );
}

render(<App />, document.getElementById("root"));
