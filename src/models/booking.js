const { Schema, model } = require('mongoose');

const bookingSchema = new Schema({
  description: { type: String, unique: true, required: true },
  bodyPlace: { type: String, unique: true, required: true },
  size: { type: Number, unique: true, required: true },
  // image: { type: File, unique: true, required: true },
  date: { type: String, unique: true },
  status: { type: String, unique: true, default: 'pending' },
  price: { type: Number, unique: true },
});

module.exports = model('Booking', bookingSchema);
