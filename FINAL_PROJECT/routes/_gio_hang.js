var express = require('express');
var router = express.Router();
var gioHangController = require('./../controllers/gioHangController');

/* GET register page */
router.get('/gio_hang', gioHangController.render);

module.exports = router;
