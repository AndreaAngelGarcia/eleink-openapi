const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  phone: Number,
  password: String,
});

module.exports = model('User', userSchema);
