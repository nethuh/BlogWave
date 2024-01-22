import Verification from "../models/emailVerification.js";
import Followers from "../models/followersModel.js";
import Users from "../models/userModel.js";
import { compareString, createJWT } from "../utils/index.js";
import { sendVerificationEmail } from "../utils/sendEmail.js";

export const OPTVerification = async (req, res, next) => {

}
