const express = require('express');

const {
  getAllBookings, createBooking, acceptBooking, cancelBooking, deleteBooking,
} = require('../controllers/booking');

const router = express.Router();

router.get('', getAllBookings);
router.post('', createBooking);
router.put('/:id', acceptBooking);
router.patch(':id', cancelBooking);
router.delete('', deleteBooking);

module.exports = router;
