var accountController = {};

accountController.register = function (req, res, next) {
    res.render('account/register', { layout: "main.handlebars"});
}

module.exports = accountController;