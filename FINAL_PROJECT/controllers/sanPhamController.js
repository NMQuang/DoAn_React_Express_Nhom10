var express = require('express');
var router = express.Router();
var Product = require('../models/productModel');

var sanPhamController = {};

sanPhamController.render = (req, res, next) => {
    var vm = {
        layout: "home.handlebars"
    }
    var idProduct = req.query.id;
    console.log(idProduct);
    res.render('_san_pham/san_pham', vm);
}

module.exports = sanPhamController;