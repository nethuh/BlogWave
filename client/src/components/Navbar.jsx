import React, {useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {
    FaFacebook,
    FaInstagram,
    FaTwitterSquare,
    FaYoutube,
} from "react-icons/fa";
import {Link} from "react-router-dom";
import useStore from "../store";
import Button from "./Button";
import Logo from "./Logo";
import ThemeSwitch from "./Switch";

function getInitials(fullName) {
    const names = fullName.split(" ");

    const initials = names.slice(0, 2).map((name) => name[0].toUpperCase());

    const initialsStr = initials.join("");

    return initialsStr;
}

const MobileMenu = ({user, signOut}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='flex'>
            <button
                onClick={toggleMenu}
                className='lg:hidden p-2 text-gray-600 hover:text-gray-800'
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>
            {isMenuOpen && (
                <div
                    className='fixed top-0 left-0 w-full h-fit bg-white dark:bg-[#020b19] z-50 flex flex-col py-10 items-center justify-center shadow-xl gap-8'>
                    <Logo/>
                    <ul className='flex flex-col gap-4 text-base text-black dark:text-gray-300'>
                        <li className={toggleMenu}>
                            <Link to='/'>Home</Link>
                        </li>
                        <li onClick={toggleMenu}>
                            <Link to='/'>Contact</Link>
                        </li>
                        <li onClick={toggleMenu}>
                            <Link to='/'>About</Link>
                        </li>
                    </ul>
                    <div className='flex gap-2 items-center'>
                        {user?.token ? (
                            <div className='w-full flex  flex-col items-center justify-center '>
                                <div className='flex gap-1 items-center mb-5'>
                                    {user?.user.image ? (
                                        <img
                                            src={user?.user.image}
                                            alt='Profile'
                                            className='w-8 h-8 rounded-full'
                                        />
                                    ) : (
                                        <span
                                            className='text-white w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center'>
                      {getInitials(user?.user.name)}
                    </span>
                                    )}
                                    <span className='font-medium text-black dark:text-gray-500'>
                    {user?.user.name}
                  </span>
                                </div>

                                <button
                                    className='bg-black dark:bg-rose-600 text-white dark:text-white px-8 py-1.5 rounded-full text-center outline-none'
                                    onClick={() => signOut()}
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link to='/sign-in'>
                                <Button
                                    label='Sign in'
                                    styles='flex items-center justify-center bg-black dark:bg-rose-600 text-white dark:text-white text-white px-4 py-1.5 rounded-full'
                                />
                            </Link>
                        )}
                    </div>
                </div>
            )}

        </div>
    )
}

const Navbar = () => {
    return (
        <div></div>
    );
};
export default Navbar;
