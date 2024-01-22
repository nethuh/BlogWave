import mongoose from "mongoose";
import Posts from "../models/postModel.js";
import Users from "../models/userModel.js";
import Views from "../models/viewsModel.js";
import Followers from "../models/followersModel.js";
import Comments from "../models/commentModel.js";
import Post from "../models/postModel.js";


export const stats = async (req, res, next) => {
try {
    const { query } = req.query;
    const { userId } = req.body.user;

    const numofDays = Number(query) || 28;

    const currentDate = new Date();
    const startDate = new Date();
    startDate.setDate(currentDate.getDate() - numofDays);

    const totalPost = await Post.find({
        user: userId,
        createdAt: { $gte: startDate, $lte: currentDate },
    }).countDocuments();

    const totalViews = await Views.find({
        user: userId,
        createdAt: { $gte: startDate, $lte: currentDate },
    }).countDocuments();

    const totalWriters = await Users.find({
        accountType: "Writer",
    }).countDocuments();

    const totalFollowers = await Users.findById(userId);

    const viewStats = await Views.aggregate([
        {
            $match: {
                user: new mongoose.Types.ObjectId(userId),
                createdAt: { $gte: startDate, $lte: currentDate },
            },
        },
        {
            $group: {
                _id: {
                    $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
                },
                Total: { $sum: 1 },
            },
        },
        { $sort: { _id: 1 } },
    ]);

} catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
}
};

export const getFollowers = async (req, res, next) => {}

export const getPostContent = async (req, res, next) => {}

export const createPost = async (req, res, next) => {}

export const commentPost = async (req, res, next) => {}

export const updatePost = async (req, res, next) => {}

export const getPosts = async (req, res, next) => {}

export const getPopularContents = async (req, res, next) => {}

export const getPost = async (req, res, next) => {}

export const getComments = async (req, res, next) => {}

export const deletePost = async (req, res, next) => {}

export const deleteComment = async (req, res, next) => {}
