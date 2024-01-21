import Users from "../models/userModel.js";


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

