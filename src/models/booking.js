const { Schema, model, Types } = require('mongoose');

const bookingSchema = new Schema({
  description: { type: String, unique: true, required: true },
  bodyPlace: { type: String, unique: true, required: true },
  size: { type: Number, unique: true, required: true },
  image: { data: Buffer, contentType: String },
  date: { type: String, unique: true },
  status: { type: String, unique: true, default: 'pending' },
  price: { type: Number, unique: true },
  user: { type: Types.ObjectId, ref: 'User' },
});

module.exports = model('Booking', bookingSchema);
