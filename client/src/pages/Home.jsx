import { posts } from "../utils/dummyData";

const Home = () => {
  const numOfPages = 4;
  const [page, setPage] = useState(0);

  const randomIndex = Math.floor(Math.random() * posts.length);
  return <div>Home</div>;
};

export default Home;
