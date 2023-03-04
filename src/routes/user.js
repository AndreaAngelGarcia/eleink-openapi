const express = require('express');
const router = express.Router();

const {createUser} = require('../controllers/user');

const { authMiddleware } = require('../middleware/auth-middleware');
const { itsMe } = require('../middleware/auth-middleware');
const UserController = require('../controllers/user');

router.post('', createUser);

router.get('', authMiddleware, itsMe, UserController.getUsers);
router.put('/:email', authMiddleware, itsMe, UserController.updateUser);
router.delete('/:email', authMiddleware, itsMe, UserController.deleteUser);

module.exports = router;
