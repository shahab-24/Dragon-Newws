import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Latest = () => {
  return (
    <div className="flex gap-2">
      <p className="bg-[#D72050] px-2 py-1 text-white">Latest</p>
      <Marquee pauseOnHover={true} className="bg-base-300 py-2">
<Link to='/news'>Lorem ipsum dolor sit amet, consectetur</Link>
<Link to='/news'>Lorem ipsum dolor sit amet,.</Link>
<Link to='/news'>Lorem ipsum dolor sit amet, consectetur adipisicing .</Link>
      </Marquee>
    </div>
  );
};

export default Latest;