var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home/homePage', { layout: 'home.handlebars' });
});


module.exports = router;
