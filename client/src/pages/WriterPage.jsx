import {useState} from "react";
import {FaUserCheck} from "react-icons/fa";
import {useParams} from "react-router-dom";
import NoProfile from "../assets/profile.png";
import {
    Button,
    Card,
    Pagination,
    PopularPosts,
    PopularWriters,
} from "../components";
import useStore from "../store";
import {formatNumber} from "../utils";
import {popular, posts, writer} from "../utils/dummyData";

const WriterPage = () => {

    const {user} = useStore();

    const {id} = useParams();
    const numOfPages = 4;
    const [page, setPage] = useState(0);

    const handlePageChange = (val) => {
        setPage(val);

        console.log(val);
    };

    const followerIds = writer.followers.map((f) => fetch.followerId);

    if (!writer)
        return (
            <div className='px-0 2xl:px-20'>
                <div
                    className='w-full md:h-60 flex flex-col gap-5 items-center md:flex-row bg-black dark:bg-gradient-to-r from-[#020b19] via-[#071b3e] to-[#020b19]  mt-5 mb-10 rounded-md p-5 md:px-20'>
                    <img
                        src={writer?.image || NoProfile}
                        alt='Writer'
                        className='w-48 h-48 rounded-full border-4 border-slate-400 object-cover'
                    />

                    <div className='w-full h-full flex flex-col gap-y-5 md:gap-y-8 items-center justify-center'>
                        <h2 className='text-white text-4xl 2xl:text-5xl font-bold'>
                            {writer?.name}
                        </h2>

                        <div className='flex gap-10'>
                            <div className='flex flex-col items-center'>
                                <p className='text-gray-300 text-2xl font-semibold'>
                                    {formatNumber(writer?.followers?.length ?? 0)}
                                </p>
                                <span className='text-gray-500'>Followers</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
};

export default WriterPage;
