const jwt = require("jsonwebtoken");
const User = require('../model/userSchema');

const Authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized: No token provided' });
        }

        const verifyToken = jwt.verify(token, process.env.SECRET__KEY);
        if (!verifyToken) {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }

        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });
        if (!rootUser) {
            return res.status(401).json({ error: 'Unauthorized: User not found' });
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();
    } catch (error) {
        console.error('Authentication error:', error.message);
        return res.status(401).json({ error: 'Unauthorized: Authentication failed' });
    }
}

module.exports = Authenticate;
