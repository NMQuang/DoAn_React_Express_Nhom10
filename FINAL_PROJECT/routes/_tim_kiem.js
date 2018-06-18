var express = require('express');
var router = express.Router();

var Brand = require('../models/brandModel');
var Product = require('../models/productModel');
var Category = require('../models/categoryModel');

/* GET brand list page */
router.get('/nhan_hieu', function(req, res, next) {
    var id = req.query.id;
    if(id === undefined) {
        return res.redirect('/home');
    }

    var vm = {
        layout: "home.handlebars"
    }

    Brand.findOne({ brandId: id }, function(err, brand) {
        if(err) return res.redirect('/home');
        else {
            if(!brand) {
                vm.products = []
                return res.render('_nhan_hieu/nhan_hieu', vm);
            }

            Product.find({ brand: brand._id}, function(err, productDtos) {
                if(err) return res.redirect('/home');
                else {
                    vm.products = productDtos;
                    vm.brandName = brand.brandName;
                    return res.render('_nhan_hieu/nhan_hieu', vm);
                } 
            });
        }
    });
});

router.get('/loai_ruou', function(req, res, next) {
    var id = req.query.id;
    if(id === undefined) {
        return res.redirect('/home');
    }

    var vm = {
        layout: "home.handlebars"
    }

    Category.findOne({ categoryId: id }, function(err, cat) {
        if(err) return res.redirect('/home');
        else {
            if(!cat) {
                vm.products = []
                return res.render('_loai_ruou/loai_ruou', vm);
            }

            Product.find({ category: cat._id}, function(err, productDtos) {
                if(err) return res.redirect('/home');
                else {
                    vm.products = productDtos;
                    vm.catName = cat.categoryName;
                    return res.render('_loai_ruou/loai_ruou', vm);
                } 
            });
        }
    });
});

module.exports = router;
