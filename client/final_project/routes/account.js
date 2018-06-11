var express = require('express');
var router = express.Router();
var accountController = require('./../controllers/accountController');

/* GET register page */
router.get('/register', accountController.render);

/* POST register page */
router.post('/register', accountController.register);

/* POST login page */
router.post('/login', accountController.login);

module.exports = router;
