const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  birthday: { type: Date, required: true },
  phone: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  userInstagram: { type: String, unique: true },
  rol: { type: String, enum: ['admin', 'client'], unique: true },
});

module.exports = model('User', userSchema);
