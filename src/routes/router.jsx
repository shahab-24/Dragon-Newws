import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";


const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>
    },
    {
        path:'/news',
        element: <h2>News Layout</h2>
    },
    {
        path:'/auth',
        element: <h2> Login</h2>
    },
    {
        path:'*',
        element: <h2> Error</h2>
    },
    
])

export default router;