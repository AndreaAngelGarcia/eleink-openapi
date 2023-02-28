const express = require('express');
const { getAllBookings, createBooking, acceptBooking } = require('../controllers/booking');
// const LoginController = require('../controllers/loginController');

const router = express.Router();

router.get('', getAllBookings);
router.post('', createBooking);
router.put('/:id', acceptBooking);

module.exports = router;
