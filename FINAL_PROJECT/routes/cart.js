var express = require('express');
var router = express.Router();
var Product = require('../models/productModel');
var cartRepo = require('../repos/cartRepo');

router.post('/add', function(req, res, next) {
    Product.findOne({ productId: req.body.proId }, function(err, product) {
        if (err) {
            console.log("[Error]", err);
            res.redirect(req.headers.referer);
        } else {
            var item = {
                product: product,
                quantity: +req.body.quantity,
                price: product.price * +req.body.quantity
            };
            cartRepo.add(req.session.cart, item);
            console.log("[Cart]", req.session.cart);
            res.redirect(req.headers.referer);
        }
    });
});

router.post('/reduce', function(req, res, next) {
    Product.findOne({ productId: req.body.proId }, function(err, product) {
        if (err) {
            console.log("[Error]", err);
            res.redirect(req.headers.referer);
        } else {
            var item = {
                product: product,
                quantity: +req.body.quantity,
                price: product.price * +req.body.quantity
            };
            cartRepo.reduce(req.session.cart, item);
            // console.log("[Cart]", req.session.cart);
            res.redirect(req.headers.referer);
        }
    });
});

router.post('/remove', function(req, res, next) {
    cartRepo.remove(req.session.cart, req.body.proId);
    res.redirect(req.headers.referer);
});

module.exports = router;
