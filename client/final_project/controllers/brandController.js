var express = require('express');
var router = express.Router();

var brandController = {};

brandController.render = (req, res, next) => {
    res.render('brands/brand');
}

module.exports = brandController;