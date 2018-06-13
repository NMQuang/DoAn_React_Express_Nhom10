var express = require('express');
var router = express.Router();
var orderController = require('./../controllers/orderController');

/* GET register page */
router.get('/order', orderController.render);

// /* POST register page */
// router.post('/register', orderController.register);

// /* POST login page */
// router.post('/login', orderController.login);

module.exports = router;
