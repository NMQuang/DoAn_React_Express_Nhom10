var express = require('express');
var router = express.Router();
var User = require('../models/userModel');
var cartRepo = require('../repos/cartRepo');

var gioHangController = {};

gioHangController.render = (req, res, next) => {
    if(req.session.isLogged === false) {
        return res.redirect('/home');
    } else {
        var vm = {
            layout: "home.handlebars",
            carts: req.session.cart,
            totalPrice: cartRepo.getTotalPrice(req.session.cart)
        }
        return res.render('_gio_hang/gio_hang', vm);
    }    
}

module.exports = gioHangController;