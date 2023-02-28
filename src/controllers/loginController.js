/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function logIn(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ message: 'El usuario o la contraseña es incorrecta' });
    }

    /* const isPasswordValid = await (user.password);

    if (!isPasswordValid === password) {
      return res.status(401).json({ message: 'La contraseña no es correcta' });
    } */

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
    );

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  logIn,
};
