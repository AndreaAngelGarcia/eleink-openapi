const express = require('express');

const { getUsers, createUser } = require('../controllers/user');

const router = express.Router();
const checkAdmin = require('../middleware/admin-middleware');
const UserController = require('../controllers/userController');

router.get('/', checkAdmin, UserController.getUsers);
router.post('', createUser);
// router.get('/:name', recogerNota);
// router.post('/', crearNota);
// router.put('/:name', editarNota);
// router.delete('/:name', eliminarNota);

module.exports = router;
