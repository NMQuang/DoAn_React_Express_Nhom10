var express = require('express');
var router = express.Router();
var accoutController = require('../controllers/accountController');

/* GET users listing. */
router.get('/register', accoutController.register);

router.get('/login', function(req, res, next) {
    res.render('account/login', { layout: 'login.handlebars' });
});

router.post('/register', function(req, res, next) {
    console.log(req.body);
});

module.exports = router;
