import { Link } from "react-router-dom";
import Header from "../components/Header";
import Latest from "../components/Latest";
import userIcon from '../assets/user.png'
import LeftSide from "../components/Layout-Components/LeftSide";

const HomeLayout = () => {
  
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                <Latest></Latest>
                </section>
            </header>
            <nav className="flex items-center  justify-between w-11/12 mx-auto my-4 py-2">
              <div></div>
              <div className="flex space-x-4 ">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
              </div>
              <div className="flex gap-2">
              <img src={userIcon} alt="" />
              <button className="btn btn-outline bg-black px-4 py-2">Login</button>
              </div>
            </nav>
            <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-2">
              <aside className="col-span-3">
                <LeftSide></LeftSide>
              </aside>
              <main className="col-span-6"> main</main>
              <aside className="col-span-3">
                right side
              </aside>
            </main>
        </div>
    );
};

export default HomeLayout;