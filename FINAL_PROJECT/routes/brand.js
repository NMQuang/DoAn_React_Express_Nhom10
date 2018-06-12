var express = require('express');
var router = express.Router();

var brandController = require('../controllers/brandController');

var Brand = require('../models/brandModel');

router.get('/editBrand', function(req, res, next) {
    if(req.session.adminLogged === false || req.session.adminLogged === undefined) {
        return res.redirect('/admin/login')
    }
    var id = req.query.id;
    if(id === undefined) {
        return res.redirect('/brand/brandList');
    }
    var vm = {};
    Brand.findOne({ brandId: id }, function(err, brandDto) {
        if(err) {
            vm.showError = true;
            vm.errorMsg = "Không thể tải thông tin";
            return res.redirect('/brand/brandList');
        } else {
            vm.brand = brandDto;
            res.render('brand/editBrand', vm);
        }
    });
});

router.post('/editBrand', function(req, res, next) {
    var id = req.query.id;
    if(id === undefined) {
        return res.redirect('/brand/brandList');
    }
    var newBrand = req.body;
    var vm = {};
    Brand.findOne({ brandId: id}, function(err, brand) {
        if(err) {
            vm.showError = true;
            vm.errorMsg = "Không thể tìm thấy đơn hàng";
            res.render(`brand/editBrand`, vm);
        } else {
            brand.brandName = newBrand.brandName;
            brand.country = newBrand.country;
            brand.description = newBrand.description;
            brand.foundedYear = newBrand.foundedYear;
            brand.save(function(err, brandDto) {
                if(err) {
                    vm.brand = brand;
                    vm.showError = true;
                    vm.errorMsg = "Không thể cập nhật đơn hàng";
                    res.render(`brand/editBrand`, vm);
                } else {
                    vm.showResult = true;
                    vm.brand = brandDto;
                    res.render(`brand/editBrand`, vm);
                }
            });
        }
    });
});

router.get('/addBrand', function(req, res, next) {
    if(req.session.adminLogged === false || req.session.adminLogged === undefined) {
        return res.redirect('/admin/login')
    }
    res.render('brand/addBrand');
});

router.get('/brandList', function(req, res, next) {
    if(req.session.adminLogged === false || req.session.adminLogged === undefined) {
        return res.redirect('/admin/login')
    }
    Brand.find({}, function(err, brandDtos) {
        var vm = {};
        if(err) {
            vm = {
                showError: true,
                errorMsg: 'Xảy ra lỗi khi lấy danh sách nhãn hiệu'
            };
        } else {
            vm = {
                brands: brandDtos
            };
            res.render('brand/brandList', vm);
        }
    });
});

router.post('/addBrand', function(req, res, next) {
    var bale = req.body;
    var newId = null;
    var vm = {};
    bale.createdAt = new Date();
    Brand.findOne().sort({createdAt: -1}).exec(function(err, lastDto) {
        if(err) {
            vm.showError = true;
            vm.errorMsg = "Tạo nhãn hiệu thất bại";
            return res.render('brand/addBrand', vm);
        } else {
            newId = lastDto === null ? 1 : parseInt(lastDto.brandId, 10) + 1;
            bale.brandId = newId;
            var brand = new Brand(bale);
            brand.save(function(err, brandDto) {
                if(err) {
                    vm.showError = true;
                    vm.errorMsg = "Tạo nhãn hiệu thất bại";
                    return res.render('brand/addBrand', vm);
                }
                else {
                    vm.showResult = true;
                    return res.render('brand/addBrand', vm);
                }
            });
        }
    });
});

module.exports = router;
