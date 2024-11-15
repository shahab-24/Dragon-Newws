import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../components/Login";
import Signup from "../components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={`/category/01`}></Navigate>,
      },
      {

        
          path: "/category/:id",
          element: <CategoryNews></CategoryNews>,
          loader: ({ params }) =>
            fetch(
              `https://openapi.programming-hero.com/api/news/category/${params.id}`
            ),
        
        // path: "/category/:id",
        // element: <CategoryNews></CategoryNews>,
        // loader: ({ params }) =>
        //   fetch(
        //     `https://openapi.programming-hero.com/api/news/category/${params.id}`
        //   ),
        //   if (!respo
        // loader: async ({ params }) => {
        //   const response = await fetch(
        //     `https://openapi.programming-hero.com/api/news/category/${params.id}`
        //   );nse.ok) throw new Error("Data not found");
        //   const data = await response.json();
        //   console.log(data.data)
        //   return data.data; // Access the 'data' field of the response
        // },.
        // loader: async ({ params }) => {
        //   try {
        //     const response = await fetch(
        //       `https://openapi.programming-hero.com/api/news/category/${params.id}`
        //     );
        //     if (!response.ok) throw new Error("Data not found");

        //     const data = await response.json();
        //     console.log("Fetched data:", data.data); // This should print data.data correctly
        //     return data.data || []; // Return only the `data` array here
        //   } catch (error) {
        //     console.error("Error fetching data:", error);
        //     return []; // Return an empty array if there’s an error
        //   }
        // },
      },
    ],
  },
  {
    path: "/news",
    element: <h2>News Layout</h2>,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/signup',
        element: <Signup></Signup>
      }
    ]
  },
  {
    path: "*",
    element: <h2> Error</h2>,
  },
]);

export default router;
