import Markdown from "markdown-to-jsx";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = ({ post, index }) => {
    return (
        <div className='w-full flex flex-col gap-8 items-center rounded md:flex-row'>

            <Link to={`/${post?.slug}/${post._id}`}
            className='w-full h-auto md:h-64 md:w-2/4'
            >
                <img
                src={post?.img}
                alt={post?.title}
                className='object-cover w-full h-full rounded'
                />
            </Link>
        </div>
    );
};
export default Card;
