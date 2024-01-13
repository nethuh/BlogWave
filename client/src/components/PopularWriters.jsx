import React from "react";
import {Link} from "react-router-dom";
import Profile from "../assets/profile.png";
import {formatNumber} from "../utils";

const PopularWriters = ({data}) => {
    return (
        <div className='w-full flex flex-col gap-8'>
            <p className='text-xl font-bold -mb-3 text-gray-600 dark:text-slate-500'>
                Popular Writers
            </p>
            {data?.map((e1, id) => (
                <Link
                    to={`/writer/${e1?._id}`}
                    key={e1?._id + id}
                    className='flex gap-2 items-center'
                >
                    <img
                        src={e1?.image || Profile}
                        alt={e1?.name}
                        className='w-12 h-12 rounded-full object-cover'
                    />
                    <div className='flex flex-col gap-1'>
                        <span className='text-base font-semibold text-slate-800 dark:text-slate-500'>
                            {e1?.name}
                        </span>
                        <span className='text-rose-800 font-medium'>
                            {formatNumber(e1?.followers)}{" "}
                            <span className='text-gray-600'>Followers</span>
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default PopularWriters;
