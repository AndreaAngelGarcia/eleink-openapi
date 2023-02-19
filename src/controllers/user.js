const fs = require('fs');

const { logger } = require('../utils');
const userService = require('../services/mongodb-service/user');

// CREAR USUARIO
async function getUsers(req, res, next) {
  try {
    const { id } = req.params;
    const users = await userService.findUserById(id);
    return res.send(users);
  } catch (error) {
    return next(error);
  }
}

/* function createDate(req, res) {

} */

module.exports = {
  getUsers,
};
