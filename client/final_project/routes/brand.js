var express = require('express');
var router = express.Router();
var brandController = require('./../controllers/brandController');

/* GET brand list page */
router.get('/brand', brandController.render);

module.exports = router;
