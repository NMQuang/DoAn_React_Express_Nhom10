var express = require('express');
var router = express.Router();
const _ = require('lodash')

var Brand = require('../models/brandModel');
var Product = require('../models/productModel');
var Category = require('../models/categoryModel');

/* GET brand list page */
router.get('/nhan_hieu', function (req, res, next) {
    var id = req.query.id;
    if (id === undefined) {
        return res.redirect('/home');
    }

    var vm = {
        layout: 'home.handlebars',
    };

    Brand.findOne({
            brandId: id,
        },
        function (err, brand) {
            if (err) return res.redirect('/home');
            else {
                if (!brand) {
                    vm.products = [];
                    return res.render('_nhan_hieu/nhan_hieu', vm);
                }

                Product.find({
                        brand: brand._id,
                    },
                    function (err, productDtos) {
                        if (err) return res.redirect('/home');
                        else {
                            vm.products = productDtos;
                            vm.brandName = brand.brandName;
                            return res.render('_nhan_hieu/nhan_hieu', vm);
                        }
                    }
                );
            }
        }
    );
});

router.get('/loai_ruou', function (req, res, next) {
    var id = req.query.id;
    if (id === undefined) {
        return res.redirect('/home');
    }

    var vm = {
        layout: 'home.handlebars',
    };

    Category.findOne({
            categoryId: id,
        },
        function (err, cat) {
            if (err) return res.redirect('/home');
            else {
                if (!cat) {
                    vm.products = [];
                    return res.render('_loai_ruou/loai_ruou', vm);
                }

                Product.find({
                        category: cat._id,
                    },
                    function (err, productDtos) {
                        if (err) return res.redirect('/home');
                        else {
                            vm.products = productDtos;
                            vm.catName = cat.categoryName;
                            return res.render('_loai_ruou/loai_ruou', vm);
                        }
                    }
                );
            }
        }
    );
});

router.post('/tim_kiem', async (req, res, next) => {
    const {
        wineName,
        winePrice,
        wineBrand,
        wineType
    } = req.body

    if (winePrice === undefined && wineBrand === undefined && wineType === undefined) {
        const vm = {
            layout: 'home.handlebars',
        };

        const re = new RegExp(_.escapeRegExp(wineName), 'i');

        const listProd = await Product.find({})

        vm.products = listProd.filter(product => {
            if (re.test(product.productName))
                return product
        })

        res.render('_tim_kiem/tim_kiem', vm)
    } else {
        let query = {}
        const vm = {
            layout: 'home.handlebars',
            products: []
        }

        if (wineName) {
            query.productName = {
                $regex: wineName,
                $options: 'i'
            }
        }

        if (wineBrand !== '0') {
            const brand = await Brand.findOne({
                brandId: wineBrand
            })
            query.brand = brand._id
        }

        if (wineType !== '0') {
            const category = await Category.findOne({
                categoryId: wineType
            })
            query.category = category._id
        }

        if (winePrice) {
            query.price = {
                $lt: winePrice
            }
        }

        vm.products = await Product.find(query)

        res.render('_tim_kiem/tim_kiem', vm)
    }
});

module.exports = router;