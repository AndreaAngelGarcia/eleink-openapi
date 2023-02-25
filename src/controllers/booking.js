const { logger } = require('../utils');
const bookingService = require('../services/mongodb-service/booking');

// RECOGER TODAS LAS CITAS
async function getAllBookings(req, res, next) {
  try {
    const bookings = await bookingService.getAllBookings();
    logger.info('OK - Citas mostradas');
    return res.status(201).send(bookings);
  } catch (error) {
    logger.error('KO - Citas no mostradas');
    return next(error);
  }
}

// RECOGER CITA POR ID DE USER
async function getBookingById(req, res, next) {
  try {
    const { id } = req.params;
    const booking = await bookingService.findBookingById(id);
    logger.info('OK - Cita mostrada según id');
    return res.send(booking);
  } catch (error) {
    return next(error);
  }
}

// CREAR USUARIOS
async function createBooking(req, res, next) {
  try {
    const createdBooking = await bookingService.createBooking(req.body);
    res.status(201).send(createdBooking);
    logger.info('OK - Cita creada');
  } catch (error) {
    if (error.code === 11000) {
      error.statusCode = 409;
    } else {
      error.statusCode = 400;
    }
    logger.error('Cita no creado');
    next(error);
  }
}

async function acceptBooking(req, res, next) {
  try {
    const { id } = req.params;
    const { date, price } = req.body;

    const updatedBooking = await bookingService.acceptBooking(id, date, price);

    res.status(200).json(updatedBooking);
    logger.info('Booking accepted');
  } catch (error) {
    next(error);
  }
}

// MODIFICAR USUARIO
async function updateBooking(req, res, next) {
  try {
    const updatedUser = await bookingService.updateUser(req.body);
    res.status(201).send(updatedUser);
    logger.info('OK - Usuario modificado');
  } catch (error) {
    if (error.code === 11000) {
      error.statusCode = 409;
    } else {
      error.statusCode = 400;
    }
    logger.error('Usuario no modificado');
    next(error);
  }
}

// BORRAR USUARIO
async function deleteBooking(req, res, next) {
  try {
    const { email } = req.params;
    const deletedUser = await bookingService.deleteUser(email);
    res.status(201).send(deletedUser);
    logger.info('OK - Usuario eliminado');
  } catch (error) {
    if (error.code === 11000) {
      error.statusCode = 409;
    } else {
      error.statusCode = 400;
    }
    logger.error('Usuario no eliminado');
    next(error);
  }
}

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  acceptBooking,
  updateBooking,
  deleteBooking,
};
