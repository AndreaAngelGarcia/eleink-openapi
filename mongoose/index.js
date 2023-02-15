const connection = require('./connection');
const User = require('./user');
const Quote = require('./quote');

async function init() {
  await connection();
  const filters = {
    _id: '',
  };

  const users = await User.findOne(filters);
  const quotes = await Quote.findOne(filters);
}

init();
