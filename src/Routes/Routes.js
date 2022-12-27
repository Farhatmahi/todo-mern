import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default routes;
