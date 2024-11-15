import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data)=> setCategories(data.data.news_category))
  },[])
  return (
    <div>
      <h2 className="font-semibold mb-2">All Category</h2>
      <div className="flex flex-col  gap-2">
        {
          categories.map(category => 
            <NavLink key={category.category_id}  to={`/category/${category.category_id}`} className="btn bg-base-200 border-none text-center w-full" >
            {category.category_name}
          </NavLink>
        )
        }
      </div>
    </div>
  );
};

export default LeftSide;