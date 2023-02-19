const fs = require('fs');

const { logger } = require('../utils');
const Booking = require('../models/booking');

// CREAR UNA CITA
function CreateBooking(req, res) {
  const {
    description, bodyPlace, size, date, status, price,
  } = req.body;

  logger.info('OK - Cita creada');
}

function UpdateBooking(req, res) {
  const {
    description, bodyPlace, size, date, status, price,
  } = req.body;

  logger.info('OK - Cita modificada');
}

function DeleteBooking(req, res) {
  const {
    description, bodyPlace, size, date, status, price,
  } = req.body;

  logger.info('OK - Cita eliminada');
}

module.exports = {
  CreateBooking,
  UpdateBooking,
  DeleteBooking,
};
