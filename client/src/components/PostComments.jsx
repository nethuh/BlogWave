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
        <div></div>
    );
};

export default PostComments;
