const { loginUser } = require('../services/authService');

const loginController = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const { token, user } = await loginUser(username, password);
    res.status(200).json({ token, user });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  loginController,
};
