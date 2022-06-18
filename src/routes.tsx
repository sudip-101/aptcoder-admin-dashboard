import { RouteObject } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Home from "./containers/Home/Home";
import Users from "./containers/Users/Users";
import Schedule from "./containers/Schedule/Schedule";
import PowerConsumption from "./containers/PowerConsumption/PowerConsumption";

const routeConfig: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/rooms",
        element: <h3>Room</h3>,
      },
      {
        path: "/settings",
        element: <h3>Settings</h3>,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/scenes",
        element: <h3>Scenes</h3>,
      },
      {
        path: "/power-consumption",
        element: <PowerConsumption />,
      },
    ],
  },
];

export default routeConfig;
