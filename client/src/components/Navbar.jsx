import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
    FaFacebook,
    FaInstagram,
    FaTwitterSquare,
    FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
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

const MobileMenu = ({ user, signOut }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
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


        </div>
    )
}

const Navbar = () => {
    return (
        <div></div>
    );
};
export default Navbar;
