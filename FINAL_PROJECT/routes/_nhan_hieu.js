var express = require('express');
var router = express.Router();
var brandController = require('./../controllers/nhanHieuController');

/* GET brand list page */
router.get('/list_brands', nhanHieuController.render);

module.exports = router;
