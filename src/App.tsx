import * as React from "react";
import { createRoot } from "react-dom/client";
import Banner from "./component/Banner";
import Sidebar from "./component/Sidebar";
import { PageType } from "./util/types";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Todo from "./pages/Todo";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
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
        element: <Career />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:post",
        element: <Post />,
        loader: async ({ params }) => {
          return fetch(`/posts/markdown/${params.post}.md`).then(response => response.text());
        },
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
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  }
}

function Layout(): React.ReactElement {
  return (
    <div id="container">
      <Sidebar />
      <Banner text="Rohan's Personal Site" />
      <Outlet />
    </div>
  );
}
1
createRoot(document.getElementById("root")!).render(<App />)