import { posts } from "../utils/dummyData";
import {useState} from "react";
import {Banner} from "../components"

const Home = () => {
  const numOfPages = 4;
  const [page, setPage] = useState(0);

  const randomIndex = Math.floor(Math.random() * posts.length);


  if (posts.length < 1)
    return  (
        <div className="w-full h-full px-8 flex
  place-items-center justify-center">
    <span className="text-lg text-slate-500">No Post Available</span>
  </div>
    );
  return <div className="py-10 2xl:py-5">
    <Banner post ={posts[randomIndex]}/>
  </div>;
};

export default Home;
