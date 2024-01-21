import Users from "../models/userModel.js";
import { compareString, createJWT, hashString } from "../utils/index.js";
import {sendVerificationEmail} from "../utils/sendEmail.js";

export const register = async (req, res, next) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            image,
            accountType,
            provider,
        } = req.body;

        //validate fileds
        if (!(firstName || lastName || email || password)) {
            return next("Provide Required Fields!");
        }

        if (accountType === "Writer" && !image)
            return next("Please provide profile picture");

        const userExist = await Users.findOne({ email });

        if (userExist) {
            return next("Email Address already exists. Try Login");
        }

        const hashedPassword = await hashString(password);

        const user = await Users.create({
            name: firstName + " " + lastName,
            email,
            password: !provider ? hashedPassword : "",
            image,
            accountType,
            provider,
        });

        user.password = undefined;

        const token = createJWT(user?._id);

        //send email verification if account type is writer
        if (accountType === "Writer"){
            sendVerificationEmail(user, res, token);
        }else {
            res.status(201).json({
                success: true,
                message: "Account created successfully",
                user,
                token,
            });
        }

    }catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
};

export const googleSignUp = async (req, res, next) => {
    try {
    }catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
};

export const login = async (req, res, next) => {
    try {
    }catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
};

