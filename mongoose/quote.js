const { Schema, model } = require('mongoose');

const quoteSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  phone: Number,
  password: String,
});

module.exports = model('Quote', quoteSchema);
