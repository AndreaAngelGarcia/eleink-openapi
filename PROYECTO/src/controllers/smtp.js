const smtpService = require('../services/smtp-service');

async function createMail(req, res, next) {
  try {
    const emailId = await smtpService.sendMail(req.body);
    res.status(200).send({ id: emailId });
  } catch (error) {
    next(error);
  }
}

async function createMailForm(req, res, next) {
  try {
    const {
      name, email, phone, instagram, size, description,
    } = req.body;
    // eslint-disable-next-line max-len
    const emailId = await smtpService.sendMailForm(name, email, phone, instagram, size, description);
    console.log({ id: emailId });
    console.log(emailId);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createMail,
  createMailForm,
};
