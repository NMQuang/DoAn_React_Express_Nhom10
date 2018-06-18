var Product = require('../models/productModel');
var cartRepo = require('../repos/cartRepo');

module.exports = (req, res, next) => {
    if(req.session.isLogged === undefined) {
        req.session.isLogged = false;
    }

    Product.find({})
        .populate("brand")
        .populate("category")
        .exec(function(err, productDtos) {
            if(err) console.log("Error", err);
            else {
                res.locals.layoutVM = {
                    products: productDtos,
                    isLogged: req.session.isLogged,
                    // adminLogged: req.session.adminLogged,
                    currenUser: req.session.currenUser,
                    cartSummary: cartRepo.getNumberOfItems(req.session.cart)
                }
            }
            next();
        });
}