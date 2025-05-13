const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token) return res.status(401).json({ message : "Access Denied! No Token Provided."});

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message : "Invalid or expired token"});
    }
}

module.exports = verifyToken;