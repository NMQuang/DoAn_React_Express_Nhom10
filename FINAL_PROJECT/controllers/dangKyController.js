var express = require('express');
var router = express.Router();
var User = require('../models/userModel');

var accountController = {};

accountController.render = (req, res, next) => {
    var vm = {
        layout: "home.handlebars"
    }
    res.render('_nguoi_dung/dang_ky', vm);
}

accountController.register = (req, res, next) => {
    
    var bale = req.body;
    var user = new User(bale);
    var vm = {
        layout: "home.handlebars"
    };
    user.save(function(err, userDto) {
        if(err) {
            vm.showError = true;
            vm.errorMsg = "Tạo tài khoản thất bại."

            res.render('/_nguoi_dung/dang_ky', vm);
        }
        else {
            vm.showResult = true;
            vm.resultMsg = "Tạo tài khoản thành công";
            req.session.isLogged = true;
            req.session.currentUser = userDto;
            res.redirect('/home');
        }
    });
}

accountController.login = (req, res, next) => {
    var bale = req.body;
    User.findOne({ email: bale.email }, function(err, user) {
        if(err) {
            console.log("Error", err);
            return res.redirect('/home');
        } else {
            if(user === null) {
                return res.redirect('/home');
            } else {      
                user.comparePassword(bale.password, function(err, isMatch) {
                    if(!isMatch) {
                        return res.redirect('/home');
                    } else {
                        req.session.isLogged = true;
                        req.session.currentUser = user;
                        req.session.cart = [];
                        return res.redirect(req.headers.referer);
                    }
                });
            }
        }
    });
}

accountController.logout = (req, res, next) => {
    req.session.currentUser = null;
    req.session.isLogged = false;
    res.redirect('/home');
}

module.exports = accountController;