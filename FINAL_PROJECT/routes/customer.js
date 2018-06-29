var express = require('express');
var router = express.Router();
var Order = require('../models/orderModel');
var User = require('../models/userModel');

/* GET home page. */
router.get('/info', async function (req, res, next) {
    
    if(req.session.currentUser === undefined) {
        return res.redirect('/home');
    } else {
        var userId = req.session.currentUser._id;
        var vm = {
            layout: "home.handlebars"
        }

        vm.currentUser = await User.findOne({
            _id: userId
        })

        res.render('customer/customer', vm);
    }
});

router.get('/change-password', function(req, res, next) {
    if(req.session.currentUser === undefined) {
        return res.redirect('/home');
    } else {
        var vm = {
            layout: "home.handlebars"
        }
        res.render('customer/changePassword', vm); 
    }
});

router.post('/change-password', async (req, res) => {

    var bale = req.body;
    console.log(bale);
    const vm = {
        layout: "home.handlebars"
    }
    if(bale.newPass !== bale.reNewPass) {
        vm.showError = true;
        vm.errorMessage = "Mật khẩu mới và mật khẩu nhập lại không khớp";
        return res.render('customer/changePassword', vm);
    } else {
        const userId = req.session.currentUser._id;
        const updateInfo = {
            password: bale.newPassword
        }
        
        User.findById(userId, function(err, user) {
            if(err) console.log("Error", err);

            user.password = bale.newPass;

            user.save(function(err, userDto) {
                if(err) {
                    vm.showError = true;
                    vm.errorMessage = "Cập nhật mật khẩu thất bại"

                    return res.render('customer/changePassword', vm);
                }
                else {
                    vm.showResult = true;
                    vm.resultMessage = "Cập nhật mật khẩu thành công";
                    return res.render('customer/changePassword', vm); 
                }
            })
        });
    }
});

router.post('/info', async (req, res) => {
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
    }, updateInfo);

    if(result) {
        vm.currentUser = updateInfo;
        vm.showResult = true;
        vm.resultMessage = "Cập nhật thông tin thành công";
    };

    res.render('customer/customer', vm);
})


module.exports = router;