var express = require('express');
var router = express.Router();
var accoutController = require('../controllers/accountController');

router.get('/login', function(req, res, next) {
    res.render('admin/login', { layout: 'login.handlebars' });
});

router.post('/login', function(req, res, next) {
    var bale = req.body;
    if(bale.username === "admin" && bale.password === "admin") {
        req.session.adminLogged = true;
        return res.redirect('/order/orderList');
    } else {
        var vm = {
            showError: true,
            errorMsg: "Sai tài khoản hoặc mật khẩu",
            layout: 'login.handlebars'
        }
        return res.render('admin/login', vm );
    }
});

router.post('/logout', function(req, res, next) {
    req.session.adminLogged = false;
    res.redirect('/admin/login');
});

module.exports = router;
