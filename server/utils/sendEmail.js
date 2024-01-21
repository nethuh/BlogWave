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

