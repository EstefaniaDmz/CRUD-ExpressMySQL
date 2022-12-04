var express = require('express');
var router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/C', clienteController.index);

router.get('/createC', clienteController.create);

router.post('/C', clienteController.store);

router.get('/deleteC/:idCliente', clienteController.delete);

router.get('/editC/:idCliente', clienteController.edit);

router.post('/updateC/:idCliente', clienteController.update);

module.exports = router;