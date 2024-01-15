import React, {useEffect, useState} from "react";
import useStore from "../store";
import { COMMENTS } from "../utils/dummyData";
import Button from "./Button";
import {Link, useParams} from "react-router-dom";
import Profile from "../assets/profile.png";
import { Toaster } from "sonner";

const PostComments = ({ postId }) => {
    const { setIsLoading } = useStore();

    const { id } = useParams();
    const [post, setPost] = useState(posts[1]);

    useEffect(() => {
        if (id) {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
    }, [id]);

    if (!post)
        return (
            <div className='w-full h-full py-8 flex items-center justify-center'>
                <span className='text-xl text-slate-500'>Loading...</span>
            </div>
        );

    return (
        <div className='w-full px-0 md:px-10 py-8 2xl:px-20'>
            <div className='w-full flex flex-col-reverse md:flex-row gap-2 gap-y-5 items-center'>
                <div className='w-full md:w-1/2 flex flex-col gap-8'>
                    <h1 className='text-3xl md:text-5xl font-bold text-slate-800 dark:text-white'>
                        {post?.title}
                    </h1>


                </div>
            </div>
        </div>
    );
};

export default PostComments;
