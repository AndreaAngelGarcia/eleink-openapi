const app = require('./app');
const config = require('./config');
const { logger } = require('./utils');

const { port } = config;

app.listen(port, err => {
  if (err) {
    logger.error(err);
    return;
  }
  logger.info(`Listening the port ${port}`);
});
