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

    const token = jwt.sign(
      { userId: user._id, email: user.email, rol: user.rol },
      'root',
      { expiresIn: '1h' },
    );

    res.status(200).json({
      token,
      name: user.name,
      email: user.email,
      birthday: user.birthday,
      phone: user.phone,
      password: user.password,
      userInstagram: user.userInstagram,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  logIn,
};
