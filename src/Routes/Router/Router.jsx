import { createBrowserRouter } from "react-router";
import HomeLayouts from "../../Layouts/HomeLayouts/HomeLayouts";
import Home from "../../Pages/Home/Home/Home";
import Trending from "../../Pages/Home/Trending/Trending";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/trending",
        element: <Trending></Trending>,
      },
    ],
  },
]);
export default router;
