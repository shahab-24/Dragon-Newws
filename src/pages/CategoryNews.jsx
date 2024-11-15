import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
// const  data = useLoaderData();
//   console.log(data);
const { data: news } = useLoaderData() || [];
  console.log(news);
  
  return <div>category</div>;
};

export default CategoryNews;
