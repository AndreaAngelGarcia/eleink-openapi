const { logger } = require('../../utils');
const { User } = require('../../models');

// BUSCAR USUARIO
function findAllUser(filters) {
  return User.find(filters);
}

// BUSCAR USUARIO POR ID
function findUserById(id) {
  return User.findById(id);
}

async function createUser(body) {
  const createdUser = await new User(body).save();
  logger.info(`Created user with id: ${createdUser.id} `);
  return createdUser;
}

// updateUser

// deleteUser

module.exports = {
  findAllUser,
  findUserById,
  createUser,
};
