const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  age: { type: Number, unique: true, required: true },
  phone: { type: Number, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  userInstagram: { type: String, unique: true },
});

module.exports = model('User', userSchema);
