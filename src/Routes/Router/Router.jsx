import { createBrowserRouter } from "react-router";
import HomeLayouts from "../../Layouts/HomeLayouts/HomeLayouts";
import Home from "../../Pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;
