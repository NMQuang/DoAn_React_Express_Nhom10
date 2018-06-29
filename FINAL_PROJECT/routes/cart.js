var express = require('express');
var router = express.Router();
var Product = require('../models/productModel');
var Order = require('../models/orderModel');

var cartRepo = require('../repos/cartRepo');

var moment = require('moment');

router.post('/add', function(req, res, next) {
    console.log(req.body.proId);
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
            // console.log("[Cart]", req.session.cart);
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

router.get('/checkout', function(req, res, next) {
    res.redirect('/_gio_hang/gio_hang');
});

router.post('/checkout', function(req, res, next) {
    var products = req.session.cart.map((item) => {
        return {
            product: item.product._id,
            quantity: item.quantity,
            price: item.price
        }
    });
    var user = req.session.currentUser._id;
    var totalPrice = cartRepo.getTotalPrice(req.session.cart);
    
    var bale = {
        user: user,
        products: products,
        totalPrice: totalPrice,
        status: 0,
    }

    var vm = {
        layout: "home.handlebars",
    }

    var newId = null;
    bale.time = moment().format("DD/MM/YYYY, hh:mm:ss A");
    bale.createdAt = new Date();
    Order.findOne().sort({createdAt: -1}).exec(function(err, lastDto) {
        if(err) {
            console.log("[Error]", err);
            vm.showError = true;
            vm.errorMsg = "Thanh toán thất bại";
            res.render('_gio_hang/gio_hang', vm);
        } else {
            newId = lastDto === null ? 1 : parseInt(lastDto.orderId, 10) + 1;
            bale.orderId = newId;
            var order = new Order(bale);
            order.save(function(err, orderDto) {
                if(err) {
                    vm.showError = true;
                    vm.errorMsg = "Thanh toán thất bại";
                    res.render('_gio_hang/gio_hang', vm);
                }
                else {
                    //clear cart
                    req.session.cart = [];
                    
                    vm.showResult = true;
                    vm.resultMsg = "Thanh toán thành công";
                    res.render('_gio_hang/gio_hang', vm);
                }
            });
        }
    });
});

module.exports = router;
