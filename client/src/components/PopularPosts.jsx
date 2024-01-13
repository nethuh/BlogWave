import React from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../utils/dummyData";

const PopularPosts = ({ posts }) => {
    const Card = ({ post }) => {
        let catColor = "";
        CATEGORIES.map((cat) => {
            if (cat.label === post?.cat){
                catColor = cat?.color;
            }
            return null;
        })
    }
    return(
        <div>

        </div>
    );
};

export default PopularPosts;
