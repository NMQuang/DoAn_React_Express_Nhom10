var mongoose = require('mongoose');
var orderStatus = require('../configs/order_status');

var schema = mongoose.Schema;

//create schema
var orderSchema = new schema({
    user: { type: schema.Types.ObjectId, required: true, ref: "User" },
    orderId: { type: String, required: true, unique: true },
    products: [{ 
        product: { type: schema.Types.ObjectId, ref: "Product"}, 
        quantity: Number,
        price: Number,
    }],
    totalPrice: { type: Number, required: true },
    status: { type: Number, default: orderStatus.NEW, },
    createdAt: { type: Date, required: true },
    time: { type: String, required: true },
});

var Order = mongoose.model("Order", orderSchema);

module.exports = Order;