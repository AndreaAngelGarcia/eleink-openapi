const express = require('express');

const { rootController } = require('../controllers');

const AdminRouter = require('./admin');
const UserRouter = require('./user');
const BookingRouter = require('./booking');
const smtpController = require('../controllers/smtp');
// const { authController } = require('../controllers/loginController');
// const { jwtAuth } = require('../middleware/auth-middleware');
const LoginController = require('../controllers/loginController');
const adminAuth = require('../middleware/admin-middleware');

const router = express.Router();

router.post('/', rootController);
router.post('/logIn', LoginController.logIn);
// router.post('/login', authController.logIn);
// router.post('/signin', createUser);
// router.use(jwtAuth);

router.use('/admin', adminAuth, AdminRouter);
router.use('/users', UserRouter);
router.use('/booking', BookingRouter);

router.post('/mail', smtpController.createMail);

module.exports = router;
