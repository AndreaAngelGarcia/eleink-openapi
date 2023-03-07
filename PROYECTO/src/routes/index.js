const express = require('express');

const router = express.Router();

const AdminRouter = require('./admin');
const UserRouter = require('./user');
const BookingRouter = require('./booking');
const smtpController = require('../controllers/smtp');
const { createUser } = require('../controllers/user');
const { createBooking } = require('../controllers/booking');
const LoginController = require('../controllers/loginController');
const adminAuth = require('../middleware/admin-middleware');

const { upload } = require('../middleware/multer-middleware');

router.post('/login', LoginController.logIn);
router.post('/signin', createUser);

router.post('/createBooking', upload.single('myFile'), createBooking, (req, res) => {
  res.json({ message: 'Archivo subido exitosamente' });
});

router.use('/admin', adminAuth, AdminRouter);
router.use('/users', UserRouter);
router.use('/booking', BookingRouter);

router.post('/mail', smtpController.createMail);

module.exports = router;
