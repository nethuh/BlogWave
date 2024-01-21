import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, unique: true },
        desc: { type: String },
        img: { type: String },
        cat: { type: String },
    },
);

const Post = mongoose.model("Posts", postSchema);

export default Post;
