import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { TokenProvider } from "../src/component/TokenContext";
import MainPosts from "./pages/MainPosts";
import Login from "./pages/Login";
import AddPosts from "./pages/AddPosts";
import ShowPost from "./pages/ShowPost";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import ErrorBoundary from "./component/ErrorBoundary";
import Registraion from "./pages/Registraion";
import EditPost from "./pages/EditPost"
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "posts",
        element: <MainPosts />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "AddPost",
        element: <AddPosts />
      },
      {
        path: "registraion",
        element: <Registraion />
      },
      {
        path: "editpost/:id",
        element: (
            <EditPost />
        )
      },

      {
        path: "ShowPost/:id",
        element: (
          <ErrorBoundary>
            <ShowPost />
          </ErrorBoundary>
        )
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TokenProvider>
      <RouterProvider router={router} />
    </TokenProvider>
  </StrictMode>
);
