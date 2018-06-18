var Product = require('../models/productModel');
var Category = require('../models/categoryModel');
var Brand = require('../models/brandModel');
var cartRepo = require('../repos/cartRepo');

module.exports = (req, res, next) => {
    if(req.session.isLogged === undefined) {
        req.session.isLogged = false;
    }

    var p1 = Brand.find({}).exec();
    var p2 = Category.find({}).exec();
    var p3 = Product.find({})
    .populate("brand")
    .populate("category")
    .exec();

    Promise.all([p1, p2, p3]).then(([ brands, categories, products]) => {
        res.locals.layoutVM = {
            brands: brands,
            categories: categories,
            products: products,
            isLogged: req.session.isLogged,
            currenUser: req.session.currenUser,
            cartSummary: cartRepo.getNumberOfItems(req.session.cart)
        }
        next();
    });

}