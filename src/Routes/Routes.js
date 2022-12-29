import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTask from "../Pages/AddTask";
import CompletedTask from "../Pages/CompletedTask";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyTasks from "../Pages/MyTasks";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path : "/add-task",
        element : <PrivateRoute><AddTask/></PrivateRoute>
      },
      {
        path : "/my-tasks",
        element : <PrivateRoute><MyTasks /></PrivateRoute>
      },
      {
        path : "/completed-tasks",
        element : <PrivateRoute><CompletedTask /></PrivateRoute>
      },
    ],
  },
]);

export default routes;
