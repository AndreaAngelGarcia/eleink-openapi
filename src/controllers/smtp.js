const smtpService = require('../services/smtp-service');

async function createMail(req, res, next) {
  try {
    await smtpService.sendMail();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createMail,
};
