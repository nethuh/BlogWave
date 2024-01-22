import Verification from "../models/emailVerification.js";
import Followers from "../models/followersModel.js";
import Users from "../models/userModel.js";
import {compareString, createJWT} from "../utils/index.js";
import {sendVerificationEmail} from "../utils/sendEmail.js";

export const OPTVerification = async (req, res, next) => {
    try {
        const {userId, otp} = req.params;

        const result = await Verification.findOne({userId});

        const {expiresAt, token} = result;

        // token has expired, delete token
        if (expiresAt < Date.now()){
            await Verification.findOneAndDelete({ userId });

            const message = "Verification token has expired.";
            res.status(404).json({ message });
        } else {
            const isMatch = await compareString(otp, token);

            if (isMatch) {
                await Promise.all([
                    Users.findOneAndUpdate({_id: userId}, {emailVerified: true}),
                    Verification.findOneAndDelete({userId}),
                ]);

                const message = "Email verified successfully";
                res.status(200).json({ message });

            } else {
                const message = "Verification failed or link is invalid";
                res.status(404).json({ message });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({message: "Something went wrong"});
    }
};


