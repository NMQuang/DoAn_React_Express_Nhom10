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


module.exports = router;
