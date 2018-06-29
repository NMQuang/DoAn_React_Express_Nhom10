var express = require('express');
var router = express.Router();

var Brand = require('../models/brandModel');
var Category = require('../models/categoryModel');
var Product  = require('../models/productModel');

var cUpload = require('../configs/upload');
var multer = require('multer');
var upload = multer({ storage: cUpload.storage() });

var images = require('../configs/images');

router.get('/delete', function(req, res, next) {
    if(req.session.adminLogged === false || req.session.adminLogged === undefined) {
        return res.redirect('/admin/login')
    }
    var id = req.query.id;
    if(id === undefined) {
        return res.redirect('/product/productList');
    }

    var vm = {};

    Product.findOneAndRemove({ productId: id }, function(err, result) {
        if(err) {
            return res.redirect('/product/productList');
        } else {
            return res.redirect('/product/productList');
        }
    });
});

router.get('/editProduct', function(req, res, next) {
    if(req.session.adminLogged === false || req.session.adminLogged === undefined) {
        return res.redirect('/admin/login')
    }
    var p1 = Brand.find({}).exec();
    var p2 = Category.find({}).exec();
    var id = req.query.id;
    if(id === undefined) {
        return res.redirect('/product/productList');
    }
    Promise.all([p1, p2]).then(([ brandDtos, catDtos]) => {
        var vm = {
            brands: brandDtos,
            categories: catDtos,
        }
        Product.findOne({ productId: id }, function(err, productDto) {
            if(err) {
                vm.showError = true;
                vm.errorMsg = "Không thể tải thông tin";
                return res.redirect('/product/productList');
            } else {
                vm.product = productDto;
                res.render('product/editProduct', vm);
            }
        });
    });
});

router.post('/editProduct', upload.single('thumbnail'),function(req, res, next) {
    var p1 = Brand.find({}).exec();
    var p2 = Category.find({}).exec();
    var id = req.query.id;
    if(id === undefined) {
        return res.redirect('/product/productList');
    }
    var newProduct = req.body;
    Promise.all([p1, p2]).then(([ brandDtos, catDtos]) => {
        var vm = {
            brands: brandDtos,
            categories: catDtos,
        }
        Product.findOne({ productId: id }, function(err, product) {
            if(err) {
                vm.showError = true;
                vm.errorMsg = "Không thể tải thông tin";
                return res.redirect('/product/productList');
            } else {
                product.productName = newProduct.productName;
                product.price = newProduct.price;
                product.description = newProduct.description;
                product.brand = newProduct.brand;
                product.category = newProduct.category;
                product.thumbnail = req.file ? images.baseUrl + req.file.filename : product.thumbnail;
                product.save(function(err, productDto) {
                    if(err) {
                        vm.product = product;
                        vm.showError = true;
                        vm.errorMsg = "Không thể cập nhật đơn hàng";
                        res.render(`product/editProduct`, vm);
                    } else {
                        vm.showResult = true;
                        vm.product = productDto;
                        res.render(`product/editProduct`, vm);
                    }
                });
            }
        });
    });
});

router.get('/productList', function(req, res, next) {
    if(req.session.adminLogged === false || req.session.adminLogged === undefined) {
        return res.redirect('/admin/login')
    }
    Product.find({})
        .populate('brand')
        .populate('category')
        .exec(function(err, productDtos) {
            var vm = {};
            if(err) {
                vm = {
                    showError: true,
                    errorMsg: 'Xảy ra lỗi khi lấy danh sách sản phẩm'
                };
            } else {
                vm = {
                    products: productDtos.reverse()
                };
                res.render('product/productList', vm);
            }
        });
});

router.get('/addProduct', function(req, res, next) {
    if(req.session.adminLogged === false || req.session.adminLogged === undefined) {
        return res.redirect('/admin/login')
    }
    var p1 = Brand.find({}).exec();
    var p2 = Category.find({}).exec();

    Promise.all([p1, p2]).then(([ brandDtos, catDtos]) => {
        var vm = {
            brands: brandDtos,
            categories: catDtos,
        }
        res.render('product/addProduct', vm);
    });
});

router.post('/addProduct', upload.single('thumbnail') , function(req, res, next) {
    var bale = req.body;
    var newId = null;

    if(req.file.filename !== undefined) {
        bale.thumbnail = images.baseUrl + req.file.filename;
    }

    bale.createdAt = new Date();

    var p1 = Brand.find({}).exec();
    var p2 = Category.find({}).exec();

    Promise.all([p1, p2]).then(([ brandDtos, catDtos]) => {
        var vm = {
            brands: brandDtos,
            categories: catDtos,
        }
        Product.findOne({}).sort({createdAt: -1}).exec(function(err, lastDto) {
            if(err) {
                vm.showError = true;
                vm.errorMsg = 'Tạo thất bại';
                res.render('product/addProduct', vm);
            } else {
                newId = lastDto === null ? 1 : parseInt(lastDto.productId, 10) + 1;
                bale.productId = newId;
                var product = new Product(bale);
                product.save(function(err, productDto) {
                    if(err) {
                        vm.showError = true;
                        vm.errorMsg = 'Tạo thất bại';
                        res.render('product/addProduct', vm);
                    }
                    else {
                        vm.showResult = true;
                        vm.resultMsg = 'Tạo sản phẩm thành công';
                        res.render('product/addProduct', vm);
                    }
                });
            }
        });
    });
});

module.exports = router;
