const express = require('express');

const { rootController } = require('../controllers');
const UserRouter = require('./user');
const BookingRouter = require('./booking');
const smtpController = require('../controllers/smtp');
// const { authController } = require('../controllers/loginController');
// const { jwtAuth } = require('../middleware/auth-middleware');
const LoginController = require('../controllers/loginController');

const router = express.Router();

router.post('/', rootController);
router.post('/logIn', LoginController.logIn);
// router.post('/login', authController.logIn);
// router.post('/signin', createUser);
// router.use(jwtAuth);

router.use('/users', UserRouter);
router.use('/booking', BookingRouter);
// router.use('/admin', adminAuth, adminRoutes);

router.post('/upload');
router.post('/mail', smtpController.createMail);

module.exports = router;
