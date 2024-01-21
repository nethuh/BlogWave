import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

export const hashString = async (userValue) => {
    const salt = await bcrypt.genSalt(10);

    const hashedpassword = await bcrypt.hash(userValue, salt);
    return hashedpassword;
};

export const compareString = async (userPassword, password) => {
    try {
        const isMatch = await bcrypt?.compare(userPassword, password);
        return isMatch;
    } catch (error) {
        console.log(error);
    }
};


