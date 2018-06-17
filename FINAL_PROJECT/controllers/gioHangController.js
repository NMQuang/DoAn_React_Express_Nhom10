var express = require('express');
var router = express.Router();
var User = require('../models/userModel');

var gioHangController = {};

gioHangController.render = (req, res, next) => {
    var vm = {
        layout: "home.handlebars"
    }
    res.render('_gio_hang/gio_hang', vm);
}

module.exports = gioHangController;