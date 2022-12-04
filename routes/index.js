var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController');

/* GET home page. */
router.get('/', loginController.index);

router.post('/', loginController.login);

router.get('/home', function(req, res, next){
  res.render('home');
});
module.exports = router;
