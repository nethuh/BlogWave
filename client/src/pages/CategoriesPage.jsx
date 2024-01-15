import { useState } from "react";
import { Card, Pagination, PopularPosts, PopularWriters } from "../components";
import { popular, posts } from "../utils/dummyData";

const CategoriesPage = () => {
  const query = new URLSearchParams(window.location.search).get("cat");
  const numOfPages = 4;
  const [page, setPage] = useState(0);

  const handlePageChange = (val) => {
    setPage(val);

    console.log(val);
  }
  return (
      <div className='px-0 2xl:px-20'>
        <div className='py-5'>
          <h2 className='text-4xl 2xl:text-5xl font-semibold text-slate-800 dark:text-white'>
            {query}
          </h2>
        </div>
      </div>
  );
};

export default CategoriesPage;
