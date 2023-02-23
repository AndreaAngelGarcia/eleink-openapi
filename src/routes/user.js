const express = require('express');

const {
  getUsers, createUser, deleteUser, updateUser,
} = require('../controllers/user');

const router = express.Router();
// const checkAdmin = require('../middleware/admin-middleware');
// const UserController = require('../controllers/userController');

router.get('/users', getUsers);
// router.get('/', checkAdmin, UserController.getUsers);
router.post('/user', createUser);
router.put('/user/:email', updateUser);
router.delete('/user/:email', deleteUser);
// router.get('/:name', recogerNota);
// router.post('/', crearNota);
// router.put('/:name', editarNota);
// router.delete('/:name', eliminarNota);

module.exports = router;
