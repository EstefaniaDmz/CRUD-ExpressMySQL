var express = require('express');
var router = express.Router();
const vueloController = require('../controllers/vueloController');

router.get('/V', vueloController.index);

router.get('/createV', vueloController.create);

router.post('/V', vueloController.store);

router.get('/deleteV/:idVuelo', vueloController.delete);

router.get('/editV/:idVuelo', vueloController.edit);

router.post('/updateV/:idVuelo', vueloController.update);

module.exports = router;