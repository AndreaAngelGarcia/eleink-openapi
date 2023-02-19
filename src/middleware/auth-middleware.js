const jwt = require('jsonwebtoken');
const User = require('../models/user');

const secret = '1234';

/* const authMiddleware = async (req, res, next) => {
  // Obtener el token de la solicitud
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'No se proporcionó un token de autenticación.' });
  }

  try {
    // Verificar el token con la clave secreta
    const decodedToken = jwt.verify(token, secret);

    // Buscar al usuario correspondiente al ID del token en la base de datos
    const user = await User.findById(decodedToken.userId);

    // Si no se encontró ningún usuario con ese ID, devolver un error 401
    if (!user) {
      return res.status(401).json({ message: 'El usuario no está registrado.' });
    }

    // Adjuntar el usuario al objeto de la solicitud para que los controladores puedan utilizarlo
    req.user = user;

    // Llamar a la siguiente función en la cadena de middlewares
    next();
  } catch (err) {
    // Si el token no es válido, devolver un error 401
    return res.status(401).json({ message: 'El token de autenticación no es válido.' });
  }
};

module.exports = {
  authMiddleware,
};

*/
