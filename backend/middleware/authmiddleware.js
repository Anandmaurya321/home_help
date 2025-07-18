

const jwt = require('jsonwebtoken');
const jwtKey = 'HomeHelp';

const verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];

    if (token) {
        token = token.split(' ')[1];  // Bearer <token>
        jwt.verify(token, jwtKey, (err, decoded) => {
            if (err) {
                return res.status(401).send({ result: 'Send valid token' });
            } else {
                req.user = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({ result: 'Please send token' });
    }
};

module.exports = verifyToken;
// we are exporting a function 
