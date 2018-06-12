var express = require('express');
var router = express.Router();

var moment = require('moment');

var Order = require('../models/orderModel');

router.get('/editOrder', function(req, res, next) {
    if(req.session.adminLogged === false || req.session.adminLogged === undefined) {
        return res.redirect('/admin/login')
    }
    var id = req.query.id;
    if(id === undefined) {
        return res.redirect('/order/orderList');
    }
    var vm = {};
    Order.findOne({ orderId: id }, function(err, orderDto) {
        if(err) {
            vm.showError = true;
            vm.errorMsg = "Không thể tải đơn hàng";
        } else {
            vm.orderId = orderDto.orderId;
            res.render('order/editOrder', vm);
        }
    });
});

router.post('/editOrder', function(req, res, next) {
    var id = req.query.id;
    if(id === undefined) {
        return res.redirect('/order/orderList');
    }
    var newStatus = req.body.status;
    var vm = {};
    Order.findOne({ orderId: id}, function(err, order) {
        if(err) {
            vm.showError = true;
            vm.errorMsg = "Không thể tìm thấy đơn hàng";
            res.render(`order/editOrder`, vm);
        } else {
            order.status = parseInt(newStatus, 10);
            order.save(function(err, orderDto) {
                if(err) {
                    vm.showError = true;
                    vm.errorMsg = "Không thể cập nhật đơn hàng";
                    res.render(`order/editOrder`, vm);
                } else {
                    vm.showResult = true;
                    res.render(`order/editOrder`, vm);
                }
            })
        }
    })
});

router.get('/orderList', function(req, res, next) {
    vm = {};
    if(req.session.adminLogged === false || req.session.adminLogged === undefined) {
        return res.redirect('/admin/login')
    }
    Order.find({})
        .sort({ createdAt: -1 })
        .populate("user")
        .populate("products.product")
        .exec(function(err, orderDtos) {
            if(err) {
                vm.showError = true;
                vm.errorMsg = "Không thể tải danh sách đơn hàng";
            } else {
                vm.orders = orderDtos;
                res.render('order/orderList', vm);
            }
        });
});

router.post('/addOrder', function(req, res, next) {
    if(req.session.adminLogged === false || req.session.adminLogged === undefined) {
        return res.redirect('/admin/login')
    }
    var bale = req.body;
    var newId = null;
    bale.time = moment().format("DD/MM/YYYY, hh:mm:ss A");
    bale.createdAt = new Date();
    Order.findOne().sort({createdAt: -1}).exec(function(err, lastDto) {
        if(err) {
            return res.status(404).json({ status: 404, errorMessage: err });
        } else {
            newId = lastDto === null ? 1 : parseInt(lastDto.orderId, 10) + 1;
            bale.orderId = newId;
            var order = new Order(bale);
            order.save(function(err, orderDto) {
                if(err) {
                    res.status(404).json({ status: 404, errorMessage: err });
                }
                else {
                    res.status(200).json({ status: 200, orderDto: orderDto });
                }
            });
        }
    });
});

module.exports = router;
