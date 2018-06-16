var Product = require('../models/productModel');

module.exports = (req, res, next) => {
    if(req.session.isLogged === undefined) {
        req.session.isLogged = false;
    }

    // if(req.session.adminLogged = undefined) {
    //     req.session.adminLogged = false;
    // }

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
                }
            }

            console.log("[Product]", productDtos);

            next();
        });
}