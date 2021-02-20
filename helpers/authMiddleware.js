const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './config/.env' });

const authMiddleware = (req, res, next) => {
  let token = req.header('auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'You are not authorised' });
  } else {
    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
      if (err) {
        res.status(401).json({ msg: 'fake token' });
        throw err;
      } else {
        req.userId = payload.userId;
        next();
      }
    });
  }
};

module.exports = authMiddleware;
