var express = require('express');
var router = express.Router();

var accountController = {};

accountController.render = (req, res, next) => {
    res.render('accounts/register');
}

accountController.register = (req, res, next) => {
    
    // var dob = moment(req.body.dob, 'D/M/YYYY')
    //     .format('YYYY-MM-DDTHH:mm');

    // var user = {
    //     username: req.body.username,
    //     password: sha256(req.body.rawPWD).toString(),
    //     name: req.body.name,
    //     email: req.body.email,
    //     dob: dob,
    //     permisson: 0
    // };

    // accountRepo.add(user).then(value => {
    //     res.render('account/register');
    // });
    console.log(req.body);
    res.render('accounts/register');
}

accountController.login = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
}

module.exports = accountController;