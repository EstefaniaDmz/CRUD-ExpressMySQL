var express = require('express');
var router = express.Router();
const hotelController = require('../controllers/hotelController');

/* GET home page. */
router.get('/H', hotelController.index);

router.get('/createH', hotelController.create);

router.post('/H', hotelController.store);

router.get('/deleteH/:idHotel', hotelController.delete);

router.get('/editH/:idHotel', hotelController.edit);

router.post('/updateH/:idHotel', hotelController.update);

module.exports = router;