var express = require('express');
var router = express.Router();
var Order = require('../models/orderModel');
var User = require('../models/userModel');

/* GET home page. */
router.get('/info', function(req, res, next) {
    var userId = req.session.currentUser._id;
    var vm = {
        layout: "home.handlebars"
    }
    
    res.render('customer/customer', vm);
});

router.get('/change-password', function(req, res, next) {
    var vm = {
        layout: "home.handlebars"
    }
    res.render('customer/changePassword', vm); 
});

router.post('/change-password', function(req, res, next) {
    var bale = req.body;
    var user = new User(bale);
    console.log(user);
    var vm = {
        layout: "home.handlebars"
    }
    res.render('customer/changePassword', vm); 
});


module.exports = router;
