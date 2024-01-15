import React, { useState } from "react";
import useStore from "../store";
import { COMMENTS } from "../utils/dummyData";
import Button from "./Button";
import { Link } from "react-router-dom";
import Profile from "../assets/profile.png";
import { Toaster } from "sonner";

const PostComments = ({postId}) => {
    const { user } = useStore();
    const [comments, setComments] = useState(COMMENTS);
    const [desc, setDesc] = useState("");

    const handleDeleteComment = async (id) => {};

    return (
        <div className='w-full py-10'>
            <p className='text-lg text-slate-700 dark:text-slate-500 mb-6'>
                Post Comments
            </p>

            {user?.token ? (
                <form className='flex flex-col mb-6'>
                    <textarea
                        name='desc'
                        onChange={(e) => setDesc(e.target.value)}
                        value={desc}
                        required={true}
                        placeholder='Add a comment...'
                        className='bg-transparent w-full p-2 border border-gray-300 focus:outline-none focus:border-blue-600  focus:ring-blue-600 rounded'
                    ></textarea>

                    <div className='w-full flex justify-end mt-2'>

                    </div>
                </form>
            )}
        </div>
    )
};

export default PostComments;
