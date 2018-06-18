var Order = require('../models/orderModel');

var nguoidungController = {};

nguoidungController.getHistory = (req, res, next) => {
    if(req.session.isLogged === false) {
        res.redirect('/home');
    } else {
        var userId = req.session.currentUser._id;
        var vm = {
            layout: "home.handlebars"
        }

        Order.find({ user: userId })
            .sort({ createdAt: -1 })
            .populate("products.product")
            .exec(function(err, orderDtos) {
                if(err) {
                    vm.showError = true;
                    vm.errorMsg = "Không tải được lịch sử mua hàng"
                    res.render('_nguoi_dung/lich_su_mua_hang', vm);
                } else {
                    if(orderDtos.length === 0) {
                        vm.noInfo = true;
                        return res.render('_nguoi_dung/lich_su_mua_hang', vm);
                    } else {
                        vm.orders = orderDtos;
                        return res.render('_nguoi_dung/lich_su_mua_hang', vm);
                    }
                }
            });
    }
}

module.exports = nguoidungController;