var express = require('express');
var router = express.Router();
var Product = require('../models/productModel');
const Brand = require('../models/brandModel')
const Category = require('../models/categoryModel')

var sanPhamController = {};

sanPhamController.render = async (req, res, next) => {
    var vm = {
        layout: "home.handlebars"
    }
    var id = req.query.id;

    const result = await Product.findOne({
        productId: id
    })

    const brand = await Brand.findOne({
        _id: result.brand
    })

    const category = await Category.findOne({
        _id: result.category
    })

    vm.product = {
        productName: result.productName,
        view: result.view,
        purchases: result.purchases,
        price: result.price,
        description: result.description,
        brand: brand.brandName,
        category: category.categoryName,
        thumbnail: result.thumbnail
    }

    res.render('_san_pham/san_pham', vm);
}

module.exports = sanPhamController;