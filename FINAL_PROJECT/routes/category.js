var express = require('express');
var router = express.Router();

var Category = require('../models/categoryModel');

router.get('/delete', function(req, res, next) {
    if(req.session.adminLogged === false || req.session.adminLogged === undefined) {
        return res.redirect('/admin/login')
    }
    var id = req.query.id;
    if(id === undefined) {
        return res.redirect('/category/categoryList');
    }

    var vm = {};

    Category.findOneAndRemove({ categoryId: id }, function(err, result) {
        if(err) {
            return res.redirect('/category/categoryList');
        } else {
            return res.redirect('/category/categoryList');
        }
    });
});

router.get('/editCategory', function(req, res, next) {
    if(req.session.adminLogged === false || req.session.adminLogged === undefined) {
        return res.redirect('/admin/login')
    }
    var id = req.query.id;
    if(id === undefined) {
        return res.redirect('/category/categoryList');
    }
    var vm = {};
    Category.findOne({ categoryId: id }, function(err, catDto) {
        if(err) {
            vm.showError = true;
            vm.errorMsg = "Không thể tải thông tin";
            return res.redirect('/category/categoryList');
        } else {
            vm.cat = catDto;
            res.render('category/editCategory', vm);
        }
    });
});

router.post('/editCategory', function(req, res, next) {
    var id = req.query.id;
    if(id === undefined) {
        return res.redirect('/category/categoryList');
    }
    var newCat = req.body;
    var vm = {};
    Category.findOne({ categoryId: id}, function(err, cat) {
        if(err) {
            vm.showError = true;
            vm.errorMsg = "Không thể tìm thấy đơn hàng";
            res.render(`category/editCategory`, vm);
        } else {
            cat.categoryName = newCat.categoryName;
            cat.description = newCat.description;
            cat.save(function(err, catDto) {
                if(err) {
                    vm.cat = cat;
                    vm.showError = true;
                    vm.errorMsg = "Không thể cập nhật đơn hàng";
                    res.render(`category/editCategory`, vm);
                } else {
                    vm.showResult = true;
                    vm.cat = catDto;
                    res.render(`category/editCategory`, vm);
                }
            });
        }
    });
});

router.get('/categoryList', function(req, res, next) {
    if(req.session.adminLogged === false || req.session.adminLogged === undefined) {
        return res.redirect('/admin/login')
    }
    Category.find({}, function(err, catDtos) {
        var vm = {};
        if(err) {
            vm = {
                showError: true,
                errorMsg: 'Xảy ra lỗi khi lấy danh sách loại rượu'
            };
        } else {
            vm = {
                categories: catDtos,
            };
            res.render('category/categoryList', vm);
        }
    });
});

router.get('/addCategory', function(req, res, next) {
    if(req.session.adminLogged === false || req.session.adminLogged === undefined) {
        return res.redirect('/admin/login')
    }
    res.render('category/addCategory');
});

router.post('/addCategory', function(req, res, next) {
    var bale = req.body;
    var newId = null;
    var vm = {};
    bale.createdAt = new Date();
    Category.findOne().sort({createdAt: -1}).exec(function(err, lastDto) {
        if(err) {
            vm.showError = true;
            vm.errorMsg = "Tạo loại rượu thất bại";
            return res.render('category/addCategory', vm);
        } else {
            newId = lastDto === null ? 1 : parseInt(lastDto.categoryId, 10) + 1;
            bale.categoryId = newId;
            var cat = new Category(bale);
            cat.save(function(err, catDto) {
                if(err) {
                    vm.showError = true;
                    vm.errorMsg = "Tạo loại rượu thất bại";
                    return res.render('category/addCategory', vm);
                }
                else {
                    vm.showResult = true;
                    return res.render('category/addCategory', vm);
                }
            });
        }
    });
});

module.exports = router;
