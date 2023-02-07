const express = require('express');

const swaggerUI = require('swagger-ui-express');
// const OpenApiValidator = require('express-openapi-validator');
const swaggerDocument = require('../openapi');
const routes = require('../routes');

module.exports = server => {
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  /* server.use(
    OpenApiValidator.middleware({
      apiSpec: swaggerDocument,
      validateRequests: true, // (default)
      validateResponses: true, // false by default
    }),
  ); */
  server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  server.use(routes);
  server.use((req, res) => res.status(404).send({ message: 'Not Found' }));
};
