var express = require('express');
var router = express.Router();
var Product = require('../models/productModel');
var Brand = require('../models/brandModel');

var brandController = {};

brandController.render = (req, res, next) => {
    res.render('_nhan_hieu/nhan_hieu');
}

brandController.getNhanHieu = (req, res, next) => {
    var id = req.query.id;
    var p1 = Brand.findOne({id}).exec();
    
    Promise.all([p1]).then(([ brand]) => {
        console.log(brand);
        next();
    });
}
module.exports = brandController;