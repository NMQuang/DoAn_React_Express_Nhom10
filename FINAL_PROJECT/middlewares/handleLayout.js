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
    .limit(10)
    .sort({ createdAt: -1 })
    .exec();

    var p4 = Product.find({})
    .populate("brand")
    .populate("category")
    .limit(10)
    .sort({ view: -1 })
    .exec();

    var p5 = Product.find({})
    .populate("brand")
    .populate("category")
    .limit(10)
    .sort({ purchases: -1 })
    .exec();

    Promise.all([p1, p2, p3, p4, p5]).then(([ brands, categories, products, products_by_view, products_by_purchases]) => {
        res.locals.layoutVM = {
            brands: brands,
            categories: categories,
            products: products,
            products_by_view: products_by_view,
            products_by_purchases: products_by_purchases,
            isLogged: req.session.isLogged,
            currenUser: req.session.currenUser,
            cartSummary: cartRepo.getNumberOfItems(req.session.cart)
        }
        next();
    });

}