const jwt = require('jsonwebtoken');

const JWT_SECRET = 'root';

function signToken(payload) {
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }); // El token expirará en 1 hora
  return token;
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error('Token inválido');
  }
}

module.exports = { signToken, verifyToken };
