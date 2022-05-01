const jwt = require("jsonwebtoken");
const User = require('../model/userSchema');

// import Cookies from 'js-cookie';
const Authenticate = async (req, res, next) => {
    try {
        // console.log(req.cookies);
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET__KEY);

        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });
        if (!rootUser) {
            throw new Error(`User not found`);
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();

    } catch (error) {
        console.log(error);
        res.status(401).send('Unauthorized: No token')
    }
}
module.exports = Authenticate;