var express = require('express');
var router = express.Router();

var orderController = {};

orderController.render = (req, res, next) => {
    res.render('orders/order');
}

// orderController.register = (req, res, next) => {
    
//    console.log(req.body);
//     res.render('accounts/register');
// }

// orderController.login = (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// }

module.exports = orderController;