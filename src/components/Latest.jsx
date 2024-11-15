import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Latest = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data)=> setCategories(data.data.news_category))
  },[])
  return (
    <div className="flex gap-2 items-center">
      <p className="bg-[#D72050] px-2 py-1 text-white">Latest</p>
      <Marquee pauseOnHover={true} className="bg-base-300 py-2 flex gap-2 space-x-4">
      {
          categories.map(category => <Link className="" key={category.category_id} to="#">
            <button className="btn bg-base-200 border-none text-center w-full" >
            {category.category_name}
          </button>
          </Link>)
        }

      </Marquee>
    </div>
  );
};

export default Latest;