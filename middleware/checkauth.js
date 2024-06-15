

const jwt = require('jsonwebtoken');


const checkAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization; // Bearer <token> so we use split to get the token
        console.log(process.env.JWT_SECRET)
        const decodedToken = jwt.verify(token, 'secretkey');

        console.log(decodedToken)

        req.userData = { userId: decodedToken.userId };
        next();
    } catch (error) {
        res.status(401).json({
            message: 'Authentication failed',
            error: error
        });

    }
}

module.exports = checkAuth