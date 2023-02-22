const { verifyToken } = require('../services/authService');

const verifyTokenController = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = verifyToken(token);
    req.user = decodedToken;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  verifyTokenController,
};
