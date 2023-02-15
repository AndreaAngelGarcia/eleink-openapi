const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

async function connection() {
  const config = {
    user: 'andreaangel',
    pass: 'root',
  };

  await mongoose.connect('mongodb+srv://andreaangel:root@cluster0.fdckmc6.mongodb.net/test', config);
  console.log('CONNECTED :)');
}

module.exports = {
  connection,
};
