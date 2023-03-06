const mongoose = require('mongoose');
const { logger } = require('../utils');

module.exports = async config => {
  mongoose.set('strictQuery', false);
  const {
    user, pass, host, port, dbName,
  } = config;
  await mongoose.connect(`mongodb+srv://${user}:${pass}@${host}${port ? `:${port}` : ''}/${dbName}?retryWrites=true&w=majority`);
  logger.info('CONNECTED!');
};
