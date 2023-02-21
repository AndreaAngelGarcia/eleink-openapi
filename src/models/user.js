const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  birthday: { type: String, format: Date, required: true },
  phone: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  userInstagram: { type: String, unique: true },
  rol: { type: String, enum: ['admin', 'client'], required: true },
});

module.exports = model('Users', userSchema);
