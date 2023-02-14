const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { logger } = require('../utils');

let transporter;

function setConfig(smtpConfig) {
  const {
    clientId, clientSecret, authUrl, user, accessToken, refreshToken,
  } = smtpConfig;
  const { OAuth2 } = google.auth;

  const oauth2Client = new OAuth2(
    clientId,
    clientSecret,
    authUrl,
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
      type: 'OAuth2',
      user,
      accessToken,
      clientId,
      clientSecret,
      refreshToken,
    },
    // tls: {
    //   rejectUnauthorized: false,
    // },
  });
}

async function sendMail(content) {
  const { to, subject, text } = content;

  const info = await transporter.sendMail({
    from: 'andreaangelgarcia@gmail.com',
    to: to || 'andrea.angel@adaits.es',
    subject,
    text,
  });

  logger.info(`Message sent: ${info.messageId}`);

  return info;
}

module.exports = {
  setConfig,
  sendMail,
};
