const mongoose = require('mongoose');

module.exports = async config => {
  const {
    user, pass, host, port, dbName,
  } = config;
  /* await mongoose.connect(`mongodb://${host}:${port}/${dbName}`, { user, pass });
  console.log('CONNECTED!'); */
};
