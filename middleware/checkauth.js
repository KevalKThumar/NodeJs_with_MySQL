

const jwt = require('jsonwebtoken');


const checkAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization; // Bearer <token> so we use split to get the token
        console.log(token)
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        req.userData = decodedToken;
        next();
    } catch (error) {
        res.status(401).json({
            message: 'Authentication failed',
            error: error
        });

    }
}

module.exports = checkAuth