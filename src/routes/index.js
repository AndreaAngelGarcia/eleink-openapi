const express = require('express');

const { rootController } = require('../controllers');
const { recogerNotas } = require('../controllers/notas');
const notasRouter = require('./notas');
const smtpController = require('../controllers/smtp');

const router = express.Router();

router.post('/', rootController);
router.use('/notas', notasRouter);
router.get('/notas', recogerNotas);
router.post('/mail', smtpController.createMail);

module.exports = router;
