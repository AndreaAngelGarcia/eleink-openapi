const { logger } = require('../../utils');
const { User } = require('../../models');

// BUSCAR USUARIO
function getAllUsers(filters) {
  return User.find(filters);
}

// BUSCAR USUARIO POR ID
function findUserById(id) {
  return User.findById(id);
}

// CREAR USUARIO
async function createUser(body) {
  const createdUser = await new User(body).save();
  logger.info(`Created user with id: ${createdUser.id} `);
  return createdUser;
}

// MODIFICAR USUARIO
/* async function updateUser(body) {
  const updatedUser = await new User(body).remove();
  logger.info(`Deleted user with id: ${updatedUser.id} `);
  return updatedUser;
} */

// BORRAR USUARIO
async function deleteUser(body) {
  const deletedUser = await new User(body).remove();
  logger.info(`Deleted user with id: ${deletedUser.id} `);
  return deletedUser;
}

module.exports = {
  getAllUsers,
  findUserById,
  createUser,
  /* updateUser, */
  deleteUser,
};
