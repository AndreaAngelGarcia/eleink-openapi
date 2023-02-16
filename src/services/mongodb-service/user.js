const { logger } = require('../../utils');
const { User } = require('../../models');

async function createUser(body) {
  const createdUser = await new User(body).save();
  logger.info(`Created user with id: ${createdUser.id} `);
  return createdUser;
}

// updateUser

// deleteUser

module.exports = {
  createUser,
};
