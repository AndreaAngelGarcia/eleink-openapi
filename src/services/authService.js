const jwt = require('jsonwebtoken');

const user = {
  id: 123,
  role: 'admin',
};

const secret = 'secreto-de-tu-aplicacion';

const token = jwt.sign(user, secret, { expiresIn: '1h' });
console.log(token);
