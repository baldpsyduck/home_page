import { RouteObject } from "react-router-dom";
import Home from "./Page/HomePage";

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  }
];