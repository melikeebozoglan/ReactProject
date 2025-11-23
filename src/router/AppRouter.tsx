//AppRouter
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { Home, Detail } from "../views";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/detail/:cityName",
        element: <Detail />,
      },
    ],
  },
]);