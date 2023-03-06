const expressLoader = require('./express');
const smtpLoader = require('./smtp');
const mongodbLoader = require('./mongodb');

function init(app, config) {
  expressLoader(app);
  smtpLoader(config.smtp);
  mongodbLoader(config.mongodb);
}

module.exports = {
  init,
};
