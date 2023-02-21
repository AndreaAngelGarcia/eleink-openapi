function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode < 500 ? err.statusCode : 500;
  const message = statusCode === 500 ? 'Server Error' : err.message;
  res.status(statusCode).send({ code: statusCode, message });
}

module.exports = errorHandler;
