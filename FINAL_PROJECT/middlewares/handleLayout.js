var Product = require('../models/productModel');
var Category = require('../models/categoryModel');
var Brand = require('../models/brandModel');
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
    
        Brand.find({}, function(err, brands) {
                    var vm = {};
                    if(err) {
                        if(err) console.log("Error", err);
                    } else {
                        res.locals.layoutVM = {
                            isLogged: req.session.isLogged,
                            brands: brands,
                            currenUser: req.session.currenUser,
                            cartSummary: cartRepo.getNumberOfItems(req.session.cart)
                        }
                    }
                    next();
                });
}