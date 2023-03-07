const smtpService = require('../services/smtp-service');

async function createMail(req, res, next) {
  try {
    const emailId = await smtpService.sendMail(req.body);
    res.status(200).send({ id: emailId });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createMail,
};
