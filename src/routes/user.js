const express = require('express');

const { getUsers, createUser } = require('../controllers/user');

const router = express.Router();

router.get('', getUsers);
router.post('', createUser);
// router.get('/:name', recogerNota);
// router.post('/', crearNota);
// router.put('/:name', editarNota);
// router.delete('/:name', eliminarNota);

module.exports = router;
