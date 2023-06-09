const express = require('express');
const cors = require('cors');

const corsOptions = {
  origin: '*',
};

const swaggerUI = require('swagger-ui-express');
// const OpenApiValidator = require('express-openapi-validator');
const swaggerDocument = require('../openapi');
const routes = require('../routes');
const errorHandler = require('../middleware/error-middleware');

module.exports = server => {
  server.use(cors());
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  server.use(routes);
  server.use(errorHandler);
};
