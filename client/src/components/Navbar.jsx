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



const Navbar = () => {
    return (
        <div></div>
    );
};
export default Navbar;
