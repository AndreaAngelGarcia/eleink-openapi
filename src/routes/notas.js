const express = require('express');

const {
  recogerNotas, crearNota, editarNota, eliminarNota,
} = require('../controllers/notas');

const router = express.Router();

router.get('/', recogerNotas);
// router.get('/:name', recogerNota);
router.post('/', crearNota);
router.put('/:name', editarNota);
router.delete('/:name', eliminarNota);

module.exports = router;
