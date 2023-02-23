const { logger } = require('../utils');
const userService = require('../services/mongodb-service/user');
const { user } = require('../models/user');

// RECOGER USUARIOS
async function getUsers(req, res, next) {
  try {
    const users = await userService.getAllUsers();
    logger.info('OK - Usuarios mostrados');
    return res.status(201).send(users);
  } catch (error) {
    logger.error('Usuarios no encontrados');
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
    const createdUser = await userService.createUser(req.body);
    // userService.createUser(req.body);
    res.status(201).send(createdUser);
    logger.info('OK - Usuario creado');
  } catch (error) {
    if (error.code === 11000) {
      error.statusCode = 409;
    } else {
      error.statusCode = 400;
    }
    logger.error('Usuario no creado');
    next(error);
  }
}

// MODIFICAR USUARIO
async function updateUser(req, res, next) {
  try {
    const { email } = req.params;
    const updatedUser = await userService.updateUser(email, req.body);
    Object.assign(user, req.body);
    res.status(201).send(updatedUser);
    logger.info('OK - Usuario modificado');
  } catch (error) {
    if (error.code === 11000) {
      error.statusCode = 409;
    } else {
      error.statusCode = 400;
    }
    logger.error('Usuario no modificado');
    next(error);
  }
}

// BORRAR USUARIO
async function deleteUser(req, res, next) {
  try {
    const { email } = req.params;
    const deletedUser = await userService.deleteUser(email);
    res.status(201).send(deletedUser);
    logger.info('OK - Usuario eliminado');
  } catch (error) {
    if (error.code === 11000) {
      error.statusCode = 409;
    } else {
      error.statusCode = 400;
    }
    logger.error('Usuario no eliminado');
    next(error);
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
