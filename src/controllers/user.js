const { logger } = require('../utils');
const userService = require('../services/mongodb-service/user');
const Users = require('../models/user');

// RECOGER USUARIOS POR ID
async function getUsers(req, res, next) {
  try {
    const users = await userService.getAllUsers();
    logger.info('OK - Usuarios mostrados');
    return res.status(201).send(users);
  } catch (error) {
    return next(error);
  }
}

// RECOGER USUARIOS POR ID
async function getUser(req, res, next) {
  try {
    const { id } = req.params;
    const users = await userService.findUserById(id);
    logger.info('OK - Usuario mostrado según id');
    return res.send(users);
  } catch (error) {
    return next(error);
  }
}

// CREAR USUARIOS
async function createUser(req, res, next) {
  try {
    userService.createUser = new Users(req.body);
    logger.info('OK - Usuario creado');
    res.status(201).send();
  } catch (error) {
    error.status = 409;
    next(error);
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
};
