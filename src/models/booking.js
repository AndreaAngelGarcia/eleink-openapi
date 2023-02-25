const { Schema, model, Types } = require('mongoose');

const bookingSchema = new Schema({
  description: { type: String, unique: true, required: true },
  bodyPlace: { type: String, unique: true, required: true },
  size: { type: String, unique: true, required: true },
  image: { data: Buffer, contentType: String },
  date: { type: String, format: Date, unique: true },
  status: { type: String, unique: true, default: 'pending' },
  price: { type: String, unique: true },
  user: { type: Types.ObjectId, ref: 'User' },
});

module.exports = model('Booking', bookingSchema);
