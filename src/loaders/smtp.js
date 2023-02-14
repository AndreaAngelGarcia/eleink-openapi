const smtpService = require('../services/smtp-service');

module.exports = config => smtpService.setConfig(config);
