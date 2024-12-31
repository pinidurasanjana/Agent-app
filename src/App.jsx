import "./pages/layout/layout.scss";
import Homepage from "./pages/homepage/homepage";
import ListPage from "./pages/ListPages/listPage";
import SinglePage from "./pages/singlepage/singlepage";
import ProfilePage from "./pages/profilePage/profilePage";
import ProfileUpdatePage from "./pages/updateprofile/edit";
import AboutPage from "./pages/AboutPage/about";
import ServicesPage from "./pages/servicepage/service";
import ContactPage from "./pages/contactpage/contact";
import Layout from "./pages/layout/layout";
import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



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
          element: <ListPage />,
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
          path:"/edit",
          element:<ProfileUpdatePage/>
        },
        {
          path:"/about",
          element:<AboutPage/>
        },
        {
          path:"/services",
          element:<ServicesPage/>
        },
        {
          path:"/contact",
          element:<ContactPage/>
        }
        
      ]

    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
