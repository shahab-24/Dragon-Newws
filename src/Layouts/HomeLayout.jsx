
import Header from "../components/Header";
import Latest from "../components/Latest";

import LeftSide from "../components/Layout-Components/LeftSide";
import Navbar from "../components/Layout-Components/Navbar";
import RightSide from "../components/Layout-Components/RightSide";
import CategoryNews from "../pages/CategoryNews";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      {/* Header */}
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <Latest></Latest>
        </section>
      </header>

      {/* nav bar */}

      <Navbar></Navbar>
      {/* main */}
      <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-2">
        {/* left side bar */}
        <aside className="col-span-3">
          <LeftSide></LeftSide>
        </aside>

        <main className="col-span-6">
          <CategoryNews></CategoryNews>
        </main>

        {/* right sidebar */}
        <aside className="col-span-3">
          <RightSide></RightSide>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
