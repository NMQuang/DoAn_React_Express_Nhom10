var express = require('express');
var router = express.Router();

var brandController = {};

brandController.render = (req, res, next) => {
    res.render('_nhan_hieu/nhan_hieu');
}

module.exports = brandController;