const express = require('express');
// const authMiddleware = require('../middleware/auth-middleware');

const { rootController } = require('../controllers');
const UserRouter = require('./user');
const BookingRouter = require('./booking');
const smtpController = require('../controllers/smtp');

const router = express.Router();

router.post('/', rootController);
router.use('', UserRouter);
router.use('/booking', BookingRouter);
router.post('/mail', smtpController.createMail);

/* router.get('/api/private', authMiddleware, (req, res) => {
  // En este punto, podemos estar seguros de que el usuario está autenticado
  // y podemos utilizar la información de su token para tomar decisiones de autorización
  if (req.userRole === 'admin') {
    res.json({ message: 'Hola administrador.' });
  } else {
    res.status(403).json({ message: 'No tienes permiso para acceder a esta ruta.' });
  }
});
*/
module.exports = router;
