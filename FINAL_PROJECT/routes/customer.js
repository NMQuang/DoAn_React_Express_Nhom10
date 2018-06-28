var express = require('express');
var router = express.Router();
var Order = require('../models/orderModel');
var User = require('../models/userModel');

/* GET home page. */
router.get('/info', async function (req, res, next) {
    var userId = req.session.currentUser._id;
    var vm = {
        layout: "home.handlebars"
    }

    vm.currentUser = await User.findOne({
        _id: userId
    })

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
    const userId = req.session.currentUser._id
    const user = req.session.currentUser;

    const vm = {
        layout: "home.handlebars"
    }
    const updateInfo = {}
    

    const result = User.findByIdAndUpdate({
        _id: userId
    }, updateInfo)  

    res.render('customer/changePassword', vm); 
});

router.post('/change-info', async (req, res) => {
    const userId = req.session.currentUser._id
    const {
        phoneNumber,
        name,
        gender,
        location
    } = req.body
    const vm = {
        layout: "home.handlebars"
    }
    const updateInfo = {}

    if (phoneNumber) {
        updateInfo.phone = phoneNumber
    }
    if (name) {
        updateInfo.name = name
    }
    if (gender) {
        updateInfo.genre = gender
    }
    if (location) {
        updateInfo.address = location
    }

    const result = await User.findByIdAndUpdate({
        _id: userId
    }, updateInfo)

    res.redirect('/customer/info');
})


module.exports = router;