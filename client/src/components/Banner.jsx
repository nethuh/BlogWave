import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";

const Banner = ({ post }) => {
    return (
        <div className="w-full mb-10">
            <div className="relative w-full h-[500px] 2xl:h-[600px] flex  px-0 lg:px-20">
                <Link to={`/${post?.slug}/${post?._id}`} className='w-full '>
                    <img src={post?.img}
                         alt='Banner'
                    className="w-full md:w-3/4 h-64 md:h-[420px] 2xl:h-[560px] rounded"/>
                </Link>

                <div className="absolute flex flex-col md:right-10
                bottom-10 md:bottom-2 w-full md:w-2/4 lg:w-1/3 2xl:w-[480px]
                bg-white dark:bg-[[#05132b] shadow-2xl p-5 rounded-lg gap-3"></div>
            </div>
        </div>
    );
};

export default Banner;
