import { useState } from "react";
import { FaUserCheck } from "react-icons/fa";
import { useParams } from "react-router-dom";
import NoProfile from "../assets/profile.png";
import {
  Button,
  Card,
  Pagination,
  PopularPosts,
  PopularWriters,
} from "../components";
import useStore from "../store";
import { formatNumber } from "../utils";
import { popular, posts, writer } from "../utils/dummyData";

const WriterPage = () => {
  return <div>WriterPage</div>;
};

export default WriterPage;
