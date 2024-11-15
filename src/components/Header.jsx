import moment from "moment";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(moment().format("h:mm:ss a"));
  const [currentDate, setCurrentDate] = useState(
    moment().format("dddd,  MMMM Do, YYYY")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("h:mm:ss a"));
      setCurrentDate(moment().format("dddd,  MMMM Do, YYYY"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container flex flex-col items-center mx-auto my-4 space-y-2">
      <div className="">
        <img className="w-[300px] bg-white" src={logo} alt="" />
      </div>
      <h2 className="text-gray-500">Journalism Without Fear or Favour</h2>
      <div className="flex gap-4">
        <p>{currentDate}</p>
        <p>Time: {currentTime}</p>
      </div>
    </div>
  );
};

export default Header;
