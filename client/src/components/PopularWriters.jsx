import React from "react";
import { Link } from "react-router-dom";
import Profile from "../assets/profile.png";
import { formatNumber } from "../utils";

const PopularWriters = ({ data }) => {
    return (
        <div className='w-full flex flex-col gap-8'>
            <p className='text-xl font-bold -mb-3 text-gray-600 dark:text-slate-500'>
                Popular Writers
            </p>
            {data?.map((e1,id) => (
                <Link
                    to={`/writer/${el?._id}`}
                    key={el?._id + id}
                    className='flex gap-2 items-center'
                >
            ))}

        </div>
    );
};

export default PopularWriters;
