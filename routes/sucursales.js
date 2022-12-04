var express = require('express');
var router = express.Router();
const sucursalController = require('../controllers/sucursalController');

router.get('/S', sucursalController.index);

router.get('/createS', sucursalController.create);

router.post('/S', sucursalController.store);

router.get('/deleteS/:idSucursal', sucursalController.delete);

router.get('/editS/:idSucursal', sucursalController.edit);

router.post('/updateS/:idSucursal', sucursalController.update);

module.exports = router;