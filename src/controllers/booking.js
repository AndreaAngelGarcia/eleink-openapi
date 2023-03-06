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
async function getBookingByStatus(req, res, next) {
  try {
    const { status } = req.params;
    const booking = await bookingService.getBookingByStatus(status);
    logger.info('OK - Cita mostrada según estado de la cita');
    return res.send(booking);
  } catch (error) {
    return next(error);
  }
}

// CREAR CITA
async function createBooking(req, res, next) {
  try {
    const { file } = req;
    const createdBooking = await bookingService.createBooking(req.body, file);
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

// ACEPTAR CITA
async function acceptBooking(req, res, next) {
  try {
    const { id } = req.params;
    const { date, price } = req.body;

    const updatedBooking = await bookingService.acceptBooking(id, date, price);

    res.status(200).json(updatedBooking);
    logger.info('Cita aceptada');
  } catch (error) {
    next(error);
  }
}

// CANCELAR CITA
async function cancelBooking(req, res, next) {
  try {
    const { id } = req.params;
    const cancelledBooking = await bookingService.cancelBooking(id);

    res.status(200).json(cancelledBooking);
    logger.info('Cita cancelada');
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

// BORRAR CITA
async function deleteBooking(req, res, next) {
  try {
    const { id } = req.params;
    const deletedBooking = await bookingService.deleteBooking(id);
    res.status(201).send(deletedBooking);
    logger.info('OK - Cita eliminada');
  } catch (error) {
    if (error.code === 11000) {
      error.statusCode = 409;
    } else {
      error.statusCode = 400;
    }
    logger.error('Cita no eliminada');
    next(error);
  }
}

module.exports = {
  getAllBookings,
  getBookingByStatus,
  createBooking,
  acceptBooking,
  cancelBooking,
  updateBooking,
  deleteBooking,
};
