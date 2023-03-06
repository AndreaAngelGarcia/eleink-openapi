const express = require('express');

const router = express.Router();

const { authMiddleware } = require('../middleware/auth-middleware');
const { itsMe } = require('../middleware/auth-middleware');
const UserController = require('../controllers/user');

router.get('', authMiddleware, itsMe, UserController.getUsers);
router.get('/:id', authMiddleware, itsMe, UserController.getUser);
router.put('/:email', authMiddleware, itsMe, UserController.updateUser);
router.delete('/:email', authMiddleware, itsMe, UserController.deleteUser);

module.exports = router;
