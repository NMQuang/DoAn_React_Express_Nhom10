var express = require('express');
var router = express.Router();
var sanPhamController = require('./../controllers/sanPhamController');

/* GET brand list page */
router.get('/san_pham', sanPhamController.render);

module.exports = router;
