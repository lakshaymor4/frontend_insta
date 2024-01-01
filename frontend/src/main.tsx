import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import Signup from "./pages/signup.tsx";
import "./index.css";
import Login from "./pages/login.tsx";
import Homepage from "./pages/homepage.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Birthday from "./pages/birthday.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/birthday",
    element: <Birthday />,
  },
  {
    path: "/",
    element: <Homepage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
