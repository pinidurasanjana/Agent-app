import "./pages/layout/layout.scss";
import Homepage from "./pages/homepage/homepage";
import ListPage from "./pages/ListPages/listPage";
import SinglePage from "./pages/singlepage/singlepage";
import ProfilePage from "./pages/profilePage/profilePage";
import Login from "./pages/Login/loginpage";
import Register from "./pages/Register/register";
import ProfileUpdatePage from "./pages/updateprofile/edit";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/layout/layout";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Homepage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/edit",
          element:<ProfileUpdatePage/>
        }
      ]

    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
