import { Outlet } from "react-router-dom";
import Navbar from "../components/Layout-Components/Navbar";

const AuthLayout = () => {
  return (
    <div className="w-11/12 mx-auto font-poppins bg-[#F3F3F3]">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;