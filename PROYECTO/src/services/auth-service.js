const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { logger } = require('../utils');

const generateToken = user => {
  const payload = {
    sub: user.id,
    iat: Date.now(),
    exp: Date.now() + 1000 * 60 * 60 * 24 * 7, // Token válido por 7 días
    role: user.admin, // aquí se incluiría el rol del usuario en el token
  };
  logger.info(payload);
  return jwt.sign(payload, process.env.JWT_SECRET);
};

const verifyToken = token => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    throw new Error('Invalid token');
  }
};

const loginUser = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('User not found');
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error('Invalid password');
  }
  const token = generateToken(user);
  return { token, user };
};

module.exports = {
  loginUser,
  verifyToken,
};
