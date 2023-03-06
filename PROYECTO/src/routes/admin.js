const express = require('express');

const router = express.Router();

const {
  getUsers, updateUser, deleteUser,
} = require('../controllers/user');

const {
  getAllBookings, acceptBooking, cancelBooking, deleteBooking,
} = require('../controllers/booking');

// USERS
router.get('users', getUsers);
router.put('users/:id', updateUser);
router.delete('users/:id', deleteUser);

// BOOKING
router.get('booking', getAllBookings);
router.put('booking/:id', acceptBooking);
router.patch('booking/:id', cancelBooking);
router.delete('booking/:id', deleteBooking);

module.exports = router;
