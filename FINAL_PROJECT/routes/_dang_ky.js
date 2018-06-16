var express = require('express');
var router = express.Router();
var accountController = require('./../controllers/dangKyController');

/* GET register page */
router.get('/dang_ky', accountController.render);

/* POST register page */
router.post('/dang_ky', accountController.register);

/* POST login page */
router.post('/dang_nhap', accountController.login);

module.exports = router;
