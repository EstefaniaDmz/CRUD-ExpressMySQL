var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/U', usuarioController.index);

router.get('/createU', usuarioController.create);

router.post('/U', usuarioController.store);

router.get('/deleteU/:idUsuario', usuarioController.delete);

router.get('/editU/:idUsuario', usuarioController.edit);

router.post('/updateU/:idUsuario', usuarioController.update);

module.exports = router;