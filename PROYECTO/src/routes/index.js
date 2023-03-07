const express = require('express');

const router = express.Router();

const { rootController } = require('../controllers');

const AdminRouter = require('./admin');
const UserRouter = require('./user');
const BookingRouter = require('./booking');
const smtpController = require('../controllers/smtp');
// const { jwtAuth } = require('../middleware/auth-middleware');
const { createUser } = require('../controllers/user');
const LoginController = require('../controllers/loginController');
const adminAuth = require('../middleware/admin-middleware');

router.post('/', rootController);
router.post('/login', LoginController.logIn);
router.post('/signin', createUser);
// router.use(jwtAuth);
router.use('/admin', adminAuth, AdminRouter);
router.use('/users', UserRouter);
router.use('/booking', BookingRouter);

// RUTA ENVIAR EMAIL
router.post('/mail', smtpController.createMail);

module.exports = router;
