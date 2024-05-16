import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./Pages/Home";
import MenuPage from "./Pages/MenuPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
       {
        path:'/',
        element:<Home></Home>
       },
       {
        path:'/menu',
        element:<MenuPage></MenuPage>
       },
      ]
    },
  ]);
export default router;