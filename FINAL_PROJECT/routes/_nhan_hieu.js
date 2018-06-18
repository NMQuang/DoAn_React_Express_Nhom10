var express = require('express');
var router = express.Router();
var nhanHieuController = require('./../controllers/nhanHieuController');

/* GET brand list page */
router.get('/list_brands', nhanHieuController.render);

/* GET brand page by id */
router.get('/nhan_hieu', nhanHieuController.getNhanHieu);

module.exports = router;
