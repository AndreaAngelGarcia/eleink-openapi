const { logger } = require('../../utils');
const { Booking } = require('../../models');

// BUSCAR USUARIO
function getAllBookings(filters) {
  return Booking.find(filters);
}

// BUSCAR USUARIO POR ID
function findBookingById(id) {
  return Booking.findById(id);
}

// CREAR USUARIO
async function createBooking(bookingData) {
  const pendingBooking = {
    ...bookingData,
    status: 'pending',
    date: 'pending',
    price: 'pending',
  };
  const createdBooking = await Booking.create(pendingBooking);
  logger.info(`Created booking with id: ${createdBooking.id} `);
  return createdBooking;
}

// ACEPTAR CITA
async function acceptBooking(id, date, price) {
  const updatedBooking = await Booking.findByIdAndUpdate(
    id,
    {
      date,
      price,
      status: 'accepted',
    },
    { new: true },
  );

  if (!updatedBooking) {
    const error = new Error('Booking not found');
    error.statusCode = 404;
    throw error;
  }

  return updatedBooking;
}

// CANCELAR CITA
async function cancelBooking(id) {
  const cancelledBooking = await Booking.findByIdAndUpdate(
    id,
    {
      status: 'cancelled',
    },
    { new: true },
  );

  if (!cancelledBooking) {
    const error = new Error('Booking not found');
    error.statusCode = 404;
    throw error;
  }

  return cancelledBooking;
}

// MODIFICAR USUARIO
async function updateBooking(body) {
  const { email, ...datos } = body;
  try {
    const updatedBooking = await Booking.findOneAndUpdate({ email }, datos);
    logger.info(`Updated user with email: ${email}`);
    return updatedBooking;
  } catch (error) {
    logger.error(`Error updating user with email ${email}: ${error}`);
    throw error;
  }
}

// BORRAR CITA
async function deleteBooking(id) {
  const filter = { id };
  try {
    const deletedBooking = await Booking.deleteOne(filter);
    logger.info(`Deleted user with id: ${id}`);
    return deletedBooking;
  } catch (error) {
    logger.error(`Error deleting user with id ${id}: ${error}`);
    throw error;
  }
}

module.exports = {
  getAllBookings,
  findBookingById,
  createBooking,
  acceptBooking,
  cancelBooking,
  updateBooking,
  deleteBooking,
};
