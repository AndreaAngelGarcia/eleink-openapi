const port = 3000;

const app = {
  port: process.env.PORT,
};

const smtp = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
};

module.exports = {
  port,
  app,
  smtp,
  notes: {
    folder: 'files',
    ext: 'note',
  },
};
