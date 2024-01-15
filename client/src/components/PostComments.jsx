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
        <div></div>
    )
};

export default PostComments;
