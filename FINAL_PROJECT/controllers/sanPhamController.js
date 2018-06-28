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
    });

    const products_by_brand = await Product.find({ brand: result.brand })
        .populate("brand")
        .populate("category")
        .limit(10)
        .exec();

    const products_by_category = await Product.find({ category: result.category })
        .populate("brand")
        .populate("category")
        .limit(10)
        .exec();

    vm.product = {
        productId:  result.productId,
        productName: result.productName,
        view: result.view,
        purchases: result.purchases,
        price: result.price,
        description: result.description,
        brand: brand.brandName,
        category: category.categoryName,
        thumbnail: result.thumbnail,
        products_by_brand: products_by_brand,
        products_by_cat: products_by_category
    }

    res.render('_san_pham/san_pham', vm);
}

module.exports = sanPhamController;