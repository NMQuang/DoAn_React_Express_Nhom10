var express = require('express');
var router = express.Router();
var dangKyController = require('./../controllers/dangKyController');
var nguoidungController = require('../controllers/nguoiDungController');

/* GET register page */
router.get('/dang_ky', dangKyController.render);

/* POST register page */
router.post('/dang_ky', dangKyController.register);

/* POST login page */
router.post('/dang_nhap', dangKyController.login);

/* POST logout page */
router.post('/dang_xuat', dangKyController.logout);

router.get('/lich_su_mua_hang',nguoidungController.getHistory);


module.exports = router;
