/* eslint-disable no-undef */
/* eslint-disable object-shorthand */
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
async function updateUser(body) {
  const { email, ...datos } = body;
  try {
    const updatedUser = await User.findOneAndUpdate({ email }, datos);
    logger.info(`Updated user with email: ${email}`);
    return updatedUser;
  } catch (error) {
    logger.error(`Error updating user with email ${email}: ${error}`);
    throw error;
  }
}

// BORRAR USUARIO
async function deleteUser(email) {
  const filter = { email: email };
  try {
    const deletedUser = await User.remove(filter);
    logger.info(`Deleted user with email: ${email}`);
    return deletedUser;
  } catch (error) {
    logger.error(`Error deleting user with email ${email}: ${error}`);
    throw error;
  }
}

module.exports = {
  getAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
};
