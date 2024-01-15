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
      <div>CategoriesPage</div>
  );
};

export default CategoriesPage;
