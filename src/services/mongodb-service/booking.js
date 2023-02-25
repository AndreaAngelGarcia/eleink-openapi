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

// BORRAR USUARIO
async function deleteBooking(email) {
  const filter = { email };
  try {
    const deletedUser = await Booking.remove(filter);
    logger.info(`Deleted user with email: ${email}`);
    return deletedUser;
  } catch (error) {
    logger.error(`Error deleting user with email ${email}: ${error}`);
    throw error;
  }
}

module.exports = {
  getAllBookings,
  findBookingById,
  createBooking,
  acceptBooking,
  updateBooking,
  deleteBooking,
};
