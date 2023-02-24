const express = require('express');

const {
  getUsers, createUser, deleteUser, updateUser,
} = require('../controllers/user');

const router = express.Router();
// const checkAdmin = require('../middleware/admin-middleware');
const { authMiddleware } = require('../middleware/auth-middleware');
const UserController = require('../controllers/userController');

router.get('', authMiddleware, UserController.getUsers);
// router.get('', checkAdmin, UserController.getUsers);
router.post('', createUser);
router.put('/:email', updateUser);
router.delete('/:email', deleteUser);

module.exports = router;
