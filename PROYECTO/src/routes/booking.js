const express = require('express');

const router = express.Router();

const {
  getAllBookings, acceptBooking, cancelBooking, deleteBooking,
  getBookingByStatus, getBookingById, changeDateBooking,
} = require('../controllers/booking');

const { authMiddleware } = require('../middleware/auth-middleware');
const { itsMe } = require('../middleware/auth-middleware');

// ADMIN
router.get('', authMiddleware, itsMe, getAllBookings);
router.get('/:status', authMiddleware, itsMe, getBookingByStatus);
router.put('/accept/:id', authMiddleware, itsMe, acceptBooking);
router.put('/cancel/:id', authMiddleware, itsMe, cancelBooking);
router.put('/dateChange/:id', authMiddleware, itsMe, changeDateBooking);
router.delete('/:id', authMiddleware, itsMe, deleteBooking);

// CLIENT
router.get('/client/:id', authMiddleware, getBookingById);

module.exports = router;
