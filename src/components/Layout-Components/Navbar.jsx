import { Link } from "react-router-dom";
import userIcon from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex items-center  justify-between w-11/12 mx-auto my-4 py-2">
              <div></div>
              <div className="flex space-x-4 ">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
              </div>
              <div className="flex gap-2 items-center justify-center">
              <img className="w-[35%] h-[30%]" src={userIcon} alt="" />
              <Link to="/auth/login" className="btn btn-outline bg-black px-4 py-2">Login</Link>
              </div>
            </div>
  );
};

export default Navbar;