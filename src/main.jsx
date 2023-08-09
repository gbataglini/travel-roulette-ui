import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./routes/landing";
import ErrorPage from "./routes/error-page";
import Home from "./routes/home";
import Upcoming from "./routes/upcoming";
import History from "./routes/history";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/upcoming",
        element: <Upcoming />,
      },

      {
        path: "/history",
        element: <History />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
