import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./Pages/Home";
import MenuPage from "./Pages/MenuPage";
import Order from "./Pages/Order";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import PrivateRoute from "./Routes/PrivateRoute";
import Secret from "./Pages/Secret";

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
       {
        path:'/order/:category',
        element:<Order></Order>
       },
       {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: <PrivateRoute><Secret></Secret></PrivateRoute>,
      },
      ]
    },
   /*  {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/signup",
      element: <SignUp></SignUp>,
    }, */
  ]);
export default router;