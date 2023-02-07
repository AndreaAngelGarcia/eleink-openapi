const nodemailer = require('nodemailer');
const { logger } = require('../utils');

const { smtp: config } = require('../config');

async function sendMail(content) {
  const { host, port } = config;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: false,
  });

  const info = await transporter.sendMail({
    from: 'andrea.angel@adaits.es',
    to: 'prueba@gmail.com',
    subject: 'mensajito de prueba',
    text: 'Textito',
    html: '<h1 style="color:blue">Este es un HTML</h1>',
  });

  logger.info('Message sent: $(info.messageId)');
}
