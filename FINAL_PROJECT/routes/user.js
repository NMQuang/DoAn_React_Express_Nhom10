var express = require('express');
var router = express.Router();

var User = require('../models/userModel');

router.post('/register', function(req, res, next) {
    var bale = req.body;
    var user = new User(bale);
    user.save(function(err, userDto) {
        if(err) {
            res.status(404).json({ status: 404, errorMessage: err });
        }
        else {
            res.status(200).json({ status: 200, userDto: userDto });
        }
    });
});

module.exports = router;
