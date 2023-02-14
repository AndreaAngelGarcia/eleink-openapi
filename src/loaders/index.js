const expressLoader = require('./express');
const smtpLoader = require('./smtp');

function init(app, config) {
  expressLoader(app);
  smtpLoader(config.smtp);
}

module.exports = {
  init,
};
