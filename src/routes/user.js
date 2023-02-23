const express = require('express');

const {
  getUsers, createUser, deleteUser, updateUser,
} = require('../controllers/user');

const router = express.Router();
const checkAdmin = require('../middleware/admin-middleware');
const UserController = require('../controllers/userController');

router.get('', getUsers);
router.get('', checkAdmin, UserController.getUsers);
router.post('', createUser);
router.put('/:email', updateUser);
router.delete('/:email', deleteUser);
// router.get('/:name', recogerNota);
// router.post('/', crearNota);
// router.put('/:name', editarNota);
// router.delete('/:name', eliminarNota);

module.exports = router;
